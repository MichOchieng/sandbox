import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { sanityClient, urlFor } from "../../sanity";
import { Post } from "../../typings";

const Post: NextPage = () => {
    return(
        <div>
            <h1>aaa</h1>
        </div>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    const query = `
        *[_type == "post"]{
        _id,
        slug {
            current
        },
      }`;
    const posts = await sanityClient.fetch(query);

    const paths = posts.map((post: Post) => ({
        params: {
            slug: post.slug.current
        }
    }));

    return {
        paths,
        fallback: 'blocking'
    }
}

export const getStaticProps = async ({ params }:any) => {
    const query = `
        *[_type == "post" && slug.current == $slug][0]{
        _id,
        _createdAt,
        title,
        author ->{
            name,
            image
        },
        description,
        slug,
        body,
      }`

      const post = await sanityClient.fetch(query, {
        slug: params?.slug,
      })
    
      if (!post) {
        return{
            notFound:true
        }
      }
      else {

      }
}

export default Post