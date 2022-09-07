import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import defaultTheme from 'styles/defaultTheme'
import HeaderSocialMediaButton from '.'

describe('HeaderSocialMediaButton', () => {
  it('should match snapshot', () => {
    const { container } = render(
      <ThemeProvider theme={defaultTheme}>
        <HeaderSocialMediaButton icon='' />
      </ThemeProvider>
    )

    expect(container.firstChild).toMatchSnapshot()
  })
})