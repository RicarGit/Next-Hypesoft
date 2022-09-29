import { render } from '@testing-library/react'

import defaultTheme from 'styles/defaultTheme'
import { ThemeProvider } from 'styled-components'

import { Footer } from './Footer'

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