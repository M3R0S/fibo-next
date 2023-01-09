import { FC } from "react";

import cl from "./headerInfo.module.scss";
import { Logo, Section, Wrapper } from "components/ui";
import { HeaderDeliveryInfo } from "./delivery/HeaderDeliveryInfo";

export const HeaderInfo: FC = () => {
    return (
        <Section variant="HeaderInfo">
            <Wrapper variant="HeaderInfo">
                <Logo />
                <HeaderDeliveryInfo />
            </Wrapper>
            <Wrapper variant="HeaderInfo">
                {/* <ButtonOrderCall /> */}
                {/* <ButtonCallNumber className={cl.call_number} /> */}
            </Wrapper>
        </Section>
    );
};
