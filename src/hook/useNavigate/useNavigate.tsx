import { useRouter } from "next/router";

import { UseNavigate } from "./types";

export const useNavigate: UseNavigate = ({ href }) => {
    const { push } = useRouter();

    const navigate = () => {
        push(href);
    };

    return { handleClick: navigate };
};
