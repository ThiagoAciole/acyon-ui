import './PageHeader.css';
import React from 'react';
import { classNames } from '../../utils/classNames';
import { IconButton } from '../IconButton/IconButton';
import { Heading } from '../Heading/Heading';
import { Text } from '../Text/Text';
import { ChevronLeftIcon } from '../../icons';

export interface PageHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
    title: string;
    description?: string;
    showBack?: boolean;
    onBack?: () => void;
    action?: React.ReactNode;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
    title,
    description,
    showBack = false,
    onBack,
    action,
    className,
    ...props
}) => {
    return (
        <div className={classNames('page-header', className)} {...props}>
            <div className="page-header__left">
                {showBack && (
                    <IconButton
                        variant="ghost"
                        size="sm"
                        icon={<ChevronLeftIcon size={16} />}
                        onClick={onBack}
                        label="Back"
                    />
                )}
                <div className="page-header__content">
                    <Heading size="lg">{title}</Heading>
                    {description && <Text color="subtle">{description}</Text>}
                </div>
            </div>
            {action && <div className="page-header__right">{action}</div>}
        </div>
    );
};
