import { ChakraProvider } from "@chakra-ui/react";

import Layout from "../components/Layout";
import theme from "../theme";

// import '../styles/styles.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
