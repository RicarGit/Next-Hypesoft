import type { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyle from 'styles/GlobalStyle'
import defautTheme from 'styles/defaultTheme'

import { ThemeProvider } from 'styled-components'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={defautTheme}>
      <GlobalStyle />
      <Head>
        <title>Home - Hypesoft</title>

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true' />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp