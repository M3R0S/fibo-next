import { useRef, useEffect, useState, useCallback } from "react";

import {
    UseElementOnScreen,
    UseElementOnScreenParams,
    UseElementOnScreenReturn,
} from "./types";

// import { useAppSelector } from "store";

export const useElementOnScreen: UseElementOnScreen = (option) => {
    const containerRef = useRef(null);
    // const { isIntersectingMainProduct } = useAppSelector((state) => state.mainProduct);
    const [isIntersecting, setIsIntersecting] = useState<boolean>(false);

    const callback = useCallback((entries: IntersectionObserverEntry[]) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
            setIsIntersecting(true);
        } else {
            setIsIntersecting(false);
        }
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(callback, option);
        const temp = containerRef.current;

        if (temp) {
            observer.observe(temp);
        }

        return () => {
            if (temp) {
                observer.unobserve(temp);
            }
        };
    }, [option, callback]);

    return { containerRef, isIntersecting };
};
