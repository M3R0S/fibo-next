import { FC } from "react";

import cl from "./button.module.scss";
import { classNames } from "utils";
import { ButtonAccordanceValues, ButtonHookParams, ButtonProps } from "./types";
import { buttonAccordance } from "./const";

export const Button: FC<ButtonProps> = (props) => {
    const { children, className = "", variant } = props;

    const { variantClassName, useVariantHook, type } =
        buttonAccordance[variant];

    const paramsCallback = () => {
        const accordanceValues = Object.values(
            buttonAccordance
        ) as unknown as ButtonAccordanceValues;

        const params = accordanceValues.reduce((prev, obj) => {
            prev = { ...obj.variantHookParams, ...prev };

            return prev;
        }, {} as ButtonHookParams);

        console.log("params");
        return params;
    };

    const { handleClick } = useVariantHook(paramsCallback());

    return (
        <button
            type={type}
            className={classNames([
                cl.button_root,
                cl[variantClassName],
                className,
            ])}
            onClick={handleClick}
        >
            {children}
        </button>
    );
};
