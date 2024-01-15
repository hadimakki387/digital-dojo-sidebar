import React from "react";
import { MenuItemStyles, SidebarProps } from "react-pro-sidebar";
import { NavItem } from "../types";
interface SidebarLayoutProps extends SidebarProps {
    expanded?: boolean;
    collapsed?: boolean;
    toggled?: boolean;
    broken?: boolean;
    rtl?: boolean;
    theme?: "light" | "dark";
    open: boolean;
    navItems?: NavItem[];
    navList?: string[];
    setOpen?: (e: {
        key: string;
        value: boolean;
    }) => any;
    setToggled?: (e: boolean) => any;
    setBroken?: (e: boolean) => any;
    setExpanded?: (e: boolean) => any;
    sidebarHeader?: React.JSX.Element;
    handleLogout?: () => any;
    FooterItems: NavItem[];
    path: string;
    params?: any;
    searchParams?: any;
    id?: string;
    handleRouteChange: (e: string) => any;
    menuItemStyles: MenuItemStyles;
    themes: any;
}
export default function SidebarLayout({ expanded, collapsed, toggled, broken, rtl, theme, open, navItems, navList, setOpen, setToggled, setBroken, setExpanded, sidebarHeader, handleLogout, FooterItems, path, params, searchParams, id, handleRouteChange, menuItemStyles, themes, ...rest }: SidebarLayoutProps): React.JSX.Element;
export {};
