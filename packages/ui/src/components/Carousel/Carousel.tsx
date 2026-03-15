import './Carousel.css';
import React, { useState, useRef } from 'react';
import { classNames } from '../../utils/classNames';
import { Icon } from '../../icons';
import type { CarouselProps } from './types';

export type { CarouselProps, CarouselOrientation } from './types';

export const Carousel: React.FC<CarouselProps> = ({
    items,
    index,
    defaultIndex = 0,
    onChange,
    itemsPerView = 1,
    orientation = 'horizontal',
    height,
    showDots = true,
    showArrows = true,
    loop = false,
    className,
}) => {
    const isControlled = index !== undefined;
    const [internalIndex, setInternalIndex] = useState(defaultIndex);
    const current = isControlled ? (index ?? 0) : internalIndex;
    const count = items.length;
    const isVertical = orientation === 'vertical';

    // Maximum navigable index considering how many items fit in view
    const maxIndex = loop ? count - 1 : Math.max(0, count - itemsPerView);
    const dotCount = maxIndex + 1;

    const touchStartPos = useRef(0);

    const go = (next: number) => {
        const target = loop
            ? ((next % count) + count) % count
            : Math.min(Math.max(next, 0), maxIndex);
        if (target === current) return;
        if (!isControlled) setInternalIndex(target);
        onChange?.(target);
    };

    const prev = () => go(current - 1);
    const next = () => go(current + 1);

    const atStart = !loop && current === 0;
    const atEnd = !loop && current >= maxIndex;

    const handleKeyDown = (e: React.KeyboardEvent) => {
        const prevKey = isVertical ? 'ArrowUp' : 'ArrowLeft';
        const nextKey = isVertical ? 'ArrowDown' : 'ArrowRight';
        if (e.key === prevKey) { e.preventDefault(); prev(); }
        if (e.key === nextKey) { e.preventDefault(); next(); }
    };

    const handleTouchStart = (e: React.TouchEvent) => {
        touchStartPos.current = isVertical ? e.touches[0].clientY : e.touches[0].clientX;
    };

    const handleTouchEnd = (e: React.TouchEvent) => {
        const endPos = isVertical ? e.changedTouches[0].clientY : e.changedTouches[0].clientX;
        const delta = touchStartPos.current - endPos;
        if (Math.abs(delta) > 40) {
            if (delta > 0) next();
            else prev();
        }
    };

    // Percentage-based translation:
    // Horizontal: track width = viewport width (block flex fills parent).
    // Vertical:   track height = viewport height (via height:100%).
    // In both cases translateX/Y(-100% / itemsPerView * current) moves exactly one slide.
    const translateValue = `calc(-100% / ${itemsPerView} * ${current})`;
    const trackTransform = isVertical
        ? `translateY(${translateValue})`
        : `translateX(${translateValue})`;

    const viewportHeight = height !== undefined
        ? (typeof height === 'number' ? `${height}px` : height)
        : '320px';

    const viewport = (
        <div
            className="carousel__viewport"
            style={isVertical ? { height: viewportHeight } : undefined}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
        >
            <div
                className={classNames(
                    'carousel__track',
                    isVertical && 'carousel__track--vertical',
                )}
                style={{ transform: trackTransform }}
                aria-live="polite"
            >
                {items.map((item, i) => (
                    <div
                        key={i}
                        className="carousel__slide"
                        style={{
                            flex: `0 0 calc(100% / ${itemsPerView})`,
                            // Add gap between slides when showing multiple
                            ...(itemsPerView > 1 && {
                                padding: isVertical
                                    ? 'var(--space-1-5) 0'
                                    : '0 var(--space-1-5)',
                            }),
                        }}
                        role="group"
                        aria-roledescription="slide"
                        aria-label={`Slide ${i + 1} de ${count}`}
                        aria-hidden={i < current || i >= current + itemsPerView}
                    >
                        {item}
                    </div>
                ))}
            </div>
        </div>
    );

    const prevArrow = showArrows && (
        <button
            type="button"
            className="carousel__arrow"
            onClick={prev}
            disabled={atStart}
            aria-label="Slide anterior"
        >
            <Icon name={isVertical ? 'chevron-up' : 'chevron-left'} size={16} />
        </button>
    );

    const nextArrow = showArrows && (
        <button
            type="button"
            className="carousel__arrow"
            onClick={next}
            disabled={atEnd}
            aria-label="Próximo slide"
        >
            <Icon name={isVertical ? 'chevron-down' : 'chevron-right'} size={16} />
        </button>
    );

    return (
        <div
            className={classNames('carousel', `carousel--${orientation}`, className)}
            role="region"
            aria-label="Carrossel"
            tabIndex={0}
            onKeyDown={handleKeyDown}
        >
            {isVertical ? (
                <div className="carousel__col">
                    {prevArrow}
                    {viewport}
                    {nextArrow}
                </div>
            ) : (
                <div className="carousel__row">
                    {prevArrow}
                    {viewport}
                    {nextArrow}
                </div>
            )}

            {showDots && dotCount > 1 && (
                <div className="carousel__dots" role="tablist" aria-label="Slides">
                    {Array.from({ length: dotCount }, (_, i) => (
                        <button
                            key={i}
                            type="button"
                            role="tab"
                            aria-selected={i === current}
                            aria-label={`Ir para posição ${i + 1}`}
                            className={classNames(
                                'carousel__dot',
                                i === current && 'carousel__dot--active',
                            )}
                            onClick={() => go(i)}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

Carousel.displayName = 'Carousel';
