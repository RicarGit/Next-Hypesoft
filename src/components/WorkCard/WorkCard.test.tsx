import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import defaultTheme from 'styles/defaultTheme'
import WorkCard from '.'

describe('WorkCard', () => {
  it('should match snapshot', () => {
    const { container } = render(
      <ThemeProvider theme={defaultTheme}>
        <WorkCard children='' workImage='' alt='' />
      </ThemeProvider>
    )

    expect(container.firstChild).toMatchSnapshot()
  })
})