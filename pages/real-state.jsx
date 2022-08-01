import Image from "next/image";
import React from "react";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BannerRoute from "../components/BannerRoute";
import Product from "../components/product/Product";

const Banner = () => {
  return (
    <div className="relative h-full bg-[#2b2b2b]/50 flex flex-col justify-center items-center text-white font-['Oswald']">
      <span className="text-4xl font-[oswald-medium]">Propiedades Nuevas</span>
      <span className="tracking-widest font-extralight text-lg mt-4">
        AL MEJOR PRECIO
      </span>
      <a
        href=""
        className="flex items-center px-4 py-2 rounded-md gap-x-2 mt-16 bg-[#25d366] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
      >
        <FontAwesomeIcon icon={faWhatsapp} size="xl" />
        <span className="text-xl font-sans">WhatsApp</span>
      </a>
    </div>
  );
};

const RealState = () => {
  const products = [
    {
      src: "/exampleHouse.webp",
      type: "Venta",
      neighborhood: "Valle del Lili",
      city: "Valle del Cauca, Cali",
      price: 700000,
      productSpecs: { beds: 3, baths: 2, levels: 2, meters: 65 },
    },
    {
      src: "/exampleHouse.webp",
      type: "Venta",
      neighborhood: "Valle del Lili",
      city: "Valle del Cauca, Cali",
      price: 700000,
      productSpecs: { beds: 3, baths: 2, levels: 2, meters: 65 },
    },
  ];
  return (
    <div className="h-[50vh] relative">
      <Image
        objectFit="cover"
        src="/exampleHouse.webp"
        layout="fill"
        alt="House Banner"
      />
      <Banner />
      <BannerRoute
        bgColor="bg-[#091d35]/80"
        text="Comprar"
        src="/buyBanner.webp"
      />
      <BannerRoute
        bgColor="bg-[#f96e6c]/80"
        text="Arrendar"
        src="/rentBanner.webp"
      />
      <div className="px-4 bg-gray-100">
        <h2 className="text-center py-6 text-3xl font-['oswald-medium']">
          En Venta
        </h2>
        <div className="flex flex-col gap-y-8">
          {products.map((p, i) => (
            <Product key={i} {...p} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RealState;
