import { useState } from 'react'
import { Head, Link } from '@inertiajs/react';
import Nevbar from '@/components/Nevbar'

export default function Show({ product }) {
    const [quantity, setQuantity] = useState(1)

    function updateQuantity(e) {
        if (e === '') {
            setQuantity('')
        } else {
            setQuantity(Math.floor(e))
        }
    }

    return (
        <div className="bg-white min-h-screen">
            <Head title="Product Detail" />

            <Nevbar></Nevbar>
            <div className="mx-auto px-4 py-8 sm:px-24 lg:px-32">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                    {/* Product Image */}
                    <div className="bg-gray-100 rounded-lg shadow-md">
                        <img
                            src={product.imgSource}
                            alt={product.name}
                            className="w-full h-auto rounded-lg object-cover"
                        />
                    </div>

                    {/* Product Details */}
                    <div className="flex flex-col">
                        {/* Back to Products Button */}
                        <Link
                            href="/products"
                            className="border-2 border-purple-800 text-purple-800 text-center mb-5 py-2 px-4 rounded-md hover:bg-purple-900 hover:text-white transition"
                        >
                            Back to All Products
                        </Link>
                        <h1 className="text-3xl font-bold text-purple-800 mb-4">
                            {product.name}
                        </h1>
                        <p className="text-gray-700 text-lg mb-6">
                            {product.description}
                        </p>
                        <p className="text-2xl font-semibold text-purple-800 mb-8">
                            ${product.price}
                        </p>
                        <div className='flex flex-row gap-4'>
                            <div>
                                <label className="text-base">Qty.</label>
                                <input
                                    type="number"
                                    inputMode="numeric"
                                    id="quantity"
                                    name="quantity"
                                    min="1"
                                    step="1"
                                    value={quantity}
                                    onChange={(e) => updateQuantity(e.target.value)}
                                    className="text-gray-900 form-input border border-gray-300 w-16 rounded-sm focus:border-palette-light focus:ring-palette-light"
                                />
                            </div>
                            <div>
                                <button
                                    className=" bg-purple-800 text-white mb-5 py-2 px-4 rounded-lg shadow-md hover:bg-purple-900 transition"
                                >
                                    Add To Cart
                                </button>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
