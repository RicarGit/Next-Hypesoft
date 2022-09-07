import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import defaultTheme from 'styles/defaultTheme'
import Contact from '.'

describe('Contact', () => {
  it('should match snapshot', () => {
    const { container } = render(
      <ThemeProvider theme={defaultTheme}>
        <Contact />
      </ThemeProvider>
    )

    expect(container.firstChild).toMatchSnapshot()
  })
})