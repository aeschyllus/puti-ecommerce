import Image from "next/image";
import Layout from "../layouts/Layout";
import backpackMen from "../public/assets/images/backpackMan.png";
import backpackWomen from "../public/assets/images/backpackWoman.png";
import featured1 from "../public/assets/images/feature1.png";
import featured2 from "../public/assets/images/feature2.png";
import featured3 from "../public/assets/images/feature3.png";
import featured4 from "../public/assets/images/feature4.png";
import header from "../public/assets/images/home.png";
import new1 from "../public/assets/images/new1.png";
import new2 from "../public/assets/images/new2.png";
import new3 from "../public/assets/images/new3.png";
import new4 from "../public/assets/images/new4.png";
import new5 from "../public/assets/images/new5.png";
import new6 from "../public/assets/images/new6.png";
import logo1 from "../public/assets/images/logo1.png";
import logo2 from "../public/assets/images/logo2.png";
import logo3 from "../public/assets/images/logo3.png";
import logo4 from "../public/assets/images/logo4.png";

export default function Home() {
  const featuredItems = [
    { name: "Headphone One Black", price: "$29", image: featured1 },
    { name: "Speaker Beats Pill", price: "$199", image: featured2 },
    { name: "Apple Air Pods", price: "$122", image: featured3 },
    { name: "Smartwatch F9 Negro", price: "$99", image: featured4 },
  ];

  const newItems = [
    { id: 1, image: new1 },
    { id: 2, image: new2 },
    { id: 3, image: new3 },
    { id: 4, image: new4 },
    { id: 5, image: new5 },
    { id: 6, image: new6 },
  ];

  const logos = [
    { id: 1, image: logo1 },
    { id: 2, image: logo2 },
    { id: 3, image: logo3 },
    { id: 4, image: logo4 },
  ];

  return (
    <Layout>
      <header className="px-3 pt-7 bg-sky-100">
        <div className="max-w-[1500px] mx-auto md:flex justify-center items-center md:space-x-14 lg:space-x-48">
          <div className="relative top-11 md:top-0 md:pb-32">
            <p className="font-bold text-7xl lg:text-[7rem] tracking-[1.5rem] uppercase">
              New
            </p>
            <p className="font-bold text-3xl lg:text-[3rem] tracking-[1.5rem] uppercase mt-4">
              Arrivals
            </p>
            <button className="px-3 py-2 tracking-wider text-white uppercase bg-red-500 mt-11 hover:bg-red-600">
              Go Shopping
            </button>
          </div>
          <div className="flex justify-end w-full md:w-64 lg:w-96">
            <div className="w-64 h-auto lg:w-96">
              <Image src={header} alt="Fashion model" />
            </div>
          </div>
        </div>
      </header>

      {/* Backpack */}
      <section className="max-w-[1100px] mx-auto">
        <div className="p-5 grid grid-cols1 md:grid-cols-2 gap-5">
          <div className="flex items-center justify-center bg-sky-100 md:px-11 space-x-5 md:space-x-11 transition ease-in hover:scale-105">
            <div className="w-32">
              <Image src={backpackMen} alt="Backpack Men" />
            </div>
            <div>
              <p className="text-3xl font-bold uppercase text-neutral-400">
                Men
              </p>
              <p className="text-3xl font-bold uppercase">Backpack</p>
              <small className="cursor-pointer text-neutral-500 hover:text-red-500 hover:underline">
                View collection
              </small>
            </div>
          </div>
          <div className="flex items-center justify-center bg-sky-100 md:px-11 space-x-5 md:space-x-11 transition ease-in hover:scale-105">
            <div>
              <p className="text-3xl font-bold uppercase text-neutral-400">
                Women
              </p>
              <p className="text-3xl font-bold uppercase">Backpack</p>
              <small className="cursor-pointer text-neutral-500 hover:text-red-500 hover:underline">
                View collection
              </small>
            </div>
            <div className="w-32">
              <Image src={backpackWomen} alt="Backpack Men" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured */}
      <section className="py-28 px-5 max-w-[1100px] mx-auto" id="featured">
        <div className="grid place-items-center">
          <h2 className="text-2xl font-bold tracking-widest uppercase">
            Featured Products
          </h2>
          <p className="inline-block my-3 cursor-pointer text-neutral-500 hover:text-red-500 hover:underline">
            View All
          </p>
        </div>

        <div className="mt-2 grid grid-cols-1 md:grid-cols-4 gap-5">
          {featuredItems.map((item) => (
            <figure
              key={item.name}
              className="transition ease-in hover:-translate-y-2"
            >
              <span className="absolute px-3 py-1 text-sm text-white uppercase bg-red-500">
                New
              </span>
              <div className="mb-3 bg-sky-100 grid place-items-center">
                <Image src={item.image} alt="Featured item" />
              </div>
              <figcaption>
                <h3 className="font-bold text-center uppercase text-md">
                  {item.name}
                </h3>
                <p className="text-center text-neutral-500">{item.price}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Special Offer */}
      <section className="offer__bg">
        <div className="flex items-center justify-center px-3 bg-black/60 py-7 md:h-96">
          <div className="space-y-5">
            <h2 className="text-3xl font-bold tracking-widest text-center text-white uppercase md:text-5xl">
              Special Offer
            </h2>
            <p className="tracking-wider text-center text-white md:text-xl">
              Special offers discounts for women this week only
            </p>
            <div className="grid place-items-center">
              <button className="px-3 py-2 text-white uppercase bg-red-500 hover:bg-red-600">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="pt-28 px-5 max-w-[1100px] mx-auto" id="featured">
        <div className="grid place-items-center">
          <h2 className="text-2xl font-bold tracking-widest uppercase">
            New Arrivals
          </h2>
          <p className="inline-block my-3 cursor-pointer text-neutral-500 hover:text-red-500 hover:underline">
            View All
          </p>
        </div>

        <div className="mt-2 grid grid-cols-1 md:grid-cols-3 gap-5">
          {newItems.map((item) => (
            <figure
              key={item.id}
              className="transition ease-in hover:-translate-y-2"
            >
              <div className="mb-3 bg-sky-100 grid place-items-center">
                <Image src={item.image} alt="New Arrival item" />
              </div>
            </figure>
          ))}
        </div>
      </section>

      {/* Subscribe */}
      <section className="pt-28 px-5 max-w-[1100px] mx-auto" id="featured">
        <h2 className="text-2xl font-bold tracking-widest text-center uppercase">
          Our Newsletter
        </h2>
        <p className="my-4 text-center text-neutral-500">
          Promotion, new products, and sales. Directly to you.
        </p>
        <div className="flex justify-center">
          <input
            type="text"
            placeholder="user@domain.com"
            className="px-3 py-2 bg-neutral-200"
          />
          <button className="px-3 py-2 text-white uppercase bg-red-500 hover:bg-red-600">
            Subscribe
          </button>
        </div>

        <div className="mt-28 mb-7 grid grid-cols-2 md:grid-cols-4 gap-5">
          {logos.map((item) => (
            <figure
              key={item.id}
              className="transition ease-in hover:-translate-y-2"
            >
              <div className="mb-3 grid place-items-center">
                <Image src={item.image} alt="Logo" />
              </div>
            </figure>
          ))}
        </div>
      </section>
    </Layout>
  );
}
