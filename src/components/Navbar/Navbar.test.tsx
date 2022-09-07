import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import defaultTheme from 'styles/defaultTheme'
import NavBar from '.'

describe('NavBar', () => {
  it('should match snapshot', () => {
    const { container } = render(
      <ThemeProvider theme={defaultTheme}>
        <NavBar />
      </ThemeProvider>
    )

    expect(container.firstChild).toMatchSnapshot()
  })
})