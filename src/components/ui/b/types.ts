import { CSSProperties, ReactNode } from "react"
import { AccordanceVariantClassName } from "utils/types"

type BVariant = "HeaderDeliveryInfoLeft" | "HeaderDeliveryInfoRight"

export interface BProps {
    variant: BVariant
    children: ReactNode
    className?: string
}

export type BAccordance = {
    [key in BVariant]: AccordanceVariantClassName
}