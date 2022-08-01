import Image from "next/image";
import React from "react";

const BannerRoute = ({ text, src, bgColor }) => {
  return (
    <div className="h-20 relative cursor-pointer">
      <Image objectFit="cover" src={src} layout="fill" alt="House Banner" />
      <div
        className={`h-full relative flex items-center ${bgColor} justify-center`}
      >
        <span className="font-['oswald-medium'] text-white text-4xl">
          {text}
        </span>
      </div>
    </div>
  );
};

export default BannerRoute;
