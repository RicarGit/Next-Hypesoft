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
        <title>Hypesoft</title>
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp