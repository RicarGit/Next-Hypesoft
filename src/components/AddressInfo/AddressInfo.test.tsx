import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import defaultTheme from 'styles/defaultTheme'
import AddressInfo from '.'

describe('AddresInfo', () => {
  it('should match snapshot', () => {
    const { container } = render(
      <ThemeProvider theme={defaultTheme}>
        <AddressInfo wayToContact='' info1='' info2='' alt='' />
      </ThemeProvider>
    )

    expect(container.firstChild).toMatchSnapshot()
  })
})