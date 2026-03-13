import type { ColorValue } from '../../utils/styleTokens';

export type LoaderSize = 'extraSmall' | 'small' | 'medium' | 'large';

export interface LoaderProps {
    size?: LoaderSize;
    color?: ColorValue;
    className?: string;
    label?: string;
}
