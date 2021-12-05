import NextDocument, { Html, Head, Main, NextScript } from "next/document";

type Props = {};

class Document extends NextDocument<Props> {
  render() {
    return (
      <Html>
        <Head />
        {/* <body className="bg-gray-200"> */}
        <body className="min-h-screen bg-red-600">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;
