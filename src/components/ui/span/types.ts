import { ReactNode } from "react";
import { AccordanceVariantClassName } from "utils/types";

type SpanVariant = "HeaderDeliveryInfo" | "YandexDeliveryInfoFood" | "YandexDeliveryInfoRating";

export interface SpanProps {
    variant: SpanVariant;
    children: ReactNode;
    className?: string;
}

export interface SpanAccordance {
    HeaderDeliveryInfo: AccordanceVariantClassName;
    YandexDeliveryInfoFood: AccordanceVariantClassName
    YandexDeliveryInfoRating: AccordanceVariantClassName
}
