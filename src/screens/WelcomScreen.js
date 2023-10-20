import { NavLink } from "react-router-dom";
import Carousel from "../components/Carousel";

const WelcomeScreen = () => {
  return (
    <div className="absolute bg-[#02030C] h-screen w-screen">
      <div className=" h-screen   flex flex-col  md:flex-row">
        <div className=" flex items-center justify-center h-[458px] md:h-screen  w-full mt-12 md:mt-0  md:w-[35%] md:bg-[#26D1D4]  md:bg-opacity-[12%] ">
          <Carousel autoSlide={true} />
        </div>
        <div className="flex md:justify-center px-[5%] md:w-[65%]  ">
          <div className="flex flex-col md:max-w-[50%]  items-center justify-center w-full">
            <h2 className="text-white text-center font-bold  text-lg md:text-4xl md:mb-5">
              Welcome to
            </h2>
            <h2 className="text-white text-center font-bold text-3xl md:text-6xl mb-8 md:mb-9">
              <span className="text-[#26D1D4]">Ready</span> Wealth
            </h2>
            <NavLink
              to={"/auth?mode=signup"}
              className="w-full mb-5 flex items-center justify-center bg-[#26D1D4] rounded-lg text-[#02030C] h-10 md:h-14 md:mb-7"
            >
              <p2>Create an Account</p2>
            </NavLink>
            <NavLink
              to={"/auth?mode=login"}
              className="w-full flex items-center justify-center bg-[#202222] rounded-lg text-[#26D1D4] h-10 md:h-14"
            >
              <p2>Log In</p2>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;
