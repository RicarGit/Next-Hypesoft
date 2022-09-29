import { render } from '@testing-library/react'

import defaultTheme from 'styles/defaultTheme'
import { ThemeProvider } from 'styled-components'

import { Banner } from './Banner'

describe('Banner', () => {
  it('should match snapshot', () => {
    const { container } = render(
      <ThemeProvider theme={defaultTheme}>
        <Banner />
      </ThemeProvider>
    )

    expect(container.firstChild).toMatchSnapshot()
  })
})