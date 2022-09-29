import { render } from '@testing-library/react'

import defaultTheme from 'styles/defaultTheme'
import { ThemeProvider } from 'styled-components'

import { WorkCard } from './WorkCard'

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