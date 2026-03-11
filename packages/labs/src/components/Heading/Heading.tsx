import React from 'react';
import { classNames } from '../../utils/classNames';
import './Heading.css';

export type HeadingSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';
export type HeadingWeight = 'medium' | 'semibold' | 'bold';

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
    size?: HeadingSize;
    weight?: HeadingWeight;
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

export const Heading: React.FC<HeadingProps> = ({
    size = 'md',
    weight = 'bold',
    as: Component = 'h2',
    className,
    children,
    ...props
}) => {
    return (
        <Component
            className={classNames(
                'heading',
                `heading--size-${size}`,
                `heading--weight-${weight}`,
                className
            )}
            {...props}
        >
            {children}
        </Component>
    );
};
