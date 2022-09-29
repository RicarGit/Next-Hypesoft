import { render } from '@testing-library/react'

import defaultTheme from 'styles/defaultTheme'
import { ThemeProvider } from 'styled-components'

import { Testimonial } from './Testimonial'

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