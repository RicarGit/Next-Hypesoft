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