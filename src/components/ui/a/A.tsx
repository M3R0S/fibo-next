import { FC } from "react";
import { classNames } from "utils";

import cl from "./a.module.scss";
import { aAccordance } from "./const";
import { AProps } from "./types";

export const A: FC<AProps> = (props) => {
    const { children, className = "", variant } = props;

    const { src, variantClassName } = aAccordance[variant];
    return <a href={src} className={classNames([cl[variantClassName], className])}>{children}</a>;
};
