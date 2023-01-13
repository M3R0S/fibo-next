import { FC } from "react";

import cl from "./layoutMain.module.scss";
import { classNames } from "utils";
import { LayoutMainProps } from "./types";

export const LayoutMain: FC<LayoutMainProps> = ({ children, font }) => {
    return <main className={classNames(cl.main, font)}>{children}</main>;
};
