import './Image.css';
import React, { useState } from 'react';
import { classNames } from '../../utils/classNames';
import { Skeleton } from '../Skeleton/Skeleton';
import type { ImageProps } from './types';
import placeholder from './placeholder.jpg';

export type { ImageObjectFit, ImageProps, ImageRadius } from './types';

export const Image: React.FC<ImageProps> = ({
    src,
    alt,
    objectFit = 'cover',
    radius = 'medium',
    className,
    style,
    fallback,
    width,
    height,
    ...props
}) => {
    const [loaded, setLoaded] = useState(false);
    const [error, setError] = useState(false);

    if (error && fallback) return <>{fallback}</>;

    const resolvedSrc = src || placeholder;
    const resolvedWidth = typeof width === 'number' ? `${width}px` : width;
    const resolvedHeight = typeof height === 'number' ? `${height}px` : height;

    return (
        <div className={classNames('image-wrapper', className)} style={style}>
            {!loaded && !error && (
                <div className={classNames('image-skeleton', `image-radius--${radius}`)}>
                    <Skeleton width={resolvedWidth} height={resolvedHeight} />
                </div>
            )}
            <img
                src={resolvedSrc}
                alt={alt}
                width={resolvedWidth}
                height={resolvedHeight}
                className={classNames('image', `image-fit--${objectFit}`, `image-radius--${radius}`, loaded && 'image--loaded')}
                onLoad={() => setLoaded(true)}
                onError={() => setError(true)}
                {...props}
            />
        </div>
    );
};
