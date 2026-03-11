import './Toast.css';
import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { classNames } from '../../utils/classNames';
import { IconButton } from '../IconButton/IconButton';
import { CheckIcon, WarningIcon, CloseIcon, InfoIcon } from '../../icons';

export type ToastPosition = 'top-right' | 'top-left' | 'top-center' | 'bottom-right' | 'bottom-left' | 'bottom-center';

export interface ToastData {
    id: string;
    title: string;
    description?: string;
    color?: 'primary' | 'success' | 'warning' | 'danger';
    duration?: number;
}

interface ToastContextValue {
    toast: (data: Omit<ToastData, 'id'>) => void;
    dismiss: (id: string) => void;
}

const ToastContext = createContext<ToastContextValue | null>(null);

const COLOR_ICONS: Record<string, React.ReactNode> = {
    success: <CheckIcon size={16} />,
    warning: <WarningIcon size={16} />,
    danger: <CloseIcon size={16} />,
    primary: <InfoIcon size={16} />
};

function ToastItem({ toast, onDismiss }: { toast: ToastData; onDismiss: (id: string) => void }) {
    const [exiting, setExiting] = useState(false);
    
    const handleDismiss = useCallback(() => { 
        setExiting(true); 
        setTimeout(() => onDismiss(toast.id), 250); 
    }, [toast.id, onDismiss]);

    useEffect(() => { 
        const timer = setTimeout(handleDismiss, toast.duration ?? 4000); 
        return () => clearTimeout(timer); 
    }, [handleDismiss, toast.duration]);

    const color = toast.color ?? 'primary';
    const icon = COLOR_ICONS[color] || COLOR_ICONS.primary;

    return (
        <div className={classNames('toast', `toast--${color}`, exiting && 'toast--exiting')}>
            <span className="toast-icon">
                {icon}
            </span>
            <div className="toast-content">
                <p className="toast-title">{toast.title}</p>
                {toast.description && <p className="toast-description">{toast.description}</p>}
            </div>
            <IconButton 
                icon={<CloseIcon size={14} />}
                aria-label="Dismiss notification" 
                variant="ghost" 
                size="sm" 
                onClick={handleDismiss} 
                className="toast-close" 
            />
        </div>
    );
}

export interface ToastProviderProps { 
    children: React.ReactNode; 
    position?: ToastPosition; 
    maxToasts?: number; 
}

export const ToastProvider: React.FC<ToastProviderProps> = ({ 
    children, 
    position = 'top-right', 
    maxToasts = 5 
}) => {
    const [status, setStatus] = useState<boolean>(false);
    const [toasts, setToasts] = useState<ToastData[]>([]);

    useEffect(() => {
        setStatus(true);
    }, []);

    const toast = useCallback((data: Omit<ToastData, 'id'>) => {
        const id = `toast-${Date.now()}-${Math.random().toString(36).slice(2)}`;
        setToasts((prev) => [...prev.slice(-(maxToasts - 1)), { ...data, id }]);
    }, [maxToasts]);

    const dismiss = useCallback((id: string) => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
    }, []);

    return (
        <ToastContext.Provider value={{ toast, dismiss }}>
            {children}
            {status && createPortal(
                <div className={classNames('toast-container', `toast-container--${position}`)}>
                    {toasts.map((t) => (
                        <ToastItem key={t.id} toast={t} onDismiss={dismiss} />
                    ))}
                </div>,
                document.body
            )}
        </ToastContext.Provider>
    );
};

export function useToast(): ToastContextValue {
    const ctx = useContext(ToastContext);
    if (!ctx) throw new Error('useToast must be used inside <ToastProvider>');
    return ctx;
}
