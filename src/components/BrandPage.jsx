import React, { useEffect, useState } from 'react'
import { Carousel } from 'react-responsive-carousel';
import { Link, useParams } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';

export const BrandPage = () => {

    const { name } = useParams()
    console.log(name);

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch(`http://localhost:5000/products/${name}`)
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                setLoading(false)
            })
    }, [])

    console.log(products);

    if (loading) {
        return <div className='w-full h-[80vh] flex items-center justify-center'><h1 className='text-4xl'>Loading</h1></div>
    }

    if (loading == false && products.length === 0) {
        return <div className='w-full h-[80vh] flex items-center justify-center'><h1 className='text-4xl'>No Product found</h1></div>
    }

    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {products.map((product) => <SwiperSlide key={product._id}><img className='w-full h-[50vh]' src={product.imgURL} /></SwiperSlide>)}
            </Swiper>
            <div>
                {products.map((product) => {
                    return <section key={product._id} className="overflew-hidden text-gray-600 body-font overflow-hidden">
                        <div className="container px-5 py-10 mx-auto">
                            <div className="lg:w-4/5 mx-auto flex flex-wrap">
                                <img alt="ecommerce" className="lg:w-1/2 w-full h-64 object-cover object-center rounded" src={product.imgURL} />
                                <div className="lg:w-1/2 w-full lg:pl-10 mt-6 lg:mt-0">
                                    <h2 className="text-sm title-font text-gray-500 tracking-widest">BRAND NAME : {product.brandName}</h2>
                                    <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{product.name}</h1>
                                    <div className="flex mb-4">
                                        <span className="flex items-center">
                                            <span className="text-gray-600">
                                                Rating: {product.ratings}
                                            </span>
                                        </span>
                                    </div>
                                    <p className="leading-relaxed">{product.description} </p>
                                    <div className="flex">
                                        <span className="title-font font-medium text-2xl text-gray-900">Price: {product.price}$</span>


                                    </div>
                                    <div className="flex mt-3 items-center justify-between">
                                        <Link to={`/productDetails/${product._id}`} className="flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded">Details</Link>
                                        <button className="flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded">Update</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                })}
            </div>

        </>
    )
}