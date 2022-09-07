import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import defaultTheme from 'styles/defaultTheme'
import ContactSocialMediaButton from '.'

describe('ContactSocialMediaButton', () => {
  it('should match snapshot', () => {
    const { container } = render(
      <ThemeProvider theme={defaultTheme}>
        <ContactSocialMediaButton logo='' alt='' />
      </ThemeProvider>
    )

    expect(container.firstChild).toMatchSnapshot()
  })
})