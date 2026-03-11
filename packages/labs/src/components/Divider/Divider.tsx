import './Divider.css';
import React from 'react';
import { classNames } from '../../utils/classNames';

export interface DividerProps extends React.HTMLAttributes<HTMLDivElement> {
    orientation?: 'horizontal' | 'vertical';
    label?: string;
}

export function Divider({ orientation = 'horizontal', label, className, ...props }: DividerProps) {
    return (
        <div
            role="separator"
            aria-orientation={orientation}
            className={classNames('divider', `divider--${orientation}`, label && 'divider--labeled', className)}
            {...props}
        >
            {label && orientation === 'horizontal' && <span className="divider__label">{label}</span>}
        </div>
    );
}
