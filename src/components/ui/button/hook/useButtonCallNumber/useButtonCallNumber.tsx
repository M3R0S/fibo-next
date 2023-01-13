import { useState } from "react";
import { UseButtonCallNumber } from "./types";

export const useButtonCallNumber: UseButtonCallNumber = () => {
    const number = "7 978 779-08-23";
    const [text, setText] = useState(number);

    function changeText() {
        navigator.clipboard.writeText("79787790823");
        setText("Номер скопирован");
        setTimeout(() => {
            setText(number);
        }, 3000);
    }

    return { onClick: changeText, value: text };
};
