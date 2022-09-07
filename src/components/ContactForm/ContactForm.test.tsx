import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import defaultTheme from 'styles/defaultTheme'
import ContactForm from '.'

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