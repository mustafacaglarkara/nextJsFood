import Logo from "../ui/Logo";
import Link from "next/link";
import {FaUserAlt, FaShoppingCart, FaSearch} from "react-icons/fa";
import {useState} from "react";
import OutsideClickHandler from 'react-outside-click-handler';
import Title from "../ui/Title";
import Search from "../ui/Search";

const Header = () => {
    const [isSearchModal, setIsSearchModal] = useState(false)
    return (
        <div className="h-[5.5rem] bg-secondary ">
            <div className="container  mx-auto text-white flex justify-between items-center h-full">
                <Logo/>
                <nav>
                    <ul className="flex gap-x-2">
                        <li className="px-[5px] py-[10px] uppercase hover:text-primary cursor-pointer">
                            <Link href="/"><a>Home</a></Link>
                        </li>
                        <li className="px-[5px] py-[10px] uppercase hover:text-primary cursor-pointer">
                            <Link href="/"><a>Menu</a></Link>
                        </li>
                        <li className="px-[5px] py-[10px] uppercase hover:text-primary cursor-pointer">
                            <Link href="/"><a>About</a></Link>
                        </li>
                        <li className="px-[5px] py-[10px] uppercase hover:text-primary cursor-pointer">
                            <Link href="/"><a>Book Table </a></Link>
                        </li>
                    </ul>
                </nav>
                <div className="flex gap-x-4 items-center">
                    <Link href="/deneme">
                        <a><FaUserAlt className="hover:text-primary transition-all"/></a>
                    </Link>
                    <Link href="/deneme">
                        <a><FaShoppingCart className="hover:text-primary transition-all"/></a>
                    </Link>
                    <Link href="#">
                        <button onClick={() => {
                            setIsSearchModal(true);
                        }}><FaSearch className="hover:text-primary transition-all"/></button>
                    </Link>
                    <Link href="/deneme">
                        <button className="btn-primary">Order Online</button>
                    </Link>
                </div>
            </div>
            {
                isSearchModal && (
                    <Search setIsSearchModal={setIsSearchModal}/>
                )
            }
        </div>
    );
};

export default Header;