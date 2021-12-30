import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../src/components/App/layout";

import { Provider } from "react-redux";
import { store } from "../src/store/store";

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(
    <ChakraProvider>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </ChakraProvider>
  );
}

export default MyApp;
