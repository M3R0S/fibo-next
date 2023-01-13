import { FC } from "react";

import { WrapperProps } from "./types";

export const Wrapper: FC<WrapperProps> = (props) => {
    const { children } = props;

    return <div {...props}>{children}</div>;
};
