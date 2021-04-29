import "../styles/globals.css";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import theme from "./../styles/theme";
import Layout from "./../components/Layout/Layout";
import Navbar from "../components/Navbar/Navbar";
import { Provider } from "react-redux";
import store from "../stores/rootReducer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Portfolio</title>
      </Head>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Navbar />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </Provider>
    </>
  );
}

export default MyApp;
