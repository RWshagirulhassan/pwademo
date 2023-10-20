import { useState, useEffect } from "react";
import carouselimg from "../assets/carouselimg.png";

export default function Carousel({
  autoSlide = false,
  autoSlideInterval = 3000,
}) {
  const slides = [
    { img: `${carouselimg}`, des: " Improve your Financial Decision " },
    { img: `${carouselimg}`, des: "Improve your Family Decision" },
    { img: `${carouselimg}`, des: "Improve your Relationship Decision" },
    { img: `${carouselimg}`, des: "Improve your Overall Decision" },
  ];
  const [curr, setCurr] = useState(0);

  const specificindex = (index) => setCurr(index);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));

  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, []);
  return (
    <div className="overflow-x-hidden  max-w-xs  justify-center  ">
      <div
        className="flex justify-evenly overflow-hidden w-[400%]  transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${curr * 25}%)` }}
      >
        {slides.map((d, index) => {
          return (
            <h2 className="text-white text-2xl text-center w-screen   ">
              {d.des}
            </h2>
          );
        })}
      </div>
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides.map((d, index) => {
          return (
            <img
              className="my-3 mb-5"
              key={index}
              src={d.img}
              alt="carousal imgage"
            ></img>
          );
        })}
      </div>

      <div className="p-4 ">
        <div className=" flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <div
              onClick={() => specificindex(i)}
              className={`
              transition-all w-2 h-2 bg-white rounded-full
              ${
                curr === i
                  ? ""
                  : "bg-opacity-0 border-solid border-2 border-white"
              }
            `}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
