import { FC } from "react";

import { HeaderProps } from "./types";

export const Header: FC<HeaderProps> = (props) => {
    const { children } = props;

    return <header {...props}>{children}</header>;
};
