import { useRouter } from "next/router";

import { NavigateParams } from "./types";

export const useNavigate = () => {
    const { push } = useRouter();

    const navigate = ({ href }: NavigateParams) => {
        push(href);
    };

    return { navigate };
};
