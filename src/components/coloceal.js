'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import ImageSlider from './imageSlider'
// import Banner1 from 'https://cf.shopee.co.th/file/th-50009109-4c424d798f9732be85266b3e54f8bd5c_xhdpi'



const Coloceal = () => {

    const images = [
        'https://cf.shopee.co.th/file/th-50009109-4c424d798f9732be85266b3e54f8bd5c_xhdpi',
        'https://cf.shopee.co.th/file/th-50009109-a2d05828062c55a4d7bdd46a6a9593de_xhdpi'
    ]

    return (
        <div className='w-full flex max-w-[1240px]'>
            <div className='p-1 w-full lg:w-2/3 flex'>
                <ImageSlider images={images} />
            </div>
            <div className='hidden h-full lg:flex flex-col gap-1 justify-items-start p-1'>
                <div className='h-1/2 overflow-hidden'>
                    <Image
                        width={400}
                        height={300}
                        src='https://cf.shopee.co.th/file/th-50009109-4c424d798f9732be85266b3e54f8bd5c_xhdpi' alt='banner1' />
                </div>
                <div>
                    <Image
                        width={400}
                        height={300}
                        src='https://cf.shopee.co.th/file/th-50009109-a2d05828062c55a4d7bdd46a6a9593de_xhdpi' alt='banner2' />
                </div>
            </div>
        </div>

    )
}

export default Coloceal