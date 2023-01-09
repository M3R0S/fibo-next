import { FC } from "react";
import { classNames } from "utils";
import { titleVariantAccordance } from "./const";

import cl from "./title.module.scss";
import { TitleProps, TitleTagAccordance } from "./types";

export const Title: FC<TitleProps> = (props) => {
    const { children, tag, variant, className = "" } = props;

    const { variantClassName } = titleVariantAccordance[variant];

    const tagClassName = classNames([cl[variantClassName], className]);

    const titleTagAccordance: TitleTagAccordance = {
        h1: <h1 className={tagClassName}>{children}</h1>,
        h2: <h2 className={tagClassName}>{children}</h2>,
        h3: <h3 className={tagClassName}>{children}</h3>,
        h4: <h4 className={tagClassName}>{children}</h4>,
        h5: <h5 className={tagClassName}>{children}</h5>,
        h6: <h6 className={tagClassName}>{children}</h6>,
    };

    const correctTag = titleTagAccordance[tag];

    return correctTag;
};
