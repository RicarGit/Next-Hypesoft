import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import defaultTheme from 'styles/defaultTheme'
import Footer from '.'

describe('Footer', () => {
  it('should match snapshot', () => {
    const { container } = render(
      <ThemeProvider theme={defaultTheme}>
        <Footer />
      </ThemeProvider>
    )

    expect(container.firstChild).toMatchSnapshot()
  })
})