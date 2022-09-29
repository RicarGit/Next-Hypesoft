import { render } from '@testing-library/react'

import defaultTheme from 'styles/defaultTheme'
import { ThemeProvider } from 'styled-components'

import { Header } from './Header'

describe('Header', () => {
  it('should match snapshot', () => {
    const { container } = render(
      <ThemeProvider theme={defaultTheme}>
        <Header />
      </ThemeProvider>
    )

    expect(container.firstChild).toMatchSnapshot()
  })
})