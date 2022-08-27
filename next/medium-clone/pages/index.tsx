import type { NextPage } from 'next'
import Head from 'next/head'
import { Header } from '../components/header'
import { Posts } from '../components/posts'
import {sanityClient, urlFor} from "../sanity"
import { Post } from '../typings'


interface Props {
  posts: [Post]
}

const Home: NextPage<Props> = ( {posts}:Props ) => {
  
  return (
    <div className="h-fit w-full">
      <Head>
        <title>Medium Clone</title>
      </Head>
      {/* Header */}
      <Header/>
      <Posts posts={posts}/>
    </div>
  )
}

export const getServerSideProps = async ({}) =>{
  const query = `*[_type == "post"]{
    _id,
    title,
    author => {
        name,
        image
    },
    description,
    mainImage,
    slug
  }`;

  const posts = await sanityClient.fetch(query)

  return {
    props: {
      posts,
    }
  }
}

export default Home
