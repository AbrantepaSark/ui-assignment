import React from "react";

const Nav = () => {
  return (
    <nav className="px-8 bg-white py-5 drop-shadow-md flex justify-between">
      <p className="font-serif text-red-700 font-semibold text-lg">Foodjoint</p>
      <div>
        <i className="mr-6 text-lg	fas fa-bell"></i>
        <i className="mr-6 text-lg	fas fa-cart-plus"></i>
        <i className=" text-lg	fas fa-bars"></i>
      </div>
    </nav>
  );
};

export default Nav;
