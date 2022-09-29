import { render } from '@testing-library/react'

import defaultTheme from 'styles/defaultTheme'
import { ThemeProvider } from 'styled-components'

import { MySelectedWork } from './MySelectedWork'

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