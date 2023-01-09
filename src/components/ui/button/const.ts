import { useNavigate } from "hook/useNavigate/useNavigate";
import { ButtonAccordance } from "./types";

export const buttonAccordance: ButtonAccordance = {
    NavigateHome: {
        variantClassName: "navigate_home",
        useVariantHook: useNavigate,
        variantHookParams: { href: "/" },
        type: "button",
    },
};
