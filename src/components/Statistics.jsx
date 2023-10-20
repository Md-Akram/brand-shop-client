import React from 'react'

const Statistics = () => {
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-5 mx-auto">
                <div className="flex flex-col text-center w-full mb-5">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Stats</h1>
                </div>
                <div className="flex flex-wrap -m-4 text-center">
                    <div className="p-4 sm:w-1/4 w-1/2">
                        <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">2.7K</h2>
                        <p className="leading-relaxed">Users</p>
                    </div>
                    <div className="p-4 sm:w-1/4 w-1/2">
                        <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">1.8K</h2>
                        <p className="leading-relaxed">Subscribes</p>
                    </div>
                    <div className="p-4 sm:w-1/4 w-1/2">
                        <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">3K</h2>
                        <p className="leading-relaxed">Traffic</p>
                    </div>
                    <div className="p-4 sm:w-1/4 w-1/2">
                        <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">40%</h2>
                        <p className="leading-relaxed">Conversion</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Statistics