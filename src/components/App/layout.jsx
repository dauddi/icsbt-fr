import React from "react";
import Head from "next/head";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import { store } from "../../store/store"
import { SidebarWithHeader } from "..";

const Layout = ({ children }) => {
  return (
    <Provider store={store}>
      <ChakraProvider>
          <Head>
          <title>Workspaces</title>
          <meta
              name="description"
              content="Admin software for freelancers and agencies"
          />
          <link rel="icon" href="/favicon.ico" />
          </Head>

          <SidebarWithHeader> {children} </SidebarWithHeader>

      </ChakraProvider>      
    </Provider>

  );
}

export default Layout;