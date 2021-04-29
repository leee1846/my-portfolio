import "../styles/globals.css";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import theme from "./../styles/theme";
import Layout from "./../components/Layout/Layout";
import Navbar from "../components/Navbar/Navbar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Head>
          <title>Portfolio</title>
        </Head>
        <Navbar />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
