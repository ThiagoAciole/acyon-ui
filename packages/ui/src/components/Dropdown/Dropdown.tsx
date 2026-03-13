import './Dropdown.css';
import React, { createContext, useCallback, useContext, useEffect, useId, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { classNames } from '../../utils/classNames';
import type { DropdownItemProps, DropdownPlacement, DropdownProps } from './types';

export type { DropdownItemProps, DropdownPlacement, DropdownProps } from './types';

interface DropdownContextValue {
    close: () => void;
}

const DropdownContext = createContext<DropdownContextValue | null>(null);

function assignRef<TValue>(ref: React.Ref<TValue> | undefined, value: TValue) {
    if (!ref) return;

    if (typeof ref === 'function') {
        ref(value);
        return;
    }

    (ref as React.MutableRefObject<TValue>).current = value;
}

function resolvePosition(
    rect: DOMRect,
    placement: DropdownPlacement,
    offset: number,
    matchTriggerWidth: boolean
) {
    const top = placement.startsWith('bottom')
        ? rect.bottom + offset
        : rect.top - offset;
    const left = placement.endsWith('end')
        ? rect.right
        : rect.left;

    return {
        top,
        left,
        minWidth: matchTriggerWidth ? rect.width : undefined,
        transform: placement === 'bottom-end'
            ? 'translateX(-100%)'
            : placement === 'top-start'
                ? 'translateY(-100%)'
                : placement === 'top-end'
                    ? 'translate(-100%, -100%)'
                    : undefined,
    };
}

function DropdownRoot({
    children,
    content,
    open,
    defaultOpen = false,
    onOpenChange,
    placement = 'bottom-start',
    offset = 8,
    disabled = false,
    matchTriggerWidth = false,
    closeOnClickOutside = true,
    className,
    ...props
}: DropdownProps) {
    const generatedId = useId();
    const triggerRef = useRef<HTMLElement | null>(null);
    const menuRef = useRef<HTMLDivElement | null>(null);
    const [internalOpen, setInternalOpen] = useState(defaultOpen);
    const [position, setPosition] = useState<{ top: number; left: number; minWidth?: number; transform?: string }>({
        top: 0,
        left: 0,
    });
    const isOpen = open ?? internalOpen;

    const setOpen = useCallback((nextOpen: boolean) => {
        if (open === undefined) {
            setInternalOpen(nextOpen);
        }

        onOpenChange?.(nextOpen);
    }, [onOpenChange, open]);

    const close = useCallback(() => setOpen(false), [setOpen]);

    const updatePosition = useCallback(() => {
        if (!triggerRef.current) return;

        const rect = triggerRef.current.getBoundingClientRect();
        setPosition(resolvePosition(rect, placement, offset, matchTriggerWidth));
    }, [matchTriggerWidth, offset, placement]);

    useEffect(() => {
        if (!isOpen) return;

        updatePosition();

        const handleUpdate = () => updatePosition();
        window.addEventListener('resize', handleUpdate);
        window.addEventListener('scroll', handleUpdate, true);

        return () => {
            window.removeEventListener('resize', handleUpdate);
            window.removeEventListener('scroll', handleUpdate, true);
        };
    }, [isOpen, updatePosition]);

    useEffect(() => {
        if (!isOpen) return;

        const handlePointerDown = (event: MouseEvent) => {
            const target = event.target as Node;

            if (triggerRef.current?.contains(target) || menuRef.current?.contains(target)) {
                return;
            }

            if (closeOnClickOutside) {
                close();
            }
        };

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                close();
                triggerRef.current?.focus();
            }
        };

        document.addEventListener('mousedown', handlePointerDown);
        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('mousedown', handlePointerDown);
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [close, closeOnClickOutside, isOpen]);

    const contextValue = useMemo<DropdownContextValue>(() => ({ close }), [close]);

    const child = React.cloneElement(children, {
        ref: (node: HTMLElement | null) => {
            triggerRef.current = node;
            assignRef((children as React.ReactElement & { ref?: React.Ref<HTMLElement> }).ref, node);
        },
        'aria-expanded': isOpen,
        'aria-haspopup': 'menu',
        'aria-controls': isOpen ? generatedId : undefined,
        onClick: (event: React.MouseEvent<HTMLElement>) => {
            children.props.onClick?.(event);
            if (!event.defaultPrevented && !disabled) {
                setOpen(!isOpen);
            }
        },
        onKeyDown: (event: React.KeyboardEvent<HTMLElement>) => {
            children.props.onKeyDown?.(event);

            if (disabled || event.defaultPrevented) return;

            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                setOpen(!isOpen);
            }

            if (event.key === 'ArrowDown') {
                event.preventDefault();
                setOpen(true);
            }
        },
    });

    return (
        <>
            {child}
            {isOpen && createPortal(
                <DropdownContext.Provider value={contextValue}>
                    <div
                        id={generatedId}
                        ref={menuRef}
                        className={classNames('dropdown__menu', className)}
                        style={{
                            top: position.top,
                            left: position.left,
                            minWidth: position.minWidth,
                            transform: position.transform,
                        }}
                        role="menu"
                        {...props}
                    >
                        <div className="dropdown__content">{content}</div>
                    </div>
                </DropdownContext.Provider>,
                document.body
            )}
        </>
    );
}

function DropdownItem({
    children,
    className,
    inset = false,
    destructive = false,
    keepOpen = false,
    leftContent,
    rightContent,
    onClick,
    onSelect,
    ...props
}: DropdownItemProps) {
    const context = useContext(DropdownContext);

    return (
        <button
            type="button"
            className={classNames(
                'dropdown__item',
                inset && 'dropdown__item--inset',
                destructive && 'dropdown__item--destructive',
                className
            )}
            role="menuitem"
            onClick={(event) => {
                onClick?.(event);
                if (event.defaultPrevented) return;

                onSelect?.();
                if (!keepOpen) {
                    context?.close();
                }
            }}
            {...props}
        >
            <span className="dropdown__item-label">
                {leftContent && <span className="dropdown__item-left">{leftContent}</span>}
                <span>{children}</span>
            </span>
            {rightContent && <span className="dropdown__item-right">{rightContent}</span>}
        </button>
    );
}

export const Dropdown = Object.assign(DropdownRoot, {
    Item: DropdownItem,
});

(Dropdown as typeof Dropdown & { displayName?: string }).displayName = 'Dropdown';
