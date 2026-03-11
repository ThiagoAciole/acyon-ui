import './EmptyState.css';
import React from 'react';
import { classNames } from '../../utils/classNames';
import { Heading } from '../Heading/Heading';
import { Text } from '../Text/Text';

export interface EmptyStateProps extends React.HTMLAttributes<HTMLDivElement> {
    icon?: React.ReactNode;
    title: string;
    description?: string;
    action?: React.ReactNode;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
    icon,
    title,
    description,
    action,
    className,
    ...props
}) => {
    return (
        <div className={classNames('empty-state', className)} {...props}>
            {icon && <div className="empty-state__icon">{icon}</div>}
            <Heading size="md">{title}</Heading>
            {description && <Text color="subtle">{description}</Text>}
            {action && <div className="empty-state__action">{action}</div>}
        </div>
    );
};
