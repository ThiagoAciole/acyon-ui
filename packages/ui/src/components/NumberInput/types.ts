import type * as React from 'react';

export type NumberInputVariant = 'default' | 'stepper';

export interface NumberInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'value' | 'defaultValue' | 'onChange'> {
  value?: number;
  defaultValue?: number;
  onChange?: (value: number | undefined) => void;
  min?: number;
  max?: number;
  step?: number;
  variant?: NumberInputVariant;
  disabled?: boolean;
  invalid?: boolean;
  fullWidth?: boolean;
  label?: string;
  hint?: string;
  error?: string;
  inputClassName?: string;
  containerClassName?: string;
}
