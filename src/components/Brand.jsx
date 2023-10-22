import React from 'react'
import { Link } from 'react-router-dom'

const Brand = ({ props }) => {
    const { id, name, img } = props
    return (
        <Link to={`/brandPage/${name}`} className="p-4 md:w-1/3">
            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={img} alt="blog" />
                <div className="p-6">

                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3 dark:text-white">{name}</h1>

                </div>
            </div>
        </Link>
    )
}

export default Brand