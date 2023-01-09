import { StaticImageData } from "next/image";

export interface AccordanceVariantClassName {
    variantClassName: string;
}

export interface AccordanceVariantHook<Hook, Params> {
    useVariantHook: Hook;
    variantHookParams: Params;
}

export type AccordanceVariant<Hook, Params> = AccordanceVariantClassName &
    AccordanceVariantHook<Hook, Params>;

export interface HookReturn {
    handleClick?: () => void;
    handleChange?: () => void;
}

export interface ImgAccordance {
    src: StaticImageData;
    alt: "Логотип";
}
