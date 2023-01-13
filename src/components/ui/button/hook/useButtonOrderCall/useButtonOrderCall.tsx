import { UseButtonOrderCall } from "./types";

export const useButtonOrderCall: UseButtonOrderCall = () => {
    const orderCall = () => {
        console.log("Звонок заказан");
    };

    return { onClick: orderCall };
};
