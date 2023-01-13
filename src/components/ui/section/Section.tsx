import { FC } from "react";
import { classNames } from "utils";

import cl from "./section.module.scss";
import { SectionProps } from "./types";

export const Section: FC<SectionProps> = (props) => {
    const { children, className = "" } = props;

    return (
        <section
            {...props}
            className={classNames(cl.container_root, className)}
        >
            {children}
        </section>
    );
};
