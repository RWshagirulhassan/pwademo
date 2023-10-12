import React, { useState } from "react";
import logo from "../assets/logo.png";
import { FaSearch, FaBell } from "react-icons/fa";
import { RiAccountCircleLine } from "react-icons/ri";
import { getAuth, signOut } from "firebase/auth";
const Navbar = () => {
  const [input, setInput] = useState("");

  const handleChange = (event) => {
    const value = event.target.value;

    setInput(value);
  };
  const navbaritems = [
    "Home",
    "DashBoard",
    "PILAR",
    "IBAR",
    "Games",
    "Community",
  ];
  const [currentNavBar, setcurrentNavBar] = useState("Home");

  const handleNavBar = (value) => {
    setcurrentNavBar(value);
  };
  const handleSignOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        console.log("User signed out");
      })
      .catch((error) => {
        console.error("Sign-out error", error);
      });
  };
  return (
    <div className="w-full ">
      <div className="relative max-w-[1310px] flex justify-between items-center h-24  mx-auto px-4 text-white">
        <div className="flex ">
          <img alt="logo" className="w-[34px]  md:w-[54px] " src={logo}></img>

          <ul className="hidden md:flex items-end text-sm gap-[10%]  md:ml-10">
            {navbaritems.map((title, index) => (
              <text
                onClick={() => handleNavBar(title)}
                key={index}
                className={`${
                  title === currentNavBar
                    ? " border-[#42E6E9] text-[#42E6E9]"
                    : " border-transparent"
                } p-1 border-b-2  active:`}
              >
                {title}
              </text>
            ))}
          </ul>
        </div>

        <div className="flex gap-[25px] md:gap-[35px] items-center">
          <div
            className={`sm:flex hidden    bg-transparent rounded-lg text-white border-solid border-[1px] ${"border-[#E7E7E7]"}  h-[44px] w-[70%] xl:w-[325px] `}
          >
            <div
              className={`w-[20%] flex items-center justify-center text-base font-bold`}
            >
              <button>{<FaSearch />}</button>
            </div>
            <input
              placeholder="Search"
              value={input}
              onChange={handleChange}
              className={`my-2 mx-1 w-full bg-transparent outline-none focus:border-transparent text-sm  focus:ring-0`}
            ></input>
          </div>
          <FaSearch className="sm:hidden w-[20px] h-[20px] sm:w-[28px] md:h-[28px]" />
          <FaBell className="w-[20px] h-[20px] md:w-[28px] sm:h-[28px]" />
          <RiAccountCircleLine
            onClick={handleSignOut}
            className="w-[22px] h-[22px] sm:w-[30px] md:h-[30px]"
          />
        </div>
      </div>

      <div
        className="flex  md:hidden snap-x overflow-auto  max-w-screen px-3   gap-[9%]  scrollbar-width-thin scrollbar-thumb-rounded-full scrollbar-thumb-gray-300 scrollbar-track-gray-100"
        style={{ scrollbarWidth: "none" }}
      >
        {navbaritems.map((title, index) => (
          <div
            onClick={() => handleNavBar(title)}
            key={index}
            className={`${
              title === currentNavBar
                ? " border-[#42E6E9] text-[#42E6E9]"
                : " border-transparent text-white"
            } p-1 border-b-2 text-sm  snap-center`}
          >
            {title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
{
  /* <div className="flex horizontal-scroll">
{navbaritems.map((item, index) => (
  <div
    key={index}
    className="min-w-[200px] bg-gray-200 m-2 p-4 rounded-md"
  >
    {item}
  </div>
))}
</div> */
}
