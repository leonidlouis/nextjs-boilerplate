import React from "react";
import App from "next/app";
import { END } from "redux-saga";
import { wrapper } from "../redux/index";

class WrappedApp extends App {
  static getInitialProps = async ({ Component, ctx }) => {
    // 1. Wait for all page actions to dispatch
    const pageProps = {
      ...(Component.getInitialProps
        ? await Component.getInitialProps(ctx)
        : {}),
    };

    // 2. Stop the saga if on server
    if (ctx.req) {
      ctx.store.dispatch(END);
      await ctx.store.sagaTask.toPromise();
    }

    // 3. Return props
    return {
      pageProps,
    };
  };

  render() {
    const { Component, pageProps } = this.props;
    return <Component {...pageProps} />;
  }
}

export default wrapper.withRedux(WrappedApp);
