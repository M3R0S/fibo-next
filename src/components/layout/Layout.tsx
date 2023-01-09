import { FC } from "react";

import { LayoutHeader } from "./header/LayoutHeader";
import { LayoutFooter } from "./footer/LayoutFooter";
import { LayoutMain } from "./main/LayoutMain";
import { LayoutProps } from "./types";

export const Layout: FC<LayoutProps> = ({ children, font }) => {
    return (
        <>
            <LayoutHeader font={font} />
            <LayoutMain font={font}>{children}</LayoutMain>
            <LayoutFooter font={font} />
        </>
    );
};
