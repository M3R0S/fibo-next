import { useState } from "react";

import { useScrollDirection } from "hook";

export const useProcessingHeaderInfo = () => {
    const { isScrollDown } = useScrollDirection();

    const [isEnabledHeaderInfo, setIsEnabledHeaderInfo] = useState<boolean>(true);

    function onDisabledNavbarInfo() {
        setIsEnabledHeaderInfo(false);
    }

    function onEnabledNavbarInfo() {
        setIsEnabledHeaderInfo(true);
    }

    return {
        isScrollDown,
        isEnabledHeaderInfo,
        onDisabledNavbarInfo,
        onEnabledNavbarInfo,
    };
};
