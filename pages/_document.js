import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="stylesheet" type="text/css" href="http://fonts.googleapis.com/css?family=Roboto"></link>
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:00,600,300" rel="stylesheet" type="text/css"></link>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}