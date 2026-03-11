import './Badge.css';
import React from 'react';
import { classNames } from '../../utils/classNames';
import type { TokenColor } from '../../utils/styleTokens';

export type BadgeVariant = 'solid' | 'outline' | 'soft';
export type BadgeColor = TokenColor;
export type BadgeSize = 'sm' | 'md' | 'lg';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
    variant?: BadgeVariant;
    color?: BadgeColor;
    size?: BadgeSize;
}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(({
    children,
    variant = 'soft',
    color = 'primary',
    size = 'md',
    className,
    ...props
}, ref) => {
    return (
        <span
            ref={ref}
            className={classNames('badge', `badge--${variant}`, `badge--${color}`, `badge--${size}`, className)}
            {...props}
        >
            {children}
        </span>
    );
});

Badge.displayName = 'Badge';
