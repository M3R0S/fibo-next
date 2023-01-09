import { ReactNode } from "react";
import { AccordanceVariantClassName } from "utils/types";

export type WrapperVariant = "HeaderInfo" | "HeaderDeliveryInfo" | "YandexDelivery";

export interface WrapperProps {
    variant: WrapperVariant;
    children: ReactNode;
    className?: string;
}

export interface WrapperAccordence {
    HeaderInfo: AccordanceVariantClassName
    HeaderDeliveryInfo: AccordanceVariantClassName
    YandexDelivery: AccordanceVariantClassName
}