/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import React from 'react'
// import img from '../public/carimg.jpg'

const Img = () => {
    return (
        <div className='p-6 w-full max-w-[1200px] mx-auto'>
            <h1 className='text-2xl text-white'>Cars</h1>
            <div className="relative w-full h-96 md:h-[400px] lg:h-[500px] xl:h-[600px]">
                <Image
                    src={'https://images.unsplash.com/photo-1651613186467-b7210be490e4'}
                    alt='car'
                    sizes='100vw'
                    className='object-cover rounded'
                    fill
                />
            </div>
        </div>
    )
}

export default Img