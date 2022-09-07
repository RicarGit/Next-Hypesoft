import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import defaultTheme from 'styles/defaultTheme'
import TestimonialClient from '.'

describe('TestimonialClient', () => {
  it('should match snapshot', () => {
    const { container } = render(
      <ThemeProvider theme={defaultTheme}>
        <TestimonialClient name='' company='' occupation='' />
      </ThemeProvider>
    )

    expect(container.firstChild).toMatchSnapshot()
  })
})