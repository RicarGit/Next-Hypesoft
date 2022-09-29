import { render } from '@testing-library/react'

import defaultTheme from 'styles/defaultTheme'
import { ThemeProvider } from 'styled-components'

import { Company } from './Company'

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