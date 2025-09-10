import React from "react";
import Link from "next/link";

export default function Layout({children}) {
    return (
        <>
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex items-center justify-between">
                <div className="text-white font-bold text-xl">MotoPrice</div>
                <ul className="flex space-x-4">
                    <li>
                        <Link href ="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/about" className="text-gray-300 hover:text-white">
                            About
                        </Link>
                    </li>
                    <li>
                        <a href="/contact" className="text-gray-300 hover:text-white">
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
        <main>{children}</main>
        </>
    );
};

