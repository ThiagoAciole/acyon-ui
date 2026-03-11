import React from 'react';

export interface SpacerProps {
    size?: number | string;
    axis?: 'horizontal' | 'vertical';
    style?: React.CSSProperties;
}

export const Spacer: React.FC<SpacerProps> = ({ size = '1rem', axis = 'vertical', style }) => {
    const width = axis === 'horizontal' ? size : 1;
    const height = axis === 'vertical' ? size : 1;

    return <span style={{ display: 'block', width, minWidth: width, height, minHeight: height, ...style }} aria-hidden="true" />;
};
