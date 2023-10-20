import React, { useEffect, useState } from 'react'
import Brand from './Brand'

const Brands = () => {

    const [giants, setGiants] = useState([])

    useEffect(() => {
        fetch('/brands.json')
            .then(res => res.json())
            .then(data => setGiants(data))
    }, [])

    return (
        <section className="text-gray-600 body-font overflow-hidden">
            <div className="container px-5 py-5 mx-auto">
                <div className="flex flex-col text-center w-full mb-5">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Brands</h1>
                </div>
                <div className="flex flex-wrap -m-4">
                    {giants.map(giant => <Brand key={giant.id} props={giant} />)}
                </div>
            </div>
        </section>
    )
}

export default Brands