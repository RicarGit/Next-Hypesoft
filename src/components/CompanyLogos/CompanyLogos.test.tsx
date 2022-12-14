import { render } from '@testing-library/react'

import defaultTheme from 'styles/defaultTheme'
import { ThemeProvider } from 'styled-components'

import { CompanyLogo } from './CompanyLogos'

describe('CompanyLogos', () => {
  it('should match snapshot', () => {
    const { container } = render(
      <ThemeProvider theme={defaultTheme}>
        <CompanyLogo />
      </ThemeProvider>
    )

    expect(container.firstChild).toMatchSnapshot()
  })
})