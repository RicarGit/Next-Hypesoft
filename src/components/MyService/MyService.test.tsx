import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import defaultTheme from 'styles/defaultTheme'
import MyService from '.'

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