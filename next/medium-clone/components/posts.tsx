import Link from "next/link"
import { Post } from "../typings"
import { urlFor } from ".././sanity"

interface Props {
    posts: [Post]
  }

export const Posts = ({posts}:Props) => {
    return(
        <div
            className="
            bg-slate-900 border-b border-slate-400 
            "
        >
            <div
                className="w-5/6 h-fit mx-auto"
            >
                {posts.map((post) => {
                    return (
                        <Link key={post._id} href={post.slug.current}>
                            <div className="post">
                                {/* Post info */}
                                <div
                                    className="h-32 w-3/4 flex flex-col my-7"
                                >
                                    {/* Author Info */}
                                    <div
                                        className="post-author-info"
                                    >
                                        <img 
                                            className="post-avatar"
                                            src={
                                                urlFor(post.author.image).url()!
                                            } 
                                            alt="" />
                                        <h1 className="ml-3">{post.author.name}</h1>
                                    </div>
                                    {/* Post info */}
                                    <div
                                        className="post-post-info"
                                    >
                                        <h1>{post.title}</h1>
                                        <h2 className="text-slate-500">{post.description}</h2>
                                        <h3 className="text-slate-500">{post.publishedAt}</h3>
                                    </div>
                                </div>
                                <img 
                                    className="h-32 w-32 border-0 object-contain"
                                    src={
                                        urlFor(post.mainImage.asset).url()!
                                        } 
                                    alt="" />
                            </div>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}