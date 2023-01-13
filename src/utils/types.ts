import { StaticImageData } from "next/image";
import { ReactNode } from "react";

export type SectionName = "pizza" | "pasta" | "soup" | "salad";

export interface PopupQueryParams {
    popupId: string | null;
    popupType?: string | null;
}

export interface AccordanceVariantClassName {
    variantClassName?: string;
}

export interface AccordanceVariantHook<Hook> {
    useVariantHook: Hook;
}

export interface AccordanceVariantHookParams<Params> {
    variantHookParams?: Params;
}

export type AccordanceVariant<Hook, Params, Custom> =
    AccordanceVariantClassName &
        AccordanceVariantHook<Hook> &
        AccordanceVariantHookParams<Params> &
        Custom;

export type AllParams<Hook, Params> = AccordanceVariantHook<Hook> &
    AccordanceVariantHookParams<Params>;

export interface HookReturn {
    activeClassName?: string
    value?: ReactNode;
    onClick?: () => void;
}

export interface ImgAccordance {
    src: StaticImageData;
    alt: "Логотип";
}
