import Logo from "../assets/logo.png"
import { Link } from 'react-router-dom'
import { IoSearchOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { GoHeart } from "react-icons/go";
import { BsCartCheck } from "react-icons/bs";
import Avatar from "../assets/avatar.png"
import { useState } from "react";


const navigations = [
    { name: "Dashboard", href: "/dashboard" },
    { name: "Orders", href: "/orders" },
    { name: "Cart", href: "/cart" },
    { name: "Check Out", href: "/checkout" },
];

const Navbar = () => {
    const [isDropDown, setIsDropDown] = useState(false);
    console.log(isDropDown)

    const currentuser = false;

    return (
        <header className='max-w-screen-2xl mx-auto px-4 py-6'>
            <nav className='flex justify-between items-center'>
                {/* LEFT SIDE  */}
                <div className="flex items-center md:gap-16 gap-4">
                    <Link>
                        <img className='w-10 h-10 shadow' src={Logo} alt="" />
                    </Link>

                    {/* SEARCH ICON */}
                    <div className="relative sm:w-72 w-40 space-x-2">
                        <IoSearchOutline className="absolute inline-block left-3 inset-y-2" />
                        <input type="text" placeholder="Search here" className="bg-slate-100 w-full py-1 md:px-8 px-6 rounded-md focus:outline-none" />
                    </div>
                </div>

                {/* RIGHT SIDE  */}
                <div className="relative flex items-center md:space-x-3 space-x-2">
                    <div>
                        {
                            currentuser ? <>
                                <button onClick={() => setIsDropDown(!isDropDown)}>
                                    <img src={Avatar} alt="avatar" className="size-8" />
                                </button>
                                {/* SHOW DROPDOWN  */}
                                {
                                    isDropDown && (
                                        <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md z-40">
                                            <ul className="py-2">
                                                {
                                                    navigations.map((item) => (
                                                        <li key={item.name} onClick={() => setIsDropDown(false)} >

                                                            <Link to={item.href} className="block px-4 py-2 text-slate-500 hover:bg-gray-100">
                                                                {item.name}
                                                            </Link>
                                                        </li>
                                                    ))
                                                }
                                            </ul>
                                        </div>
                                    )
                                }
                            </> : <Link to="/login">
                                <FaRegUser className="size-6" />
                            </Link>
                        }
                    </div>

                    <button className="hidden sm:block">
                        <GoHeart className="size-6" />
                    </button>

                    <Link to="/cart" className="bg-primary p-1 sm:px-6 px-2 flex items-center rounded-sm">
                        <BsCartCheck className="size-6" />
                        <span className="font-semibold sm:ml-1">0</span>
                    </Link>
                </div>
            </nav>
        </header >
    )
}

export default Navbar