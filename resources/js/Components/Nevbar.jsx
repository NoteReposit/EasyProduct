import { Link } from '@inertiajs/react';
import cartIcon from '../../../public/icons/cart.svg'

export default function Show() {
    return (
        <header className="sticky top-0 z-20 bg-purple-800 shadow-xl">
            <div className="flex justify-between items-center mx-auto px-4 py-3 sm:px-24 sm:py-5 lg:px-32">
                <Link href="/" className="font-bold text-2xl text-white">
                    Easy Product
                </Link>
                <Link href="#" className="font-bold text-white">
                    Cart
                </Link>
            </div>
        </header>
    );
}
