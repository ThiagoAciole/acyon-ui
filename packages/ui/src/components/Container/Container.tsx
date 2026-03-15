import React from 'react';
import './Container.css';
import { classNames } from '../../utils/classNames';
import type { ContainerProps } from './types';

export type { ContainerProps, ContainerSize } from './types';

export const Container: React.FC<ContainerProps> = ({
    children,
    size = 'large',
    center,
    className,
    style
}) => {
    return (
        <div
            className={classNames('container', `container--${size}`, className)}
            style={{ ...(center && { margin: '0 auto' }), ...style }}
        >
            {children}
        </div>
    );
};





