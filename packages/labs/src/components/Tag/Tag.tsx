import './Tag.css';
import React from 'react';
import { classNames } from '../../utils/classNames';
import { colorVar, type TokenColor, type TokenSize } from '../../utils/styleTokens';

export type TagVariant = 'soft' | 'outline';
export type TagSize = Extract<TokenSize, 'xs' | 'sm' | 'md' | 'lg' | 'xl'>;

export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
    variant?: TagVariant;
    size?: TagSize;
    color?: TokenColor;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    closable?: boolean;
    onRemove?: () => void;
}

export function Tag({
    children,
    variant = 'soft',
    size = 'md',
    color = 'primary',
    leftIcon,
    rightIcon,
    closable,
    onRemove,
    className,
    style,
    ...props
}: TagProps) {
    const removable = closable || Boolean(onRemove);

    return (
        <span
            className={classNames('tag', `tag--variant-${variant}`, `tag--size-${size}`, className)}
            style={{ ['--tag-color' as string]: colorVar(color), ...(style ?? {}) }}
            {...props}
        >
            {leftIcon && <span className="tag__icon">{leftIcon}</span>}
            <span className="tag__label">{children}</span>
            {rightIcon && <span className="tag__icon">{rightIcon}</span>}
            {removable && (
                <button type="button" className="tag__remove" onClick={onRemove} aria-label="Remove tag">
                    ×
                </button>
            )}
        </span>
    );
}
