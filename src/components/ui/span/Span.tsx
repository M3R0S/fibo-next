import { FC } from "react";
import { classNames } from "utils";
import { spanAccordance } from "./const";

import cl from "./span.module.scss";
import { SpanProps } from "./types";

export const Span: FC<SpanProps> = (props) => {
    const { children, variant, className = "" } = props;

    const { variantClassName } = spanAccordance[variant];
    return (
        <span className={classNames([cl[variantClassName], className])}>
            {children}
        </span>
    );
};
