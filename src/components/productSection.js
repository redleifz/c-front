'use client'
import React, { useEffect, useState } from 'react'
import ProductCard from './productCard'

const ProductSection = () => {

    const [products, setProducts] = useState()

    useEffect(() => {

        const fetchData = async () => {
            const res = await fetch('https://dummyjson.com/products')
            const data = await res.json()
            setProducts(data.products)
        }

        fetchData()

    }, [])

    useEffect(() => {
        console.log(products)
    }, [products])



    return (
        <div className='w-full flex justify-center mt-1'>
            <div className='w-[1240px] flex flex-col'>
                <div className='text-orange-600 font-bold py-3 bg-white w-full flex justify-center border-b-2 border-orange-600'>
                    <span> สินค้าแนะนำประจำวัน</span>
                </div>
                <div className='p-2'>
                    {products &&
                        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 w-full'>
                            {products.map((product,index) => (
                                <div key={index} className='col-span-1 flex flex-col  '>
                                    <ProductCard objectData={product} />
                                </div>
                            ))}
                        </div>


                    }
                </div>
            </div>
        </div>
    )
}

export default ProductSection