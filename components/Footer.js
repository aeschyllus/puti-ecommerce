import Image from "next/image";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";
import footer1 from "../public/assets/images/footerstore1.png";
import footer2 from "../public/assets/images/footerstore2.png";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-[1100px] mx-auto p-5 md:py-20">
        <section className="space-y-3">
          <h2 className="text-xl font-bold uppercase">Puti</h2>
          <p>Products Store</p>
          <div className="flex space-x-2">
            <div className="w-48 md:w-32 h-auto">
              <Image src={footer1} alt="iOS Store" />
            </div>
            <div className="w-48 md:w-32 h-auto">
              <Image src={footer2} alt="Android Store" />
            </div>
          </div>
        </section>
        <section>
          <h2 className="text-xl font-bold uppercase mb-3">Explore</h2>
          <p className="text-neutral-500 hover:underline">Home</p>
          <p className="text-neutral-500 hover:underline">Featured</p>
          <p className="text-neutral-500 hover:underline">New</p>
          <p className="text-neutral-500 hover:underline">Subscribe</p>
        </section>
        <section>
          <h2 className="text-xl font-bold uppercase mb-3">Our Services</h2>
          <p className="text-neutral-500 hover:underline">Pricing</p>
          <p className="text-neutral-500 hover:underline">Free Shipping</p>
          <p className="text-neutral-500 hover:underline">Gift Cards</p>
        </section>
        <section>
          <h2 className="text-xl font-bold uppercase mb-3">Follow Us</h2>
          <div className="text-2xl text-neutral-500 flex space-x-2">
            <AiFillFacebook />
            <AiFillInstagram />
            <AiOutlineTwitter />
          </div>
        </section>
      </div>
      <div className="border-t border-neutral-500 text-neutral-500 py-7 text-center">
        &#169; 2022 Copyright. All rights reserved.
      </div>
    </footer>
  );
}
