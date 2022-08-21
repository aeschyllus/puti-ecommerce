import { BiMenu } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useState } from "react";

export default function Nav() {
  const [nav, setNav] = useState(false);

  return (
    <>
      <header className="fixed inset-0 px-4 lg:px-32 h-14 font-opensans bg-sky-100 flex justify-between items-center z-20">
        <h1 className="uppercase text-xl font-bold">Puti</h1>
        <div className="lg:hidden text-xl flex items-center space-x-5">
          <button className="block">
            <AiOutlineShoppingCart />
          </button>
          <button className="block" onClick={() => setNav(!nav)}>
            <BiMenu />
          </button>
        </div>
        <ul className="hidden lg:flex items-center space-x-5">
          <li>Home</li>
          <li>Featured</li>
          <li>New</li>
          <li>Subscribe</li>
          <li>
            <button className="text-xl">
              <AiOutlineShoppingCart />
            </button>
          </li>
        </ul>
      </header>

      <nav
        className={`fixed bg-white font-opensans transition duration-300 w-64 pt-14 h-screen lg:hidden z-10 ${
          nav ? "translate-x-0 ease-in" : "-translate-x-full ease-out"
        }`}
      >
        <ul className="space-y-4 p-5">
          <li>Home</li>
          <li>Featured</li>
          <li>New</li>
          <li>Subscribe</li>
        </ul>
      </nav>
    </>
  );
}
