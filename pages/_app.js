import "../styles/globals.css";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import theme from "./../styles/theme";
import Layout from "./../components/Layout/Layout";
import Nav from "../components/Nav/Nav";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Head>
          <title>Portfolio</title>
        </Head>
        <Nav />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
