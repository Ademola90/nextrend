import React from "react";
import { Link } from "react-router-dom";

const HeroCard = ({ hero }) => {
  return (
    <div className=" grid gap-5 bg-white text-black shadow-md px-5 py-10 rounded-md">
      {hero.map((item) => (
        <Link key={item.id} className="  grid " to={item.to}>
          <div className=" flex items-center gap-3 cursor-pointer">
            <div>{<item.icon />}</div>

            <p>{item.name}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default HeroCard;
