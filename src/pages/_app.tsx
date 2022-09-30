import type { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyle from 'styles/GlobalStyle'
import defautTheme from 'styles/defaultTheme'
import { ThemeProvider } from 'styled-components'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Hypesoft</title>

        <meta
          name='description'
          content='A test of knowledge in NextJS, React and Styled-components'
        />
      </Head>

      <ThemeProvider theme={defautTheme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp