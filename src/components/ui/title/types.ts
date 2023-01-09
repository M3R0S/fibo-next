import {  DetailedHTMLProps, HTMLAttributes, ReactElement, ReactNode } from "react";
import { AccordanceVariantClassName } from "utils/types";

type TitleVariant = "HeaderDeliveryInfo";

type TitleTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export interface TitleProps {
    variant: TitleVariant;
    tag: TitleTag;
    className?: string;
    children: ReactNode;
}

export interface TitleVariantAccordance {
    HeaderDeliveryInfo: AccordanceVariantClassName
}

export type TitleTagAccordance = {
    [key in TitleTag]: ReactElement<HTMLHeadingElement>
}
