import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { animateScroll, scroller } from "react-scroll";

import cl from "../../button.module.scss";
import { useNavigate } from "hook";
import { useAppDispatch, useAppSelector } from "store";
import { UseButtonNavLink } from "./types";
import {
    setIsIntersectingMainProduct,
    setNavbarLinkActive,
    setOpenNavbarBurger,
} from "store/slice";
import {
    SCROLLER_DURATION_MAIN_PRODUCT,
    SCROLLER_OFFSET_MAIN_PRODUCT,
} from "utils/const";
import { classNames } from "utils";
import { locationLinksAccordance } from "./const";

export const useButtonNavLink: UseButtonNavLink = (params) => {
    const { endpoint, isAnchor, to } = params;

    const dispatch = useAppDispatch();
    const { navigate } = useNavigate();
    const { pathname } = useRouter();

    const isEndLoadingMainProduct = useAppSelector(
        (state) => state.mainProduct.isEndLoadingMainProduct
    );

    const navbarLinkActive = useAppSelector(
        (state) => state.navbar.navbarLinkActive
    );

    const [linkClassName, setLinkClassName] = useState<string>(cl.nav_link);

    function blockGlobalIntersecting() {
        dispatch(setIsIntersectingMainProduct(false));
        setTimeout(
            () => dispatch(setIsIntersectingMainProduct(true)),
            SCROLLER_DURATION_MAIN_PRODUCT
        );
    }

    function onSetLinkActive() {
        dispatch(setNavbarLinkActive(endpoint));
        dispatch(setOpenNavbarBurger(false));
    }

    const onClickInAnchor = () => {
        const homePage = "/";

        if (pathname !== homePage) {
            navigate({ href: homePage });
            blockGlobalIntersecting();
        }

        if (pathname === homePage) {
            scroller.scrollTo(endpoint, {
                smooth: isEndLoadingMainProduct ? true : false,
                duration: isEndLoadingMainProduct
                    ? SCROLLER_DURATION_MAIN_PRODUCT
                    : 0,
                offset: SCROLLER_OFFSET_MAIN_PRODUCT,
            });
            blockGlobalIntersecting();
        }
    };

    function onClickInLink() {
        navigate({ href: to });
        animateScroll.scrollToTop({
            duration: 0,
        });
    }

    function onClick() {
        onSetLinkActive();

        if (isAnchor) {
            onClickInAnchor();
        }

        if (!isAnchor) {
            onClickInLink();
        }
    }

    useEffect(() => {
        const path = pathname.substring(1);
        const active = locationLinksAccordance[path];

        dispatch(setNavbarLinkActive(active));
    }, [dispatch, pathname]);

    useEffect(() => {
        if (navbarLinkActive === endpoint) {
            setLinkClassName(classNames(cl.nav_link, cl.nav_link_active));
        }

        if (navbarLinkActive !== endpoint) {
            setLinkClassName(cl.nav_link);
        }
    }, [endpoint, navbarLinkActive]);

    return { onClick, activeClassName: linkClassName };
};
