import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <meta property="og:title" content="Twitter Bio Generator" key="title"/>
        <meta property="og:description" content="Twitter Bio Generator" key="description"/>
        <meta
          property="og:image"
          content="https://ipfs.io/ipfs/Qmcc7qV4Hr8YxYFPepH3a1iw8KZNfTbtDdHcBaCUL9aPHM/card-og.jpg"
        />
        <meta name="twitter:card" content="summary_large_image"></meta>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
