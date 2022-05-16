import "../styles/globals.css";
import React from "react";
import { Provider } from "next-auth/client";
import { ToastProvider } from "react-toast-notifications";
import PropTypes from "prop-types";

function MyApp({ Component, pageProps }) {
  return (
    <ToastProvider
      autoDismiss={true}
      autoDismissTimeout={4000}
      placement="bottom-center"
    >
      <Provider session={pageProps.session}>
        <Component {...pageProps} />
      </Provider>
    </ToastProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.element,
  pageProps: PropTypes.node,
};

export default MyApp;
