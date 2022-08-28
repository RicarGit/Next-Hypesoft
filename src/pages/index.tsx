import type { NextPage } from 'next'
import Header from 'components/Header'
import { About } from 'components/About'
import MyService from 'components/MyService'

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <About />
      <MyService />
    </>
  )
}

export default Home