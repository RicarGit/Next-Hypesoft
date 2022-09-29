import { render } from '@testing-library/react'

import defaultTheme from 'styles/defaultTheme'
import { ThemeProvider } from 'styled-components'

import { MyService } from './MyService'

describe('MyService', () => {
  it('should match snapshot', () => {
    const { container } = render(
      <ThemeProvider theme={defaultTheme}>
        <MyService />
      </ThemeProvider>
    )

    expect(container.firstChild).toMatchSnapshot()
  })
})