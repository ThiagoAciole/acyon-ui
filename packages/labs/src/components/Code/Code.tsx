import './Code.css';
import React from 'react';
import { classNames } from '../../utils/classNames';

export type CodeSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type CodeWeight = 'normal' | 'medium' | 'semibold' | 'bold';

export interface CodeProps extends React.HTMLAttributes<HTMLElement> {
    size?: CodeSize;
    weight?: CodeWeight;
    block?: boolean;
}

export const Code: React.FC<CodeProps> = ({
    size = 'sm',
    weight = 'medium',
    block = false,
    children,
    className,
    ...props
}) => {
    return (
        <code
            className={classNames(
                'code',
                `code--${size}`,
                `code--${weight}`,
                block && 'code--block',
                className
            )}
            {...props}
        >
            {children}
        </code>
    );
};

Code.displayName = 'Code';
