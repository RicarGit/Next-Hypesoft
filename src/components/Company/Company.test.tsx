import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import defaultTheme from 'styles/defaultTheme'
import Company from '.'

describe('Company', () => {
  it('should match snapshot', () => {
    const { container } = render(
      <ThemeProvider theme={defaultTheme}>
        <Company logo='' alt='' />
      </ThemeProvider>
    )

    expect(container.firstChild).toMatchSnapshot()
  })
})