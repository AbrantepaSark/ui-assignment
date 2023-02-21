import React from "react";

const Nav = () => {
  return (
    <nav className="px-8 bg-white py-5 drop-shadow-md flex justify-between">
      <p>Foodjoint</p>
      <div>
        <i className="mr-6 text-xl	far fa-bell"></i>
        <i className="mr-6 text-xl	fas fa-cart-plus"></i>
        <i className=" text-xl	fas fa-bars"></i>
      </div>
    </nav>
  );
};

export default Nav;
