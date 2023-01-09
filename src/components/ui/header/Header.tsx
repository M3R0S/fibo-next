import { FC } from "react";

import cl from "./header.module.scss";
import { HeaderProps } from "./types";
import { classNames } from "utils";
import { headerAccordance } from "./const";

export const Header: FC<HeaderProps> = (props) => {
    const { children, variant, className = "" } = props;

    const { variantClassName } = headerAccordance[variant];

    return (
        <header className={classNames([cl[variantClassName], className])}>
            {children}
        </header>
    );
};
