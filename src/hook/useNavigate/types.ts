import { HookReturn } from "utils/types";

export interface UseNavigateParams {
    href: string;
}

export type UseNavigate = (params: UseNavigateParams) => HookReturn;
