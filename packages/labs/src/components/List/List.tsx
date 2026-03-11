import './List.css';
import React, { createContext, useContext } from 'react';
import { classNames } from '../../utils/classNames';
import { Text } from '../Text/Text';
import { CheckIcon } from '../../icons';

export interface ListProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: 'default' | 'bordered' | 'divided' | 'checklist';
}

export interface ListItemProps extends React.HTMLAttributes<HTMLDivElement> {
    description?: React.ReactNode;
    startContent?: React.ReactNode;
    endContent?: React.ReactNode;
    active?: boolean;
    disabled?: boolean;
}

const ListContext = createContext<{ variant: NonNullable<ListProps['variant']> }>({ variant: 'default' });

function ListRoot({ children, variant = 'default', className, ...props }: ListProps) {
    return (
        <ListContext.Provider value={{ variant }}>
            <div className={classNames('list', `list--${variant}`, className)} role="list" {...props}>
                {children}
            </div>
        </ListContext.Provider>
    );
}

function ListItem({
    children,
    description,
    startContent,
    endContent,
    active = false,
    disabled = false,
    className,
    onClick,
    ...props
}: ListItemProps) {
    const { variant } = useContext(ListContext);
    const resolvedStart = variant === 'checklist' && !startContent ? <CheckIcon size={16} /> : startContent;

    return (
        <div
            className={classNames(
                'list-item',
                active && 'list-item--active',
                onClick && !disabled && 'list-item--clickable',
                disabled && 'list-item--disabled',
                className
            )}
            role="listitem"
            tabIndex={disabled ? -1 : onClick ? 0 : undefined}
            onClick={disabled ? undefined : onClick}
            {...props}
        >
            {resolvedStart && <div className="list-item__start">{resolvedStart}</div>}
            <div className="list-item__content">
                <Text as="span" weight="medium" className="list-item__title">{children}</Text>
                {description && <Text as="span" size="sm" color="subtle" className="list-item__description">{description}</Text>}
            </div>
            {endContent && <div className="list-item__end">{endContent}</div>}
        </div>
    );
}

export const List = Object.assign(ListRoot, {
    Item: ListItem
});

(List as typeof List & { displayName?: string }).displayName = 'List';
