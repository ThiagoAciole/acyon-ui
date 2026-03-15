import type * as React from 'react';

export type ImageObjectFit = 'cover' | 'contain' | 'fill' | 'none' | 'scaleDown';
export type ImageRadius = 'small' | 'medium' | 'large' | 'full';

export interface ImageProps extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'width' | 'height'> {
    objectFit?: ImageObjectFit;
    radius?: ImageRadius;
    fallback?: React.ReactNode;
    width?: number | string;
    height?: number | string;
}
