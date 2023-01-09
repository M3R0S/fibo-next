import { ReactNode } from "react";
import { AccordanceVariantClassName } from "utils/types";

type HeaderVariant = "Layout";

export interface HeaderProps {
    variant: HeaderVariant;
    children: ReactNode;
    className?: string;
}

export interface HeaderAccordance {
    Layout: AccordanceVariantClassName
}