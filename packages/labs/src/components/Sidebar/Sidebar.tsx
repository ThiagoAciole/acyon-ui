import React, { createContext, useContext, useMemo, useState } from 'react';
import './Sidebar.css';
import { classNames } from '../../utils/classNames';
import { MenuIcon } from '../../icons';

type SidebarContextValue = {
    collapsed: boolean;
    toggleCollapsed: () => void;
};

const SidebarContext = createContext<SidebarContextValue>({
    collapsed: false,
    toggleCollapsed: () => { },
});

function useSidebarContext() {
    return useContext(SidebarContext);
}

export interface SidebarProps extends React.HTMLAttributes<HTMLElement> {
    collapsed?: boolean;
    defaultCollapsed?: boolean;
    onToggle?: (collapsed: boolean) => void;
    children?: React.ReactNode;
}

function SidebarRoot({
    collapsed: controlledCollapsed,
    defaultCollapsed = false,
    onToggle,
    className,
    children,
    ...props
}: SidebarProps) {
    const [internalCollapsed, setInternalCollapsed] = useState(defaultCollapsed);

    const isControlled = controlledCollapsed !== undefined;
    const collapsed = isControlled ? controlledCollapsed : internalCollapsed;

    const toggleCollapsed = () => {
        const nextValue = !collapsed;

        if (!isControlled) {
            setInternalCollapsed(nextValue);
        }

        onToggle?.(nextValue);
    };

    const contextValue = useMemo(
        () => ({
            collapsed,
            toggleCollapsed,
        }),
        [collapsed]
    );

    return (
        <SidebarContext.Provider value={contextValue}>
            <aside
                className={classNames('sidebar', collapsed && 'sidebar--collapsed', className)}
                {...props}
            >
                {children}
            </aside>
        </SidebarContext.Provider>
    );
}

export interface SidebarHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
    icon?: React.ReactNode;
    logo?: React.ReactNode;
    collapsible?: boolean;
}

function SidebarHeader({
    icon,
    logo,
    collapsible = true,
    className,
    children,
    onClick,
    ...props
}: SidebarHeaderProps) {
    const { collapsed, toggleCollapsed } = useSidebarContext();

    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (collapsible) {
            toggleCollapsed();
        }

        onClick?.(e);
    };

    return (
        <div
            className={classNames('sidebar__header', className)}
            onClick={handleClick}
            {...props}
        >
            <div className="sidebar__header-icon">
                {icon ?? <MenuIcon />}
            </div>

            {!collapsed && (
                <div className="sidebar__header-content">
                    {logo ?? children}
                </div>
            )}
        </div>
    );
}

export interface SidebarItemProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    icon?: React.ReactNode | JSX.Element;
    active?: boolean;
    as?: React.ElementType;
    children?: React.ReactNode;
}

function SidebarItem({
    icon,
    active = false,
    as: Component = 'button',
    className,
    children,
    ...props
}: SidebarItemProps) {
    const { collapsed } = useSidebarContext();

    return (
        <Component
            className={classNames(
                'sidebar__item',
                active && 'sidebar__item--active',
                className
            )}
            {...props}
        >
            {icon ? <span className="sidebar__item-icon">{icon}</span> : null}

            {!collapsed && (
                <span className="sidebar__item-label">{children}</span>
            )}
        </Component>
    );
}

export interface SidebarFooterProps extends React.HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode;
}

function SidebarFooter({
    className,
    children,
    ...props
}: SidebarFooterProps) {
    return (
        <div className={classNames('sidebar__footer', className)} {...props}>
            {children}
        </div>
    );
}

export const Sidebar = Object.assign(SidebarRoot, {
    Header: SidebarHeader,
    Item: SidebarItem,
    Footer: SidebarFooter,
});

(Sidebar as typeof Sidebar & { displayName?: string }).displayName = 'Sidebar';
