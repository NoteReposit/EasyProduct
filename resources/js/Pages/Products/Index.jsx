import { Head, Link } from '@inertiajs/react';
import Nevbar from '@/components/Nevbar'

export default function Index({ products }) {

    return (
        <div className="bg-white">
            <Head title="Product" />

            <Nevbar></Nevbar>
            <div className="mx-auto px-4 py-3 sm:px-24 sm:py-8 lg:px-32">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900 text-center">
                    Get your favourite!
                </h2>

                <div className="mt-6 grid grid-cols-2 gap-x-5 gap-y-10 sm:grid-cols-3 xl:grid-cols-4">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="group relative bg-white rounded-md drop-shadow-md transition transform hover:-translate-y-1 hover:shadow-lg"
                        >
                            <Link href={`/products/${product.id}`}>
                                <img
                                    alt={product.name}
                                    src={product.imgSource}
                                    className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
                                />
                                <div className="m-3 flex justify-between">
                                    <p className="text-xs sm:text-sm font-medium md:text-base text-purple-800">
                                        {product.name}
                                    </p>
                                    <p className="text-xs sm:text-sm font-medium md:text-base text-purple-800">
                                        ${product.price}
                                    </p>
                                </div>
                                <div className='m-3 text-gray-800'>
                                    <p>{product.description}</p>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
