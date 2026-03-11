import './Image.css';
import React, { useState } from 'react';
import { classNames } from '../../utils/classNames';
import { Skeleton } from '../Skeleton/Skeleton';

export interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
    radius?: 'none' | 'sm' | 'md' | 'lg' | 'full';
    fallback?: React.ReactNode;
}

export const Image: React.FC<ImageProps> = ({
    src,
    alt,
    objectFit = 'cover',
    radius = 'md',
    className,
    style,
    fallback,
    ...props
}) => {
    const [loaded, setLoaded] = useState(false);
    const [error, setError] = useState(false);

    if (error && fallback) return <>{fallback}</>;

    return (
        <div className={classNames('image-wrapper', className)} style={style}>
            {!loaded && !error && <Skeleton className={classNames('image-skeleton', `image-radius--${radius}`)} style={{ width: '100%', height: '100%' }} />}
            <img
                src={src}
                alt={alt}
                className={classNames('image', `image-fit--${objectFit}`, `image-radius--${radius}`, loaded && 'image--loaded')}
                onLoad={() => setLoaded(true)}
                onError={() => setError(true)}
                {...props}
            />
        </div>
    );
};
