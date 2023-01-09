import { A, B, Span, Title, Wrapper } from "components/ui";
import { FC } from "react";

import cl from "./headerDeliveryInfo.module.scss";

export const HeaderDeliveryInfo: FC = () => {
    return (
        <Wrapper variant="HeaderDeliveryInfo">
            <Title tag="h1" variant="HeaderDeliveryInfo">
                {"Доставка еды в "}
                <Span variant="HeaderDeliveryInfo">Ялте</Span>
            </Title>
            <Wrapper variant="HeaderDeliveryInfo">
                <A variant="HeaderDeliveryInfo">
                    <Span variant="YandexDeliveryInfoFood">Яндекс еда</Span>
                    <Span variant="YandexDeliveryInfoRating">4.8</Span>
                </A>
                <B variant="HeaderDeliveryInfoLeft">Время доставки</B>
                <B variant="HeaderDeliveryInfoRight">от 31 мин</B>
            </Wrapper>
        </Wrapper>
    );
};
