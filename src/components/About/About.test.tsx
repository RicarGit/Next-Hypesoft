import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import defaultTheme from 'styles/defaultTheme'
import About from '.'

describe('About', () => {
  it('renders a heading', () => {
    const { getByText } = render(
      <ThemeProvider theme={defaultTheme}>
        <About />
      </ThemeProvider>
    )

    getByText('Years of Experience')
  })
})