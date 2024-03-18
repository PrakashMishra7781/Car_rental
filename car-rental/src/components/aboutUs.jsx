import React from "react";

const AboutUs = () => {
  return (
    <div className="mt-16 bg-sky-200 p-6 font-serif">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        <div className="h-[280px] md:w-[450px] md:h-[450px]">
          <img
            src="/img/GoRideAbout.jpg"
            alt="GoRide Rentals"
            className="h-full object-cover rounded-lg xl:ml-40px"
          />
        </div>
        <div className="mt-8 sm:mt-2 md:mt-0 md:w-full md:text-lg">
          <p className="mb-3 text-wrap">
            Welcome to GoRide Rentals, your ultimate destination for hassle-free
            car rental services. At GoRide, we're dedicated to providing you
            with a seamless and enjoyable experience every time you hit the
            road.
          </p>
          <p className="mb-3">
            Our fleet of vehicles is meticulously maintained, ensuring safety
            and reliability on every journey. Whether you need a compact car for
            city exploration or a spacious SUV for a family getaway, GoRide has
            the perfect ride for you.
          </p>
          <p className="mb-3">
            What sets us apart is our commitment to customer satisfaction. With
            transparent pricing, easy booking processes, and flexible rental
            options, we make renting a car a breeze. Our friendly and
            knowledgeable staff are always ready to assist you, ensuring that
            your rental experience is smooth from start to finish. Explore our
            range of vehicles and choose the one that suits your needs best.
            Whether it's a weekend road trip or a long-term rental, GoRide
            Rentals has got you covered.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
