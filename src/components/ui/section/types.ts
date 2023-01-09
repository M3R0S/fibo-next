import { ReactNode } from "react"
import { AccordanceVariantClassName } from "utils/types"

type SectionVariant = "HeaderInfo"

export interface SectionProps {
    variant: SectionVariant
    children: ReactNode
    className?: string
}

export interface SectionAccordance {
    HeaderInfo: AccordanceVariantClassName
}