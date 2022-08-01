import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBath,
  faBed,
  faBuilding,
  faBuildingCircleExclamation,
  faBuildingColumns,
  faBuildingUn,
  faRuler,
} from "@fortawesome/free-solid-svg-icons";

const ProductSpecs = ({ beds, baths, levels, meters }) => {
  const specs = [
    { icon: faBed, text: "Cuartos", quantity: beds },
    { icon: faBath, text: "Baños", quantity: baths },
    { icon: faBuilding, text: "Pisos", quantity: levels },
    { icon: faRuler, text: "Metros", quantity: meters, sup: 2 },
  ];
  return (
    <div className="flex justify-between px-2">
      {specs.map(({ icon, text, quantity, sup }) => (
        <div key={text} className="flex flex-col gap-y-4 items-center">
          <FontAwesomeIcon icon={icon} size="lg" />
          <span>
            {text}
            {sup && <sup>{sup}</sup>}
          </span>
          <span className="font-['oswald-medium] font-bold text-xl">
            {quantity}
          </span>
        </div>
      ))}
    </div>
  );
};

export default ProductSpecs;
