import { FC } from "react";

import { Button } from "components/ui";
import { logoAccordance } from "./const";
import { LogoProps } from "./types";
import Image from "next/image";

export const Logo: FC<LogoProps> = ({ className }) => {
    const { alt, src } = logoAccordance;

    return (
        <Button variant="NavigateHome" className={className}>
            <Image src={src} alt={alt} priority />
        </Button>
    );
};
