import { ChakraProvider } from "@chakra-ui/react";

import { AppProps } from "next/app";

import { extendTheme } from "@chakra-ui/react";

import Layout from "../components/Layout";

// import '../styles/styles.css'

const theme = extendTheme({
  config: {
    cssVarPrefix: "ck",
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
