/* eslint-disable @next/next/no-img-element */
import Image, { ImageLoader, ImageProps } from 'next/image'
import React from 'react'
import lqip from 'lqip-modern'
import { GetStaticProps } from 'next'
// import img from '../public/carimg.jpg'

type ImgProps = {
    image: Pick<ImageProps, 'src' | 'blurDataURL' | 'width' | 'height'>
}

export const getStaticProps: GetStaticProps = async () => {
    const url = 'https://images.unsplash.com/photo-1651613186467-b7210be490e4'

    const image  = await fetch(url)
    const buffer = await image.arrayBuffer();
    const data   = await lqip(Buffer.from(buffer))

    return {
        props: {
            image: {
                src: url,
                width: data.metadata.width,
                height: data.metadata.height,
                blurDataURL: data.metadata.dataURIBase64
            }
        }
    }
}


function Img ( { image }: ImgProps ) {
    return (
        <div className='p-6 w-full max-w-[1200px] mx-auto'>
            <h1 className='text-2xl text-white'>Cars</h1>
            <div className="relative w-full h-96 md:h-[400px] lg:h-[500px] xl:h-[600px]">
                <Image
                    className='object-cover rounded'
                    alt={''}
                    {...image}                />
            </div>
        </div>
    )
}

export default Img