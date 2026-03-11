import './DatePicker.css';
import React from 'react';
import { Input, type InputProps } from '../Input/Input';
import { CalendarIcon } from '../../icons';

export interface DatePickerProps extends Omit<InputProps, 'type' | 'value' | 'defaultValue' | 'onChange'> {
    value?: string;
    defaultValue?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const DatePicker = React.forwardRef<HTMLInputElement, DatePickerProps>(
    ({ prefix, ...props }, ref) => {
        return <Input ref={ref} type="date" prefix={prefix ?? <CalendarIcon size={16} />} {...props} />;
    }
);

DatePicker.displayName = 'DatePicker';
