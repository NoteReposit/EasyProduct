import { Head, Link } from '@inertiajs/react';

export default function Index({ products }) {
    return (
        <div className="bg-white">
            <Head title="Product" />

            <header className="border-b border-palette-lighter sticky top-0 z-20 bg-white drop-shadow-md">
                <div className="flex justify-between items-end mx-auto px-4 py-3 sm:px-24 sm:py-5 lg:px-32">
                    <Link href="#">
                        <a className=" cursor-pointer">
                            <h1 className="flex no-underline font-bold text-2xl">
                                Easy Product
                            </h1>
                        </a>
                    </Link>
                    <Link href="#">
                        <a className=" cursor-pointer">
                            <h1 className="flex no-underline font-bold">
                                Cart
                            </h1>
                        </a>
                    </Link>
                </div>
            </header >

            <div className="mx-auto px-4 py-3 sm:px-24 sm:py-8 lg:px-32">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900 text-center">Get your favourite !</h2>

                <div className="mt-6 grid grid-cols-2 gap-x-5 gap-y-10 sm:grid-cols-3 xl:grid-cols-4">
                    {products.map((product) => (
                        <div key={product.id} className="group relative bg-white rounded-md drop-shadow-md">
                            <Link
                                href={`/products/${product.id}`}
                            >
                                <img
                                    alt={product.name}
                                    src={product.imgSource}
                                    className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
                                />
                                <div className="m-3 flex justify-between">
                                    <p className="text-xs sm:text-ms font-medium md:text-base text-gray-700 ">
                                        {product.name}
                                    </p>
                                    <p className="text-xs sm:text-ms font-medium md:text-base text-gray-900">${product.price}</p>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
