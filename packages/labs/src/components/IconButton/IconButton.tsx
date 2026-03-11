import React from 'react';
import { classNames } from '../../utils/classNames';
import './IconButton.css';
import { Loader } from '../Loader/Loader';
import { Button, ButtonProps } from '../Button/Button';

export type IconButtonVariant = 'solid' | 'soft' | 'ghost' | 'outline';
export type IconButtonSize = 'sm' | 'md' | 'lg';

export interface IconButtonProps extends Omit<ButtonProps, 'children' | 'leftIcon' | 'rightIcon'> {
    icon: React.ReactNode | JSX.Element;
    label?: string;
    variant?: IconButtonVariant;
    size?: IconButtonSize;
    loading?: boolean;
}

export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
    ({ icon, variant = 'solid', size = 'md', loading = false, disabled, className, style, label, ...props }, ref) => {
        return (
            <Button
                ref={ref}
                className={classNames('icon-btn', `icon-btn--size-${size}`, className)}
                aria-label={label || (typeof icon === 'string' ? icon : 'icon-button')}
                aria-busy={loading}
                variant={variant}
                size={size}
                disabled={disabled || loading}
                style={style}
                {...props}
            >
                {loading ? (
                    <Loader />
                ) : (
                    <span className="icon-btn__content">
                        {icon}
                    </span>
                )}
            </Button>
        );
    }
);

IconButton.displayName = 'IconButton';
