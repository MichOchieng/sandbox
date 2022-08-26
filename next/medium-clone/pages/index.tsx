import type { NextPage } from 'next'
import { Header } from '../components/header'
import { Posts } from '../components/posts'

const Home: NextPage = () => {
  return (
    <div className="h-full w-full">
      {/* Header */}
      <Header/>
      <Posts/>
    </div>
  )
}

export default Home
