import { FC } from "react";
import { CSSTransition } from "react-transition-group";
import { CSSTransitionClassNames } from "react-transition-group/CSSTransition";

import cl from "./headerBigScreen.module.scss";
import { TIMEOUT_ANIMATION_SCROLL_HEADER } from "./const";
import { HeaderBigScreenProps } from "./types";
import { useProcessingHeaderInfo } from "./hook";
import { HeaderInfo } from "./info/HeaderInfo";
import { Header } from "components/ui";
import { classNames } from "utils";
import { HeaderMenu } from "./menu/HeaderMenu";

export const HeaderBigScreen: FC<HeaderBigScreenProps> = ({ font }) => {
    const {
        isScrollDown,
        isEnabledHeaderInfo,
        onDisabledHeaderInfo,
        onEnabledHeaderInfo,
    } = useProcessingHeaderInfo();

    const transitionClassNames: CSSTransitionClassNames = {
        enterActive: cl.header_enter_active,
        exitActive: cl.header_exit_active,
    };

    return (
        <CSSTransition
            in={isScrollDown}
            timeout={TIMEOUT_ANIMATION_SCROLL_HEADER}
            onExiting={onEnabledHeaderInfo}
            onEntered={onDisabledHeaderInfo}
            classNames={transitionClassNames}
        >
            <Header className={classNames(cl.header, font)}>
                {isEnabledHeaderInfo && <HeaderInfo />}
                <HeaderMenu />
            </Header>
        </CSSTransition>
    );
};
