import './Loader.css';
import { classNames } from '../../utils/classNames';
import { colorVar, type TokenColor } from '../../utils/styleTokens';

export type LoaderSize = 'xs' | 'sm' | 'md' | 'lg';

export interface LoaderProps {
    size?: LoaderSize;
    color?: TokenColor;
    className?: string;
    label?: string;
}

export function Loader({ size = 'md', color, className, label = 'Loading...' }: LoaderProps) {
    const style = color ? { ['--loader-color' as string]: colorVar(color) } : {};
    
    return (
        <span role="status" aria-label={label} className={classNames('loader', `loader--${size}`, className)} style={style}>
            <span className="loader__ring" />
            <span className="sr-only">{label}</span>
        </span>
    );
}

