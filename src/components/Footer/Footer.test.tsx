import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import defaultTheme from 'styles/defaultTheme'
import Footer from '.'

describe('Footer', () => {
  it('renders a heading', () => {
    const { getByText } = render(
      <ThemeProvider theme={defaultTheme}>
        <Footer />
      </ThemeProvider>
    )

    getByText('♥')
  })
})