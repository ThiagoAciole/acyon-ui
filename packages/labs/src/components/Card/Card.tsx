import './Card.css';
import React from 'react';
import { classNames } from '../../utils/classNames';
import { Heading } from '../Heading/Heading';
import { Text } from '../Text/Text';

export type CardPadding = 'none' | 'sm' | 'md' | 'lg';
export type CardVariant = 'default' | 'elevated' | 'outlined' | 'ghost';

export interface CardProps extends React.HTMLAttributes<HTMLElement> {
    padding?: CardPadding;
    variant?: CardVariant;
    as?: any;
    [key: string]: any;
}

export function Card({ padding = 'md', variant = 'default', as: Component = 'div', children, className, ...props }: CardProps) {
    return (
        <Component
            className={classNames('card', `card--${variant}`, `card--pad-${padding}`, className)}
            {...props}
        >
            {children}
        </Component>
    );
}

export interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
    title?: string;
    description?: string;
    icon?: React.ReactNode;
    action?: React.ReactNode;
}

export function CardHeader({ title, description, icon, action, children, className, ...props }: CardHeaderProps) {
    return (
        <div className={classNames('card-header', className)} {...props}>
            <div className="card-header__content">
                {(title || icon) && (
                    <div className="card-header__title-wrapper">
                        {icon && <span className="card-header__icon">{icon}</span>}
                        {title && (
                            <Heading size="sm" weight="semibold">
                                {title}
                            </Heading>
                        )}
                    </div>
                )}
                {description && (
                    <Text size="sm" color="subtle">
                        {description}
                    </Text>
                )}
                {children}
            </div>
            {action && <div className="card-header__action">{action}</div>}
        </div>
    );
}

export function CardBody({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
    return <div className={classNames('card-body', className)} {...props}>{children}</div>;
}

export function CardFooter({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
    return <div className={classNames('card-footer', className)} {...props}>{children}</div>;
}
