import { ReactNode } from "react";
import { AccordanceVariant } from "utils/types";
import { UseNavigate, UseNavigateParams } from "hook";

type ButtonVariant = "NavigateHome" ;

export interface ButtonProps {
    variant: ButtonVariant;
    children: ReactNode;
    className?: string;
}

type ButtonHook = UseNavigate;

export type ButtonHookParams = UseNavigateParams ;

export type ButtonAccordanceValues = AccordanceVariant<
    ButtonHook,
    ButtonHookParams
>[];

type ButtonHtmlType = "button" | "submit" | "reset";

interface ButtonAccordanceVariant {
    type: ButtonHtmlType;
}

type NavigateHome = AccordanceVariant<UseNavigate, UseNavigateParams> &
    ButtonAccordanceVariant;

export interface ButtonAccordance {
    NavigateHome: NavigateHome;
}
