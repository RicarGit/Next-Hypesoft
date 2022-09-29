import { render } from '@testing-library/react'

import defaultTheme from 'styles/defaultTheme'
import { ThemeProvider } from 'styled-components'

import { ContactForm } from './ContactForm'

describe('ContactForm', () => {
  it('should match snapshot', () => {
    const { container } = render(
      <ThemeProvider theme={defaultTheme}>
        <ContactForm />
      </ThemeProvider>
    )

    expect(container.firstChild).toMatchSnapshot()
  })
})