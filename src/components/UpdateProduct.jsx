import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateProduct = () => {
    const { id } = useParams()
    const [rating, setRating] = useState(null);
    const [product, setProduct] = useState({})
    const [selectedBrand, setSelectedBrand] = useState("");
    const [selectedType, setSelectedType] = useState("");
    const navigate = useNavigate()

    const handleBrandChange = (event) => {
        setSelectedBrand(event.target.value);
    }

    const handleTypeChange = (event) => {
        setSelectedType(event.target.value);
    }

    useEffect(() => {
        fetch(`http://localhost:5000/product/${id}`)
            .then(res => res.json())
            .then(data => {
                setProduct(data)
                setRating(data.ratings)
                setSelectedBrand(data.brandName)
                setSelectedType(data.type)
            })
    }, [])

    const handleRatingChange = (value) => {
        setRating(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        const name = form.Name.value
        const brandName = form.BrandName.value
        const imgURL = form.Image.value
        const type = form.Type.value
        const price = form.Price.value
        const ratings = rating
        const updatedProduct = {
            name, brandName, imgURL, type, price, ratings
        }
        fetch(`http://localhost:5000/products/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedProduct)
        }).then(res => res.json()
        ).then(data => {
            if (data.modifiedCount > 0) {
                toast.success('product updated')
                navigate(`/brandPage/${product.brandName}`)
            }
            console.log(data);
        })
    }

    return (
        <section className="text-gray-600 body-font relative">
            <div className="container px-5 py-5 mx-auto flex sm:flex-nowrap flex-wrap">
                <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col w-full md:py-8 mt-8 md:mt-0 mx-auto" >
                    <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Update Product</h2>
                    <form onSubmit={handleSubmit}>
                        {/* Image */}
                        <div className="relative mb-4">
                            <label htmlFor="Image" className="leading-7 text-sm text-gray-600">Product ImageURL</label>
                            <input
                                required
                                type="text"
                                id="Image"
                                defaultValue={product.imgURL}
                                name="Image"
                                className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        {/* Name */}
                        <div className="relative mb-4">
                            <label htmlFor="Name" className="leading-7 text-sm text-gray-600">Product Name</label>
                            <input
                                required
                                type="text"
                                id="Name"
                                defaultValue={product.name}
                                name="Name"
                                className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        {/* Brand Name */}
                        <div className="relative mb-4">
                            <label htmlFor="BrandName" className="leading-7 text-sm text-gray-600">Brand Name</label>
                            <br />
                            <select
                                required
                                value={selectedBrand}
                                onChange={handleBrandChange}
                                name="BrandName"
                                id="BrandName"
                                className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                                <option value="">--Please choose a brand--</option>
                                <option value="Apple">Apple</option>
                                <option value="Samsung">Samsung</option>
                                <option value="Sony">Sony</option>
                                <option value="Google">Google</option>
                                <option value="Intel">Intel</option>
                                <option value="Microsoft">Microsoft</option>
                            </select>
                        </div>
                        {/* Type (If you choose the Technology and Electronics category ,then the types of products will be phone, computer, headphone,Smartwatch,Gaming Console, Wireless router etc) */}
                        <div className="relative mb-4">
                            <label htmlFor="Type" className="leading-7 text-sm text-gray-600">Product Type</label>
                            <br />
                            <select
                                required
                                value={selectedType}
                                onChange={handleTypeChange}
                                name="Type"
                                id="Type"
                                className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                                <option value="">--Please choose a type--</option>
                                <option value="Phone">Phone</option>
                                <option value="Computer">Computer</option>
                                <option value="Headphone">Headphone</option>
                                <option value="Smartwatch">Smartwatch</option>
                            </select>
                        </div>
                        {/* Price */}
                        <div className="relative mb-4">
                            <label htmlFor="Price" className="leading-7 text-sm text-gray-600">Product Price</label>
                            <input
                                required
                                type="number"
                                id="Price"
                                defaultValue={product.price}
                                name="Price"
                                className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>

                        {/* Rating */}
                        <div className='flex flex-row items-center justify-between'>
                            {[1, 2, 3, 4, 5].map((value) => (
                                <label key={value} className="leading-7 text-sm text-gray-600 py-4">
                                    <input required
                                        type="radio"
                                        name='Rating'
                                        value={value}
                                        checked={rating === value}
                                        onChange={() => handleRatingChange(value)}
                                        className="mr-2"
                                    />
                                    {value}
                                </label>
                            ))}
                        </div>
                        {/* Add button */}
                        <button className="text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">Update</button>
                    </form>

                </div>
            </div>
        </section>
    )
}

export default UpdateProduct