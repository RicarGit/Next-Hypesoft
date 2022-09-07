import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import defaultTheme from 'styles/defaultTheme'
import CompanyLogo from '.'

describe('CompanyLogo', () => {
  it('should match snapshot', () => {
    const { container } = render(
      <ThemeProvider theme={defaultTheme}>
        <CompanyLogo />
      </ThemeProvider>
    )

    expect(container.firstChild).toMatchSnapshot()
  })
})