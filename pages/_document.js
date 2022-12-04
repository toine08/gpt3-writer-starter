import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <meta property="og:title" content="Twitter Bio Generator" key="title"/>
        <meta property="og:description" content="Twitter Bio Generator" key="description"/>
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dfinarzav/image/upload/v1670173070/card-og.jpg"
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
