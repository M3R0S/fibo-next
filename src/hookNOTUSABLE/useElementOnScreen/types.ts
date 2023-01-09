import { MutableRefObject } from "react";
import { HookReturn } from "utils/types";

export interface UseElementOnScreenParams {
    threshold: number[] | number;
    root?: Element;
    rootMargin?: string;
}

export interface UseElementOnScreenReturn {
    containerRef: MutableRefObject<null>;
    isIntersecting: boolean;
}

export type UseElementOnScreen = ({}: UseElementOnScreenParams) => UseElementOnScreenReturn;
