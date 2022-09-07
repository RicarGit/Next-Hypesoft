import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import defaultTheme from 'styles/defaultTheme'
import Banner from '.'

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