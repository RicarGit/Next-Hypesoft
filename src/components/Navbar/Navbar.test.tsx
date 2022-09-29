import { render } from '@testing-library/react'

import defaultTheme from 'styles/defaultTheme'
import { ThemeProvider } from 'styled-components'

import { Navbar } from './Navbar'

describe('NavBar', () => {
  it('should match snapshot', () => {
    const { container } = render(
      <ThemeProvider theme={defaultTheme}>
        <Navbar />
      </ThemeProvider>
    )

    expect(container.firstChild).toMatchSnapshot()
  })
})