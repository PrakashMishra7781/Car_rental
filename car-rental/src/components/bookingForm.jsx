import { useState } from "react";

const BookingForm = () => {
  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");
  const [datetime, setDatetime] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [cities, setCities] = useState([
    "Mumbai",
    "Delhi",
    "Bangalore",
    "Kolkata",
    "Chennai",
    // Add more cities as needed
  ]);

  const handlePickupChange = (city) => {
    setPickup(city);
    setShowDropdown(false);
  };

  const handleBookNow = () => {
    // Implement your booking logic here
    console.log("Booking request submitted:", { pickup, dropoff, datetime });
  };

  return (
    <>
      <div className="max-w-md p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-semibold mb-4">Book Your Ride</h1>

        {/* Pickup Location */}
        <label
          htmlFor="pickup"
          className="block text-sm font-medium text-gray-700"
        >
          Pickup Location
        </label>
        <div className="relative">
          <input
            type="text"
            id="pickup"
            className="w-full border rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring focus:border-blue-500"
            placeholder="Enter pickup location"
            value={pickup}
            onChange={(e) => setPickup(e.target.value)}
            onFocus={() => setShowDropdown(true)}
          />
          {showDropdown && (
            <div className="absolute z-10 bg-white border border-gray-300 w-full mt-1 rounded-md shadow-md">
              {cities.map((city, index) => (
                <div
                  key={index}
                  className="cursor-pointer px-3 py-2 hover:bg-gray-100"
                  onClick={() => handlePickupChange(city)}
                >
                  {city}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Drop-off Location */}
        {/* Similar input for drop-off location as pickup location */}

        {/* Date and Time */}
        {/* Similar input for date and time as pickup location */}

        {/* Book Now Button */}
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
