import type * as React from 'react';

export type ContainerSize = 'small' | 'medium' | 'large' | 'extraLarge' | 'full';

export interface ContainerProps {
    children: React.ReactNode;
    size?: ContainerSize;
    center?: boolean;
    className?: string;
    style?: React.CSSProperties;
}
