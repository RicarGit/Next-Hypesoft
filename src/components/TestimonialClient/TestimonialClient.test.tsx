import { render } from '@testing-library/react'

import defaultTheme from 'styles/defaultTheme'
import { ThemeProvider } from 'styled-components'

import { TestimonialClient } from './TestimonialClient'

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