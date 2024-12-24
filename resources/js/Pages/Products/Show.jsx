import { Head, Link } from '@inertiajs/react';

export default function Show({ product }) {
    return (
        <div className="container mx-auto px-4 py-8">
            <Head title="Detial" />
            <div className="bg-white shadow-md rounded-lg p-6">
                <img
                    src={product.imgSource}
                    alt={product.name}
                    className="w-full h-64 object-cover rounded-lg mb-6"
                />
                <h1 className="text-4xl font-bold text-gray-800 mb-4">{product.name}</h1>
                <p className="text-gray-600 text-lg mb-4">{product.description}</p>
                <p className="text-xl font-semibold text-gray-700 mb-6">
                    Price: <span className="text-green-500">${product.price}</span>
                </p>
                <Link
                    href="/products"
                    className="inline-block bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition"
                >
                    Back to All Products
                </Link>
            </div>
        </div>
    );
}
