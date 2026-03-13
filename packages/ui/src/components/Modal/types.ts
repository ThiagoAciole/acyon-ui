import type * as React from 'react';

export type ModalSize = 'small' | 'medium' | 'large' | 'extraLarge' | 'full';

export interface ModalProps {
    open: boolean;
    onClose: () => void;
    title?: string;
    description?: string;
    size?: ModalSize;
    children: React.ReactNode;
    footer?: React.ReactNode;
    className?: string;
    closeOnOverlayClick?: boolean;
}
