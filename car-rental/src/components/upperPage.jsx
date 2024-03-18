// import React from 'react'
import Header from "./header";
import "../css/upperPage.css";
import TypeWriter from "./typewriter";
const UpperPage = () => {
  return (
    <>
      <div
        className="landing w-screen md:w-screen h-[60vh] bg-right md:bg-center md:h-[90vh]"
        style={{
          backgroundImage: "url('/img/backgroundImage.jpg')",
          backgroundSize: "cover",
        }}
      >
        <Header />
        <div className="typing text-white xl:mt-[35px] md:text-lg md:text-white xl:text-xl lg:mt-[65px]">
          <TypeWriter />
          <div className="w-[350px] mt-4 ml-[40px] xl:w-[500px]">
            Experience the freedom of the road with our premium car rentals -
            your adventure awaits.
          </div>
          <button className="border-2 ml-12 mt-4 text-white w-64 p-1 bg-sky-800 transition duration-300 ease-in-out transform scale-100 hover:scale-110">
            Book Now
          </button>
        </div>
      </div>
    </>
  );
};

export default UpperPage;
