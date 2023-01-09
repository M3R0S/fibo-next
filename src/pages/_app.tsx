import type { AppProps } from "next/app";
import { Montserrat } from "@next/font/google";

import "styles/globals.scss";
import { Layout } from "components";

const montserrat = Montserrat();

export default function App({ Component, pageProps }: AppProps) {
    return (
        <Layout font={montserrat.className}>
            <Component {...pageProps} />
        </Layout>
    );
}
