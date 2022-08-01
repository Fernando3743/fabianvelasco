import React, { useState } from "react";
import { slide as Menu } from "react-burger-menu";
import {
  faHome,
  faCar,
  faMobileAndroid,
  faFileContract,
} from "@fortawesome/free-solid-svg-icons";

import {
  faFacebook,
  faInstagram,
  faTiktok,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const BurguerMenu = () => {
  const MenuItems = [
    { text: "Bienes Raíces", icon: faHome, href: "/real-state" },
    { text: "Carros", icon: faCar, href: "/" },
    { text: "Tecnologia", icon: faMobileAndroid, href: "/" },
    { text: "Servicios", icon: faFileContract, href: "/" },
  ];

  const BrandItems = [faWhatsapp, faFacebook, faInstagram, faTiktok];

  const [isOpen, setOpen] = useState(false);

  const handleIsOpen = () => {
    setOpen(!isOpen);
  };

  const closeSideBar = () => {
    setOpen(false);
  };

  return (
    <Menu
      itemListClassName=""
      width={"100%"}
      id={"slide"}
      pageWrapId={"page-wrap"}
      outerContainerId={"outer-container"}
      right
      isOpen={isOpen}
      onOpen={handleIsOpen}
      onClose={handleIsOpen}
    >
      {MenuItems.map(({ text, icon, href }) => (
        <Link key={text} href={href}>
          <a onClick={closeSideBar}>
            <div className="flex gap-x-4 text-2xl mb-4 justify-center -ml-8 items-center hover:underline">
              <FontAwesomeIcon icon={icon} size="sm" />
              <span>{text}</span>
            </div>
          </a>
        </Link>
      ))}
      <div className="mt-32">
        <div className="flex gap-x-6 justify-center items-center">
          {BrandItems.map((icon, index) => (
            <FontAwesomeIcon
              key={index}
              className="cursor-pointer hover:scale-125"
              icon={icon}
              size="xl"
            />
          ))}
        </div>
      </div>
    </Menu>
  );
};

export default BurguerMenu;
