import { FC } from "react";

import cl from "./headerSmallScreen.module.scss";

export const HeaderSmallScreen: FC = () => {
    return (
        <header className={cl.navbar}>
            <section className={cl.container}>
                {/* <Logo />
                <div className={cl.control}>
                    <ButtonCallNumber className={cl.call_number} />
                    <ButtonNavigateBasket className={cl.basket} />
                    <ButtonBurger className={cl.burger} />
                    <NavbarBurgerMenuApp />
                </div> */}
            </section>
        </header>
    );
};
