import type { NextPage } from 'next'
import Header from 'components/Header'
import { About } from 'components/About'
import MyService from 'components/MyService'
import MySelectedWork from 'components/MySelectedWork'
import CompanyLogo from 'components/CompanyLogo'

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <About />
      <MyService />
      <MySelectedWork />
      <CompanyLogo />
    </>
  )
}

export default Home