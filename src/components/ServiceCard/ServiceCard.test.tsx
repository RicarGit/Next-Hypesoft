import { render } from '@testing-library/react'

import defaultTheme from 'styles/defaultTheme'
import { ThemeProvider } from 'styled-components'

import { ServiceCard } from './ServiceCard'

describe('ServiceCard', () => {
  it('should match snapshot', () => {
    const { container } = render(
      <ThemeProvider theme={defaultTheme}>
        <ServiceCard icon='' info1='' info2='' alt='' />
      </ThemeProvider>
    )

    expect(container.firstChild).toMatchSnapshot()
  })
})