import {
    useButtonCallNumber,
    useButtonNavigate,
    useButtonNavLink,
    useButtonOrderCall,
} from "./hook";
import { ButtonAccordance, Rec } from "./types";

export const buttonAccordance: ButtonAccordance = {
    NavigateHome: {
        useVariantHook: useButtonNavigate,
        variantHookParams: { href: "/" },
    },
    OrderCall: {
        variantClassName: "order_call",
        useVariantHook: useButtonOrderCall,
    },
    CallNumber: {
        variantClassName: "call_number",
        useVariantHook: useButtonCallNumber,
    },
    NavLink: {
        useVariantHook: useButtonNavLink,
    },
};

// const button: Rec = {
//     CallNumber: {}
// }