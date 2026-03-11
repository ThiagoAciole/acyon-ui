import './Drawer.css';
import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { classNames } from '../../utils/classNames';
import { IconButton } from '../IconButton/IconButton';
import { Heading } from '../Heading/Heading';
import { CloseIcon } from '../../icons';

export type DrawerPlacement = 'left' | 'right';
export type DrawerSize = 'sm' | 'md' | 'lg' | 'full';

export interface DrawerProps {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    placement?: DrawerPlacement;
    children: React.ReactNode;
    footer?: React.ReactNode;
    size?: DrawerSize;
    className?: string;
    closeOnOverlayClick?: boolean;
}

export const Drawer: React.FC<DrawerProps> = ({
    isOpen,
    onClose,
    title,
    placement = 'right',
    children,
    footer,
    size = 'md',
    className,
    closeOnOverlayClick = true
}) => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!mounted) return null;

    return createPortal(
        <>
            {isOpen && <div className="drawer-overlay" onClick={closeOnOverlayClick ? onClose : undefined} />}
            <div
                className={classNames(
                    'drawer',
                    `drawer--${placement}`,
                    `drawer--size-${size}`,
                    isOpen && 'drawer--open',
                    className
                )}
                role="dialog"
                aria-modal="true"
                aria-hidden={!isOpen}
            >
                <div className="drawer-header">
                    {title ? <Heading as="h2" size="sm" className="drawer-title">{title}</Heading> : <span />}
                    <IconButton
                        icon={<CloseIcon size={16} />}
                        variant="ghost"
                        size="sm"
                        onClick={onClose}
                        aria-label="Fechar painel"
                    />
                </div>
                <div className="drawer-body">
                    {children}
                </div>
                {footer && (
                    <div className="drawer-footer">
                        {footer}
                    </div>
                )}
            </div>
        </>,
        document.body
    );
};

Drawer.displayName = 'Drawer';
