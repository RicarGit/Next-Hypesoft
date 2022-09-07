import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import defaultTheme from 'styles/defaultTheme'
import ServiceCard from '.'

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