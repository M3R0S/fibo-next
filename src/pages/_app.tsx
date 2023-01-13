import type { AppProps } from "next/app";
import { Montserrat } from "@next/font/google";
import { Provider } from "react-redux";

import "styles/globals.scss";
import { Layout } from "components";
import { store } from "store";

const montserrat = Montserrat();

export default function App({ Component, pageProps }: AppProps) {
    return (
        <Provider store={store}>
            <Layout font={montserrat.className}>
                <Component {...pageProps} />
            </Layout>
        </Provider>
    );
}
