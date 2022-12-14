import styled from 'styled-components'
import type { NextPage } from 'next'

import {
  Header,
  About,
  MyService,
  MySelectedWork,
  CompanyLogo,
  Banner,
  Testimonial,
  Contact,
  Footer
} from '~/components'

const Main = styled.main`
  max-width: 1320px;
  margin: 0 auto;
`

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Main>
        <About />
        <MyService />
        <MySelectedWork />
        <CompanyLogo />
        <Banner />
        <Testimonial />
        <Contact />
      </Main>
      <Footer />
    </>
  )
}

export default Home