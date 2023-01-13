import { useNavigate } from "hook";
import { UseButtonNavigate } from "./types";

export const useButtonNavigate: UseButtonNavigate = ({ href }) => {
    const { navigate } = useNavigate();

    const handleClick = () => {
        navigate({ href });
    };

    return { onClick: handleClick };
};
