import { useState, useEffect } from "react";

const BookingForm = () => {
  const [pickupCountry, setPickupCountry] = useState("");
  const [pickupState, setPickupState] = useState("");
  const [showPickupDropdown, setShowPickupDropdown] = useState(false);
  const [pickupCity, setPickupCity] = useState("");
  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState([]);

  useEffect(() => {
    fetch("https://countriesnow.space/api/v0.1/countries/states")
      .then((response) => response.json())
      .then((data) => {
        setCountries(data.data);
      })
      .catch((error) => {
        console.error("Error fetching countries:", error);
      });
  }, []);

  const fetchCitiesByState = (state) => {
    fetch(
      `https://countriesnow.space/api/v0.1/countries/state/cities?state=${state}`
    )
      .then((response) => response.json())
      .then((data) => {
        setCities(data.data);
      })
      .catch((error) => {
        console.error("Error fetching cities:", error);
      });
  };

  const handlePickupCountryChange = (country) => {
    setPickupCountry(country);
    setShowPickupDropdown(true);
  };

  const handlePickupStateChange = (state) => {
    setPickupState(state);
    fetchCitiesByState(state);
  };

  const handlePickupCityChange = (city) => {
    setPickupCity(city);
  };

  const handleBookNow = () => {
    console.log("Booking request submitted:", {
      pickupCountry,
      pickupState,
      pickupCity,
    });
  };

  return (
    <>
      <div className="max-w-md p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-semibold mb-4">Book Your Ride</h1>

        {/* Pickup Location */}
        <div className="flex mb-4">
          {/* Pickup Country */}
          <div className="w-1/2 pr-2">
            <label
              htmlFor="pickupCountry"
              className="block text-sm font-medium text-gray-700"
            >
              Pickup Country
            </label>
            <select
              id="pickupCountry"
              className="w-full border rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring focus:border-blue-500"
              value={pickupCountry}
              onChange={(e) => handlePickupCountryChange(e.target.value)}
            >
              <option value="">Select country</option>
              {countries.map((country, index) => (
                <option key={index} value={country.name}>
                  {country.name}
                </option>
              ))}
            </select>
          </div>

          {/* Pickup State */}
          {pickupCountry && (
            <div className="w-1/2 pl-2">
              <label
                htmlFor="pickupState"
                className="block text-sm font-medium text-gray-700"
              >
                Pickup State
              </label>
              {showPickupDropdown ? (
                <select
                  id="pickupState"
                  className="w-full border rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring focus:border-blue-500"
                  value={pickupState}
                  onChange={(e) => handlePickupStateChange(e.target.value)}
                >
                  <option value="">Select state</option>
                  {countries
                    .find((country) => country.name === pickupCountry)
                    ?.states.map((state, index) => (
                      <option key={index} value={state.name}>
                        {state.name}
                      </option>
                    ))}
                </select>
              ) : (
                <input
                  type="text"
                  id="pickupState"
                  className="w-full border rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring focus:border-blue-500"
                  placeholder="Enter state"
                  value={pickupState}
                  onChange={(e) => setPickupState(e.target.value)}
                />
              )}
            </div>
          )}
        </div>

        {pickupState && (
          <div className="w-1/2 pl-2">
            <label
              htmlFor="pickupCity"
              className="block text-sm font-medium text-gray-700"
            >
              Pickup City
            </label>
            <select
              id="pickupCity"
              className="w-full border rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring focus:border-blue-500"
              value={pickupCity}
              onChange={(e) => handlePickupCityChange(e.target.value)}
            >
              <option value="">Select city</option>
              {cities.map((city, index) => (
                <option key={index} value={city.name}>
                  {city.name}
                </option>
              ))}
            </select>
          </div>
        )}

        <button
          className="mt-6 w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
          onClick={handleBookNow}
        >
          Book Now
        </button>
      </div>
    </>
  );
};

export default BookingForm;
