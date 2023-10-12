import React, { useState } from "react";
import logo from "../assets/logo.png";
import { FaSearch, FaBell } from "react-icons/fa";
import { RiAccountCircleLine } from "react-icons/ri";
import Navbar from "../components/NavBar";

const HomePage = () => {
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

  return (
    <div className="bg-[#02030C] h-screen w-screen ">
      <Navbar />
    </div>
  );
  //   <Navbar />;
};

export default HomePage;
