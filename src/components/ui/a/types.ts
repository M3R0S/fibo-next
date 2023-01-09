import { ReactNode } from "react";
import { AccordanceVariantClassName } from "utils/types";

type AVariant = "HeaderDeliveryInfo";

export interface AProps {
    variant: AVariant;
    children: ReactNode;
    className?: string
}

interface AAccordanceVariant {
    src: string
}

export interface AAccordance {
    HeaderDeliveryInfo: AccordanceVariantClassName & AAccordanceVariant
}