import { FC } from "react";

import { Button } from "components/ui";
import { logoAccordance } from "./const";
import { LogoProps } from "./types";
import Image from "next/image";

export const Logo: FC<LogoProps> = (props) => {
    const { buttonClassName, imageClassName } = props;
    const { alt, src } = logoAccordance;

    return (
        <Button variant="NavigateHome" className={buttonClassName}>
            <Image src={src} alt={alt} className={imageClassName} priority />
        </Button>
    );
};
