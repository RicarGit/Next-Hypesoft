import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import defaultTheme from 'styles/defaultTheme'
import Testimonial from '.'

describe('Testimonial', () => {
  it('should match snapshot', () => {
    const { container } = render(
      <ThemeProvider theme={defaultTheme}>
        <Testimonial />
      </ThemeProvider>
    )

    expect(container.firstChild).toMatchSnapshot()
  })
})