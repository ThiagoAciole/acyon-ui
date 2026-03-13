import type * as React from 'react';

export type InputSize = 'small' | 'medium' | 'large';

export interface InputProps extends Omit<React.ComponentPropsWithoutRef<'input'>, 'size' | 'prefix' | 'suffix'> {
    label?: string;
    error?: string;
    hint?: string;
    prefix?: React.ReactNode;
    suffix?: React.ReactNode;
    clearable?: boolean;
    size?: InputSize;
    full?: boolean;
}
