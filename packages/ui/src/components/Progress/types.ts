import type * as React from 'react';
import type { ColorValue } from '../../utils/styleTokens';

export type ProgressSize = 'small' | 'medium' | 'large';

export interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
    value: number;
    max?: number;
    size?: ProgressSize;
    color?: ColorValue;
    animated?: boolean;
    showValue?: boolean;
    label?: string;
}
