import { FC } from "react";

import cl from "./headerInfo.module.scss";
import { Button, Logo, Section, Wrapper } from "components/ui";
import { HeaderDeliveryInfo } from "./delivery/HeaderDeliveryInfo";

export const HeaderInfo: FC = () => {
    return (
        <Section className={cl.container}>
            <Wrapper className={cl.wrapper}>
                <Logo />
                <HeaderDeliveryInfo />
            </Wrapper>
            <Wrapper className={cl.wrapper}>
                <Button variant="OrderCall">Заказать звонок</Button>
                <Button variant="CallNumber" className={cl.call_number} />
            </Wrapper>
        </Section>
    );
};
