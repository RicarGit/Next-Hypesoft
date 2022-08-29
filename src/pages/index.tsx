import type { NextPage } from 'next'
import Header from 'components/Header'
import { About } from 'components/About'
import MyService from 'components/MyService'
import MySelectedWork from 'components/MySelectedWork'
import CompanyLogo from 'components/CompanyLogo'
import Banner from 'components/Banner'
import Testimonial from 'components/Testimonial'
import Contact from 'components/Contact'

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <About />
      <MyService />
      <MySelectedWork />
      <CompanyLogo />
      <Banner />
      <Testimonial />
      <Contact />
    </>
  )
}

export default Home