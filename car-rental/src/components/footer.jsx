import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <>
      <div className="bg-black h-[500px] flex flex-col text-white">
        <div className="text ml-16 mt-16">
          <div className="font-bold text-2xl">
            Go<span className="text-sky-600">Ride</span> Rentals
          </div>
          <div className="mt-4">
            Experience the freedom of the road with our premium car rentals -
            your adventure awaits.
          </div>
          <div className="icons mt-4">
            <FontAwesomeIcon icon={faInstagram} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
