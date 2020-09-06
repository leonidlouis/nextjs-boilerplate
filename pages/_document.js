import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head />
        <link rel="manifest" href="/static/manifest.json" />
        <link
          rel="stylesheet"
          href="/static/anticon/anticons.min.css"
          type="text/css"
        />
        <link rel="stylesheet" href="/static/pokedex.css" type="text/css" />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
