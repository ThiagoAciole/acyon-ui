import React from 'react';
import { classNames } from '../../utils/classNames';
import './Text.css';

export type TextSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type TextColor = 'default' | 'subtle' | 'muted' | 'inverse' | 'primary' | 'success' | 'danger' | 'warning';

export interface TextProps extends React.HTMLAttributes<HTMLElement> {
    size?: TextSize;
    color?: TextColor;
    weight?: 'normal' | 'medium' | 'semibold' | 'bold';
    as?: React.ElementType;
    htmlFor?: string;
}

export const Text: React.FC<TextProps> = ({
    size = 'md',
    color = 'default',
    weight = 'normal',
    as: Component = 'p',
    className,
    children,
    ...props
}) => {
    return (
        <Component
            className={classNames(
                'text',
                `text--size-${size}`,
                `text--color-${color}`,
                `text--weight-${weight}`,
                className
            )}
            {...props}
        >
            {children}
        </Component>
    );
};
