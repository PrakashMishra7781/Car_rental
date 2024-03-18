// import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserGroup,
  faGasPump,
  faGaugeSimpleHigh,
  faCar,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";

const Cards = () => {
  return (
    <>
      <div className="grid md:grid-cols-2 xl:grid-cols-3">
        <div className="grid bg-white border-2 rounded-lg border-r-black grid-cols-1  gap-4 mb-8 w-[400px] mx-auto p-1 gap-14">
          <div className="carPic">
            <img
              src="https://wallup.net/wp-content/uploads/2019/09/1029548-chevrolet-camaro-ss-convertible-cars-red-2016.jpg"
              className="rounded-lg w-[400px] md:w-[380px] m-2 transition duration-300 ease-in-out transform scale-100 hover:scale-110"
              alt="Car"
            />
          </div>
          <div className="details col-span-2 gap-6 pl-3">
            <div className="text-3xl font-serif font-semibold text-center">
              Chevrolet Camaro
            </div>
            <div className="icons mt-2">
              <div className="grid grid-cols-2 ml-[10px] font-semibold text-xl gap-16 ">
                <div className="grid grid-rows-2 gap-6">
                  <span>
                    <FontAwesomeIcon icon={faUserGroup} />{" "}
                    <span className="text-sky-600 ml-2">4 People</span>
                  </span>
                  <span>
                    <FontAwesomeIcon icon={faGaugeSimpleHigh} />{" "}
                    <span className="text-sky-600 ml-2">21 km/L</span>
                  </span>
                </div>
                <div className="grid grid-rows-2 gap-6">
                  <span>
                    <FontAwesomeIcon className="h-[20px]" icon={faGasPump} />
                    <span className="text-sky-600 ml-3">Hybrid</span>
                  </span>
                  <span>
                    <FontAwesomeIcon icon={faCar} />
                    <span className="text-sky-600 ml-3">Automatic</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <hr
              className="mx-auto w-[330px]"
              style={{ border: "1px solid grey" }}
            ></hr>
            <div className="flex justify-between text-center">
              <div className="price font-semibold ml-4 text-2xl mt-3 ">
                $350/Day
              </div>
              <div className="rent flex">
                <div className="wishlist m-3 border-2 p-1.5 hover:bg-slate-200 transition duration-300 ease-in-out transform scale-100 hover:scale-110 rounded-lg bg-sky-600">
                  <FontAwesomeIcon icon={faHeart} />
                </div>
                <div className="buttonRent">
                  <button className="border-2 m-3 p-1.5 hover:bg-slate-200 transition duration-300 ease-in-out transform scale-100 hover:scale-110 font-semibold rounded-lg bg-sky-600">
                    Rent now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid bg-white border-2 rounded-lg border-r-black grid-cols-1  gap-4 mb-8 w-[400px] mx-auto p-1 gap-14">
          <div className="carPic">
            <img
              src="https://wallup.net/wp-content/uploads/2019/09/1029548-chevrolet-camaro-ss-convertible-cars-red-2016.jpg"
              className="rounded-lg w-[400px] md:w-[380px] m-2 transition duration-300 ease-in-out transform scale-100 hover:scale-110"
              alt="Car"
            />
          </div>
          <div className="details col-span-2 gap-6 pl-3">
            <div className="text-3xl font-serif font-semibold text-center">
              Chevrolet Camaro
            </div>
            <div className="icons mt-2">
              <div className="grid grid-cols-2 ml-[10px] font-semibold text-xl gap-16 ">
                <div className="grid grid-rows-2 gap-6">
                  <span>
                    <FontAwesomeIcon icon={faUserGroup} />{" "}
                    <span className="text-sky-600 ml-2">4 People</span>
                  </span>
                  <span>
                    <FontAwesomeIcon icon={faGaugeSimpleHigh} />{" "}
                    <span className="text-sky-600 ml-2">21 km/L</span>
                  </span>
                </div>
                <div className="grid grid-rows-2 gap-6">
                  <span>
                    <FontAwesomeIcon className="h-[20px]" icon={faGasPump} />
                    <span className="text-sky-600 ml-3">Hybrid</span>
                  </span>
                  <span>
                    <FontAwesomeIcon icon={faCar} />
                    <span className="text-sky-600 ml-3">Automatic</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <hr
              className="mx-auto w-[330px]"
              style={{ border: "1px solid grey" }}
            ></hr>
            <div className="flex justify-between text-center">
              <div className="price font-semibold ml-4 text-2xl mt-3 ">
                $350/Day
              </div>
              <div className="rent flex">
                <div className="wishlist m-3 border-2 p-1.5 hover:bg-slate-200 transition duration-300 ease-in-out transform scale-100 hover:scale-110 rounded-lg bg-sky-600">
                  <FontAwesomeIcon icon={faHeart} />
                </div>
                <div className="buttonRent">
                  <button className="border-2 m-3 p-1.5 hover:bg-slate-200 transition duration-300 ease-in-out transform scale-100 hover:scale-110 font-semibold rounded-lg bg-sky-600">
                    Rent now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid bg-white border-2 rounded-lg border-r-black grid-cols-1  gap-4 mb-8 w-[400px] mx-auto p-1 gap-14">
          <div className="carPic">
            <img
              src="https://wallup.net/wp-content/uploads/2019/09/1029548-chevrolet-camaro-ss-convertible-cars-red-2016.jpg"
              className="rounded-lg w-[400px] md:w-[380px] m-2 transition duration-300 ease-in-out transform scale-100 hover:scale-110"
              alt="Car"
            />
          </div>
          <div className="details col-span-2 gap-6 pl-3">
            <div className="text-3xl font-serif font-semibold text-center">
              Chevrolet Camaro
            </div>
            <div className="icons mt-2">
              <div className="grid grid-cols-2 ml-[10px] font-semibold text-xl gap-16 ">
                <div className="grid grid-rows-2 gap-6">
                  <span>
                    <FontAwesomeIcon icon={faUserGroup} />{" "}
                    <span className="text-sky-600 ml-2">4 People</span>
                  </span>
                  <span>
                    <FontAwesomeIcon icon={faGaugeSimpleHigh} />{" "}
                    <span className="text-sky-600 ml-2">21 km/L</span>
                  </span>
                </div>
                <div className="grid grid-rows-2 gap-6">
                  <span>
                    <FontAwesomeIcon className="h-[20px]" icon={faGasPump} />
                    <span className="text-sky-600 ml-3">Hybrid</span>
                  </span>
                  <span>
                    <FontAwesomeIcon icon={faCar} />
                    <span className="text-sky-600 ml-3">Automatic</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <hr
              className="mx-auto w-[330px]"
              style={{ border: "1px solid grey" }}
            ></hr>
            <div className="flex justify-between text-center">
              <div className="price font-semibold ml-4 text-2xl mt-3 ">
                $350/Day
              </div>
              <div className="rent flex">
                <div className="wishlist m-3 border-2 p-1.5 hover:bg-slate-200 transition duration-300 ease-in-out transform scale-100 hover:scale-110 rounded-lg bg-sky-600">
                  <FontAwesomeIcon icon={faHeart} />
                </div>
                <div className="buttonRent">
                  <button className="border-2 m-3 p-1.5 hover:bg-slate-200 transition duration-300 ease-in-out transform scale-100 hover:scale-110 font-semibold rounded-lg bg-sky-600">
                    Rent now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
