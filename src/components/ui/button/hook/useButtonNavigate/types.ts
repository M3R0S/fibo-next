import { HookReturn } from "utils/types";

export interface UseButtonNavigateParams {
    href: string
}

export type UseButtonNavigate = (params: UseButtonNavigateParams) => HookReturn;
