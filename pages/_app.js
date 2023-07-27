import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { Analytics } from "@vercel/analytics/react";

import "./global.css";

const theme = extendTheme({
  colors: {
    primary: {
      500: "#6a97b2",
      600: "#6a97b2",
    },
    secondary: {
      500: "#325570",
      600: "#325570",
    },
  },
});

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Analytics />
      <ChakraProvider theme={theme}>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@200&family=Vollkorn&display=swap"
          rel="stylesheet"
        />
        <ToastContainer />
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}
