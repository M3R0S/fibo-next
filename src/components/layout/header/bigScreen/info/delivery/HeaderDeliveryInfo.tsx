import { FC } from "react";

import cl from "./headerDeliveryInfo.module.scss";
import { A, Span, Title, Wrapper } from "components/ui";
import { classNames } from "utils";

export const HeaderDeliveryInfo: FC = () => {
    return (
        <Wrapper className={cl.wrapper}>
            <Title tag="h1" className={cl.header_title}>
                {"Доставка еды в "}
                <Span className={cl.header_title_city}>Ялте</Span>
            </Title>
            <Wrapper className={cl.wrapper_yandex_info}>
                <A className={cl.link} variant="HeaderDeliveryInfo">
                    <Span className={cl.yandex_food}>Яндекс еда</Span>
                    <Span className={cl.yandex_rating}>4.8</Span>
                </A>
                <Title
                    tag="h2"
                    className={classNames(cl.delivery_title, cl.left)}
                >
                    Время доставки
                </Title>
                <Title
                    tag="h2"
                    className={classNames(cl.delivery_title, cl.right)}
                >
                    от 31 мин
                </Title>
            </Wrapper>
        </Wrapper>
    );
};
