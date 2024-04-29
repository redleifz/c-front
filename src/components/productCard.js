import Image from 'next/image'
import React from 'react'

const ProductCard = ({ objectData }) => {
    return (
        <div className='w-full h-[270px] bg-white flex flex-col items-center rounded-md'>
            <div className='relative w-full max-w-[180px] h-[180px] overflow-hidden'>
                <Image
                    src={objectData.thumbnail}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                    alt={objectData.title}
                />
            </div>
            <div className='p-1 w-full flex flex-col'>
                <span className='font-bold text-sm overflow-ellipsis overflow-hidden whitespace-nowrap'>
                    {objectData.title}
                </span>
                <span className='text-sm line-clamp-2 overflow-hidden'>
                    {objectData.description}
                </span>

                {/* Example for more product details like price */}
                <span className='text-xs text-gray-500 mt-1 block'>
                    ${objectData.price}
                </span>
            </div>
        </div>
    )
}

export default ProductCard