import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import defaultTheme from 'styles/defaultTheme'
import MySelectedWork from '.'

describe('MySlectedWork', () => {
  it('should match snapshot', () => {
    const { container } = render(
      <ThemeProvider theme={defaultTheme}>
        <MySelectedWork />
      </ThemeProvider>
    )

    expect(container.firstChild).toMatchSnapshot()
  })
})