import './TextArea.css';
import React from 'react';
import { classNames, LabelFormater } from '../../utils';
import { FormField } from '../FormField/FormField';

export interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
    error?: string;
    supportText?: string;
    full?: boolean;
    resize?: 'none' | 'vertical' | 'horizontal' | 'both';
}

export const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
    ({ label, error, supportText, full = false, resize = 'vertical', className, id, rows = 4, style, ...props }, ref) => {
        const inputId = id ?? (label ? `textarea-${LabelFormater(label)}` : undefined);

        return (
            <FormField label={label} error={error} hint={supportText} full={full} htmlFor={inputId} className={className}>
                <textarea
                    ref={ref}
                    id={inputId}
                    rows={rows}
                    className={classNames(
                        'textarea',
                        error && 'textarea--error'
                    )}
                    aria-invalid={!!error}
                    aria-describedby={error ? `${inputId}-error` : supportText ? `${inputId}-supportText` : undefined}
                    style={{ resize, ...(style ?? {}) }}
                    {...props}
                />
            </FormField>
        );
    }
);

TextArea.displayName = 'TextArea';
