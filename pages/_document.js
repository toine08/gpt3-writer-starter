import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <meta property="og:title" content="Twitter Bio generator" key="title"/>
        <meta property="og:description" content="GPT Twitter Bio Generator" key="description"/>
        <meta
          property="og:image"
          content="https://ipfs.io/ipfs/QmNiAMzLp8sQMHgtfpnb35hvnExdcta4SYDkWdTtmJj7pc"
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
