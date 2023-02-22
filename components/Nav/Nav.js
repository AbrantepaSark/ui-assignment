import { React, useState } from "react";

const Nav = () => {
  const [toggle, setToggle] = useState(false);
  const toggler = () => {
    setToggle(!toggle);
    return toggle;
  };
  return (
    <>
      <nav className="px-8 bg-white py-5 drop-shadow-md flex justify-between">
        <p className="font-serif text-red-700 font-semibold text-lg">
          Foodjoint
        </p>
        <div>
          <i className="mr-5 text-lg text-gray-600 fas fa-bell"></i>
          <i className="mr-5 text-lg text-gray-600 fas fa-cart-plus"></i>
          <i onClick={toggler} className=" text-lg	fas fa-bars"></i>
        </div>
      </nav>
      {toggle && (
        <div className="absolute top-16 p-5 right-12 lg:right-[11rem] xl:right-[25rem] bg-white shadow-md z-10">
          <ul className="flex flex-col gap-y-3">
            <li>
              <p className="text-gray-700 text-[0.8rem]">
                <span>
                  <i className="mr-3 fas fa-hamburger"></i>
                </span>{" "}
                Dishes
              </p>
            </li>
            <li>
              <p className="text-gray-700 text-[0.8rem]">
                <span>
                  <i className="mr-3 fas fa-store-alt-slash"></i>
                </span>{" "}
                Foodjoints
              </p>
            </li>
            <li>
              <p className="text-gray-700 text-[0.8rem]">
                <span>
                  <i className="mr-3 fas fa-list"></i>
                </span>{" "}
                My Orders
              </p>
            </li>
            <li>
              <p className="text-gray-700 text-[0.8rem]">
                <span>
                  <i className="mr-3 fas fa-user"></i>
                </span>{" "}
                Account
              </p>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Nav;
