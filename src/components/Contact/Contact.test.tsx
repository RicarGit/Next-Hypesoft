import { render } from '@testing-library/react'

import defaultTheme from 'styles/defaultTheme'
import { ThemeProvider } from 'styled-components'

import { Contact } from './Contact'

describe('Contact', () => {
  it('should match snapshot', () => {
    const { container } = render(
      <ThemeProvider theme={defaultTheme}>
        <Contact />
      </ThemeProvider>
    )

    expect(container.firstChild).toMatchSnapshot()
  })
})