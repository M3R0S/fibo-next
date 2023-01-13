import { HTMLAttributes } from "react";
import { AccordanceVariant, AllParams } from "utils/types";
import {
    UseButtonCallNumber,
    UseButtonNavigate,
    UseButtonNavigateParams,
    UseButtonNavLink,
    UseButtonNavLinkParams,
    UseButtonOrderCall,
} from "./hook";

type ButtonVariant = "NavigateHome" | "OrderCall" | "CallNumber" | "NavLink";

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    variant: ButtonVariant;
    hookparams?: ButtonHookParamsProps;
}

type ButtonHook =
    | UseButtonNavigate
    | UseButtonOrderCall
    | UseButtonCallNumber
    | UseButtonNavLink;

export type ButtonHookParamsProps =
    | UseButtonNavigateParams
    | UseButtonNavLinkParams;

export type ButtonHookParams = UseButtonNavigateParams & UseButtonNavLinkParams;

export type AllButtonParams = AllParams<ButtonHook, ButtonHookParams>[];

type ButtonHtmlType = "button" | "submit" | "reset";

interface ButtonAccordanceVariant {
    type?: ButtonHtmlType;
}

type NavigateHome = AccordanceVariant<
    UseButtonNavigate,
    UseButtonNavigateParams,
    ButtonAccordanceVariant
>;

type OrderCall = AccordanceVariant<
    UseButtonOrderCall,
    null,
    ButtonAccordanceVariant
>;

type CallNumber = AccordanceVariant<
    UseButtonCallNumber,
    null,
    ButtonAccordanceVariant
>;

type NavLink = AccordanceVariant<
    UseButtonNavLink,
    UseButtonNavLinkParams,
    ButtonAccordanceVariant
>;

export interface ButtonAccordance {
    NavigateHome: NavigateHome;
    OrderCall: OrderCall;
    CallNumber: CallNumber;
    NavLink: NavLink;
}

interface R {
    variantClassName?: string;
    useVariantHook: ButtonHook;
    variantHookParams?: ButtonHookParamsProps;
}

export type Rec = Record<ButtonVariant, R>;
