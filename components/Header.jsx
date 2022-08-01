import React from "react";
import BurguerMenu from "./BurguerMenu";
import { faCity } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  return (
    <div>
      <BurguerMenu />
      <div className="h-14 py-4 px-2 bg-[#0c1b2d] font-['Oswald'] text-white ">
        <div className="flex gap-x-4 pl-2">
          <FontAwesomeIcon icon={faCity} size="xl" />
          <span className="tracking-widest font-bold text-xl">SLTY</span>
          <span className="flex flex-col-reverse pb-1 -ml-4">
            <p className="font-extralight text-xs">Fabian Velasco</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
