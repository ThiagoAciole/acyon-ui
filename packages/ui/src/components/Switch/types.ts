import type * as React from 'react';

export type SwitchSize = 'small' | 'medium';

export interface SwitchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
    label?: string;
    size?: SwitchSize;
}
