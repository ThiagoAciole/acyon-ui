import './NumberInput.css';
import React from 'react';
import { classNames } from '../../utils';
import { FormField } from '../FormField/FormField';
import { Icon } from '../../icons';
import type { NumberInputProps } from './types';

export type { NumberInputProps, NumberInputVariant } from './types';

function clamp(value: number, min?: number, max?: number): number {
    if (min !== undefined && value < min) return min;
    if (max !== undefined && value > max) return max;
    return value;
}

export const NumberInput = React.forwardRef<HTMLInputElement, NumberInputProps>(
    (
        {
            value,
            defaultValue,
            onChange,
            min,
            max,
            step = 1,
            variant = 'default',
            disabled = false,
            invalid = false,
            fullWidth = false,
            label,
            hint,
            error,
            inputClassName,
            containerClassName,
            id,
            ...props
        },
        ref,
    ) => {
        const generatedId = React.useId();
        const inputId = id ?? (label ? `number-input-${generatedId}` : undefined);

        const isControlled = value !== undefined;
        const [internalValue, setInternalValue] = React.useState<number | undefined>(defaultValue);
        const [inputText, setInputText] = React.useState<string>(
            String(isControlled ? (value ?? '') : (defaultValue ?? '')),
        );

        const currentValue = isControlled ? value : internalValue;

        React.useEffect(() => {
            if (isControlled) {
                setInputText(value !== undefined ? String(value) : '');
            }
        }, [isControlled, value]);

        const commit = (raw: string) => {
            const trimmed = raw.trim();
            if (trimmed === '' || trimmed === '-') {
                if (!isControlled) setInternalValue(undefined);
                onChange?.(undefined);
                return;
            }

            const parsed = Number(trimmed);
            if (!Number.isFinite(parsed)) return;

            const clamped = clamp(parsed, min, max);
            setInputText(String(clamped));
            if (!isControlled) setInternalValue(clamped);
            onChange?.(clamped);
        };

        const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            setInputText(event.target.value);
        };

        const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
            commit(event.target.value);
            props.onBlur?.(event);
        };

        const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
            if (event.key === 'Enter') {
                commit((event.target as HTMLInputElement).value);
            }
            props.onKeyDown?.(event);
        };

        const increment = () => {
            const base = currentValue ?? (min ?? 0);
            const next = clamp(base + step, min, max);
            setInputText(String(next));
            if (!isControlled) setInternalValue(next);
            onChange?.(next);
        };

        const decrement = () => {
            const base = currentValue ?? (min ?? 0);
            const next = clamp(base - step, min, max);
            setInputText(String(next));
            if (!isControlled) setInternalValue(next);
            onChange?.(next);
        };

        const atMin = min !== undefined && (currentValue ?? -Infinity) <= min;
        const atMax = max !== undefined && (currentValue ?? Infinity) >= max;

        const resolvedError = error ?? (invalid ? ' ' : undefined);

        return (
            <FormField
                label={label}
                hint={hint}
                error={resolvedError}
                full={fullWidth}
                htmlFor={inputId}
                className={containerClassName}
            >
                <div
                    className={classNames(
                        'number-input',
                        `number-input--${variant}`,
                        resolvedError && 'number-input--error',
                        disabled && 'number-input--disabled',
                        fullWidth && 'number-input--full',
                    )}
                >
                    {/* Stepper: decrement button on the LEFT */}
                    {variant === 'stepper' && (
                        <button
                            type="button"
                            tabIndex={-1}
                            className="number-input__stepper-btn number-input__stepper-btn--decrement"
                            onClick={decrement}
                            disabled={disabled || atMin}
                            aria-label="Diminuir"
                        >
                            <Icon name="minus" size={14} />
                        </button>
                    )}

                    <input
                        ref={ref}
                        id={inputId}
                        type="text"
                        inputMode="decimal"
                        role="spinbutton"
                        aria-valuenow={currentValue}
                        aria-valuemin={min}
                        aria-valuemax={max}
                        aria-invalid={invalid || !!error}
                        disabled={disabled}
                        value={inputText}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        onKeyDown={handleKeyDown}
                        className={classNames('number-input__input', inputClassName)}
                        {...props}
                    />

                    {/* Default: chevron up/down stacked vertically on the RIGHT */}
                    {variant === 'default' && (
                        <div className="number-input__chevrons">
                            <button
                                type="button"
                                tabIndex={-1}
                                className="number-input__chevron-btn"
                                onClick={increment}
                                disabled={disabled || atMax}
                                aria-label="Aumentar"
                            >
                                <Icon name="chevron-up" size={12} />
                            </button>
                            <button
                                type="button"
                                tabIndex={-1}
                                className="number-input__chevron-btn"
                                onClick={decrement}
                                disabled={disabled || atMin}
                                aria-label="Diminuir"
                            >
                                <Icon name="chevron-down" size={12} />
                            </button>
                        </div>
                    )}

                    {/* Stepper: increment button on the RIGHT */}
                    {variant === 'stepper' && (
                        <button
                            type="button"
                            tabIndex={-1}
                            className="number-input__stepper-btn number-input__stepper-btn--increment"
                            onClick={increment}
                            disabled={disabled || atMax}
                            aria-label="Aumentar"
                        >
                            <Icon name="plus" size={14} />
                        </button>
                    )}
                </div>
            </FormField>
        );
    },
);

NumberInput.displayName = 'NumberInput';
