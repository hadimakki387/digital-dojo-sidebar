import { ReactNode } from "react";
export interface NavItem {
    name: string;
    path?: string;
    icon: (props?: IconProps) => ReactNode;
    suffix?: ReactNode;
    subItems?: NavItem[];
    id?: string;
    action?: NavItemAction;
}
export interface IconProps extends React.SVGAttributes<HTMLOrSVGElement> {
    size?: number;
}
export type NavItemAction = "LOGOUT" | undefined;
