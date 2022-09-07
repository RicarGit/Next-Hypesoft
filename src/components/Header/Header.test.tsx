import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import defaultTheme from 'styles/defaultTheme'
import Header from '.'

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