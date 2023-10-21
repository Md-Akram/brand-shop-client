import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../hooks/AuthProvider'

const MyCart = () => {

    const [cartProducts, setCartProducts] = useState([])

    const { currentUser } = useContext(AuthContext)

    const id = currentUser.uid

    useEffect(() => {
        fetch(`http://localhost:5000/cart/${id}`)
            .then(res => res.json())
            .then(data => {
                setCartProducts(data)
            })
    }, [])

    const handleClick = () => {
        console.log('btn clicked');
    }

    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-10 mx-auto">
                <div className="flex flex-wrap -m-4">
                    {
                        cartProducts.map((product) => <div key={product._id} className="lg:w-1/4 md:w-1/2 p-4 w-full">
                            <div className="block relative h-48 rounded overflow-hidden">
                                <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={product.imgURL} />
                            </div>
                            <div className="mt-4 flex flex-row items-center justify-between">
                                <div>
                                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Type : {product.type}</h3>
                                    <h2 className="text-gray-900 title-font text-lg font-medium">{product.name}</h2>
                                    <p className="mt-1">${product.price}</p>
                                </div>
                                <div>
                                    <button onClick={handleClick} className="inline-flex text-white bg-red-500 border-0 py-2 px-4 focus:outline-none hover:bg-red-600 rounded text-lg">Delete</button>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </section>
    )
}

export default MyCart