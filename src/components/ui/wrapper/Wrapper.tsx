import { FC } from "react";

import cl from "./wrapper.module.scss";
import { classNames } from "utils";
import { WrapperProps } from "./types";
import { wrapperAccordance } from "./const";

export const Wrapper: FC<WrapperProps> = (props) => {
    const { children, className = "", variant } = props;

    const { variantClassName } = wrapperAccordance[variant];

    return (
        <div
            className={classNames([
                cl.wrapper_root,
                cl[variantClassName],
                className,
            ])}
        >
            {children}
        </div>
    );
};
