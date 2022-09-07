import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import defaultTheme from 'styles/defaultTheme'
import About from '.'

describe('About', () => {
  it('should match snapshot', () => {
    const { container } = render(
      <ThemeProvider theme={defaultTheme}>
        <About />
      </ThemeProvider>
    )

    expect(container.firstChild).toMatchSnapshot()
  })
})