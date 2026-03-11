import './Switch.css';
import React from 'react';
import { classNames } from '../../utils/classNames';

export interface SwitchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
    label?: string;
    size?: 'sm' | 'md';
}

export const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
    ({ label, size = 'md', className, disabled, ...props }, ref) => {
        return (
            <label className={classNames(
                'switch-wrapper',
                `switch--${size}`,
                disabled && 'switch-wrapper--disabled',
                className
            )}>
                <input
                    type="checkbox"
                    className="switch-input"
                    disabled={disabled}
                    ref={ref}
                    {...props}
                />
                <span className="switch-track">
                    <span className="switch-thumb" />
                </span>
                {label && <span className="switch-label">{label}</span>}
            </label>
        );
    }
);

Switch.displayName = 'Switch';
