import './Button.css';
import React from 'react';
import { classNames } from '../../utils/classNames';
import { Loader } from '../Loader/Loader';

export type ButtonVariant = 'solid' | 'soft' | 'ghost' | 'outline';
export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type ButtonColor = 'primary' | 'success' | 'danger' | 'warning' | 'default';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    size?: ButtonSize;
    loading?: boolean;
    icon?: React.ReactNode | JSX.Element;
    iconRight?: boolean;
    full?: boolean;
    color?: ButtonColor;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({
        variant = 'solid',
        size = 'md',
        loading = false,
        disabled,
        icon,
        iconRight = false,
        full = false,
        color = 'primary',
        children,
        className,
        style,
        ...props
    }, ref) => {
        const isDisabled = disabled || loading;

        return (
            <button
                ref={ref}
                disabled={isDisabled}
                aria-busy={loading}
                className={classNames(
                    'btn',
                    `btn--${variant}`,
                    `btn--${size}`,
                    `btn--color-${color}`,
                    full && 'btn--full',
                    loading && 'btn--loading',
                    className
                )}
                {...props}
            >
                {loading && (
                    <Loader 
                        size={size === 'xs' || size === 'sm' ? 'xs' : size === 'md' ? 'sm' : 'md'} 
                        className="btn__spinner" 
                    />
                )}
                {!loading && icon && !iconRight && (
                    <span className="btn__icon btn__icon--left">{icon}</span>
                )}
                {children && <span className="btn__label">{children}</span>}
                {!loading && icon && iconRight && (
                    <span className="btn__icon btn__icon--right">{icon}</span>
                )}
            </button>
        );
    }
);

Button.displayName = 'Button';
