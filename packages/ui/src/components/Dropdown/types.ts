import type * as React from 'react';

export type DropdownPlacement = 'bottom-start' | 'bottom-end' | 'top-start' | 'top-end';

export interface DropdownProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'children' | 'content'> {
    children: React.ReactElement;
    content: React.ReactNode;
    open?: boolean;
    defaultOpen?: boolean;
    onOpenChange?: (open: boolean) => void;
    placement?: DropdownPlacement;
    offset?: number;
    disabled?: boolean;
    matchTriggerWidth?: boolean;
    closeOnClickOutside?: boolean;
}

export interface DropdownItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    inset?: boolean;
    destructive?: boolean;
    keepOpen?: boolean;
    leftContent?: React.ReactNode;
    rightContent?: React.ReactNode;
    onSelect?: () => void;
}
