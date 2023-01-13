import { HookReturn } from "utils/types";

export interface UseButtonNavLinkParams {
    isAnchor: boolean;
    endpoint: string;
    to: string;
}

export type UseButtonNavLink = (params: UseButtonNavLinkParams) => HookReturn

export interface LocationLinksAccordance {
    [key: string]: string;
}