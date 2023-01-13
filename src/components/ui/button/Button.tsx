import { FC } from "react";

import cl from "./button.module.scss";
import { classNames } from "utils";
import { AllButtonParams, ButtonHookParams, ButtonProps } from "./types";
import { buttonAccordance } from "./const";

export const Button: FC<ButtonProps> = (props) => {
    const { children, className = "", variant, hookparams } = props;

    const {
        variantClassName,
        useVariantHook,
        type = "button",
    } = buttonAccordance[variant];

    const mainClassName = variantClassName ? cl[variantClassName] : "";

    const paramsCallback = () => {
        const accordanceValues = Object.values(
            buttonAccordance
        ) as unknown as AllButtonParams;

        const params = accordanceValues.reduce((prev, obj) => {
            prev = { ...obj.variantHookParams, ...hookparams, ...prev };

            return prev;
        }, {} as ButtonHookParams);

        return params;
    };

    const { onClick, value, activeClassName = "" } = useVariantHook(paramsCallback());

    return (
        <button
            {...props}
            type={type}
            className={classNames(cl.button_root, mainClassName, activeClassName, className)}
            onClick={onClick}
        >
            {value ? value : children}
        </button>
    );
};
