'use client'
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
    let [user, setUser] = useState('');
    let pathname = usePathname();
    let router = useRouter()

    async function handleClick() {
        let res = await fetch('http://localhost:4000/auth/logout', {
            credentials: 'include'
        });

        let data = await res.json();
        alert(data.message);
        setUser('')
        router.push('/sign-In');
    }
    useEffect(() => {
        const getUser = async () => {
            let res = await fetch('http://localhost:4000/auth/me', {
                credentials: 'include'
            });
            let data = await res.json();
            if (res.ok) {
                setUser(data.user)
            }
        };

        getUser();
    }, [pathname])
    return (
        <nav className="sticky top-0 z-50 bg-white border-b border-green-100">
            <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                            <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
                        </svg>
                    </div>
                    <span className="text-[15px] font-medium text-black">Smart-Chat</span>
                </Link>

                {/* Desktop Nav Links */}
                <div className="hidden md:flex items-center gap-6">
                    {/* Industries Dropdown */}
                    <div className="relative group">
                        <Link href="#" className={`${pathname === '/health-care' || pathname === "/legal" || pathname === "/home-services" ? 'text-green-600' : "text-gray-500"} text-sm hover:text-green-600 flex items-center gap-1`}>
                            Industries
                            {/* Arrow */}
                            <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                            </svg>
                        </Link>
                        {/* Dropdown */}
                        <div className="absolute left-0 mt-2 w-40 bg-white border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                            <Link href="/home-services" className={`${pathname === "/home-services"? "bg-green-400 text-white hover:bg-green-400" : ""} block px-4 py-2 text-sm hover:bg-gray-200 rounded-t-lg`}>Home-Services</Link>
                            <Link href="/legal" className={`${pathname === "/legal"? "bg-green-400 text-white hover:bg-green-400" : ""} block px-4 py-2 text-sm hover:bg-gray-200`}>Legal</Link>
                            <Link href="/health-care" className={`${pathname === "/health-care"? "bg-green-400 text-white hover:bg-green-400" : ""} block px-4 py-2 text-sm hover:bg-gray-200 rounded-b-lg`}>Health-Care</Link>
                        </div>
                    </div>
                    {/* Other Links */}
                    <Link href="ai-webchat" className={`${pathname === '/ai-webchat' ? 'text-green-600' : "text-gray-500"} text-sm hover:text-green-600`}>Product</Link>
                    <Link href="partner" className={`${pathname === '/partner' ? 'text-green-600' : "text-gray-500"} text-sm hover:text-green-600`}>Partners</Link>
                    <Link href="/contact-us" className={`${pathname === '/contact-us' ? 'text-green-600' : "text-gray-500"} text-sm hover:text-green-600`}>Contact Us</Link>
                </div>

                {/* Buttons */}
                {
                    user ? <button
                        onClick={handleClick}
                        className="text-sm px-4 py-2 border border-green-600 rounded-lg text-green-600 font-medium hover:bg-green-50 transition-colors"
                    >
                        Logout
                    </button>
                        :
                        <div className="hidden md:flex items-center gap-3">
                            <Link
                                href="/sign-In"
                                className="text-sm px-4 py-2 border border-green-600 rounded-lg text-green-600 font-medium hover:bg-green-50 transition-colors"
                            >
                                Sign in
                            </Link>
                            <Link
                                href="/sign-Up"
                                className="text-sm px-4 py-2 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors"
                            >
                                Get started
                            </Link>
                        </div>
                }

                {/* Mobile hamburger */}
                <button
                    className="md:hidden text-gray-600"
                // onClick={() => setMenuOpen(!menuOpen)}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {/* {menuOpen
                            ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        } */}
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            {/* {menuOpen && (
                <div className="md:hidden bg-white border-t border-green-100 px-6 py-4 flex flex-col gap-4">
                    <Link href="#" className="text-sm text-gray-600 hover:text-green-600">Industries</Link>
                    <Link href="#" className="text-sm text-gray-600 hover:text-green-600">Products</Link>
                    <Link href="#" className="text-sm text-gray-600 hover:text-green-600">Partners</Link>
                    <Link href="#" className="text-sm text-gray-600 hover:text-green-600">Contact</Link>
                    <div className="flex gap-3 pt-2">
                        <Link href="/sign-In" className="flex-1 text-sm text-center py-2 border border-green-600 rounded-lg text-green-600 font-medium">Sign in</Link>
                        <Link href="/sign-Up" className="flex-1 text-sm text-center py-2 bg-green-600 text-white rounded-lg font-medium">Get started</Link>
                    </div>
                </div>
            )} */}
        </nav>
    )
}