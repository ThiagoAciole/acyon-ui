import React from 'react';
import { Input, type InputProps } from '../Input/Input';
import { Loader } from '../Loader/Loader';
import { SearchIcon } from '../../icons';
export interface SearchProps extends Omit<InputProps, 'prefix' | 'type'> {
    onSearch?: (value: string) => void;
    loading?: boolean;
}

export const Search = React.forwardRef<HTMLInputElement, SearchProps>(
    ({ onSearch, loading = false, onChange, ...props }, ref) => {
        const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            onChange?.(event);
            onSearch?.(event.target.value);
        };

        return (
            <Input
                ref={ref}
                type="search"
                prefix={loading ? <Loader size="xs" /> : <SearchIcon size={16} />}
                onChange={handleChange}
                {...props}
            />
        );
    }
);

Search.displayName = 'Search';
