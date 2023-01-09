import { FC } from "react";

import cl from "./section.module.scss";
import { SectionProps } from "./types";
import { classNames } from "utils";
import { sectionAccordance } from "./const";

export const Section: FC<SectionProps> = (props) => {
    const { children, className = "", variant } = props;

    const { variantClassName } = sectionAccordance[variant];
    return (
        <section
            className={classNames([
                cl.container_root,
                cl[variantClassName],
                className,
            ])}
        >
            {children}
        </section>
    );
};
