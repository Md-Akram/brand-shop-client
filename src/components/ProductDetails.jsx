import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {

    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)

    const { id } = useParams()

    useEffect(() => {
        fetch(`http://localhost:5000/product/${id}`)
            .then(res => res.json())
            .then(data => {
                setProduct(data)
                setLoading(false)
            })
    }, [])

    if (loading) {
        return <div className='w-full h-[80vh] flex items-center justify-center'><h1 className='text-4xl'>Loading</h1></div>
    }

    return (
        <section className="text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Name: {product.name}
                    </h1>
                    <p className="mb-8 leading-relaxed">Price: {product.price}</p>
                    <p className="mb-8 leading-relaxed">Brand: {product.brandName}</p>
                    <p className="mb-8 leading-relaxed">Description {product.description}</p>
                    <div className="flex justify-center">
                        <button className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">Add to cart</button>

                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img className="w-full h-80 object-cover object-center rounded" alt="hero" src={product.imgURL} />
                </div>
            </div>
        </section>
    )
}

export default ProductDetails