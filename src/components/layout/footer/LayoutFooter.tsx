import { FC } from "react";

import cl from "./layoutFooter.module.scss";
import { classNames } from "utils";
import { LayoutFooterProps } from "./types";

export const LayoutFooter: FC<LayoutFooterProps> = ({ font }) => {
    return (
        <footer className={classNames([cl.footer, font])}>
            
        </footer>
    );
};
