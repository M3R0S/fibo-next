import { FC } from "react";

import cl from "./b.module.scss";
import { classNames } from "utils";
import { bAccordance } from "./const";
import { BProps } from "./types";

export const B: FC<BProps> = (props) => {
    const { children, variant, className = "" } = props;

    const { variantClassName } = bAccordance[variant];
    return (
        <b
            className={classNames([cl[variantClassName], className])}
        >
            {children}
        </b>
    );
};
