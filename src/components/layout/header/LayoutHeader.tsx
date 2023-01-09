import { FC } from "react";

import cl from "./layoutHeader.module.scss";
import { classNames } from "utils";
import { LayoutHeaderProps } from "./types";
import { useScreenSize } from "hook";
import { HeaderBigScreen } from "./bigScreen/HeaderBigScreen";

export const LayoutHeader: FC<LayoutHeaderProps> = ({ font }) => {
    const { screenWidth } = useScreenSize();

    if (screenWidth >= 1200) {
        return <HeaderBigScreen font={font} />;
    } else {
        // return <NavbarSmallScreen />;
        return <div></div>
    }
};
