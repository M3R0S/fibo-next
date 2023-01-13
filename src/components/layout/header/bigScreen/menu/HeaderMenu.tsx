import { FC } from "react";

import cl from "./headerMenu.module.scss";
import { Navbar, Section } from "components/ui";

export const HeaderMenu: FC = () => {
    return (
        <Section className={cl.container}>
            <Navbar className={cl.nav} />
            {/* <ButtonNavigateLogin />
            <ButtonNavigateBasket /> */}
        </Section>
    );
};
