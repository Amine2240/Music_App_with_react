import "./navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faRectangleAd,
  faMusic,
  faChartArea,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const navbarelements = [
    {
      icon: faHome,
      text: "discover",
    },
    {
      icon: faChartArea,
      text: "around you",
    },
    {
      icon: faRectangleAd,
      text: "top artists",
    },
    {
      icon: faMusic,
      text: "top charts",
    },
  ];
  return (
    <>
      <nav className=" bg-blue-950 shadow-xl rounded-md flex flex-col items-center place-content-start">
        <label
          htmlFor=""
          className=" text-3xl font-bold capitalize  bg-gradient-to-r from-gold to-transparent bg-clip-text text-transparent mt-10"
        >
          spotify clone
        </label>

        <ul className=" w-full flex flex-col items-start h-96 place-content-center  ml-10">
          {navbarelements.map((item) => {
            return (
              <>
                <li className=" mb-7 flex  text-white cursor-pointer hover:text-aqua duration-100">
                  {" "}
                  <FontAwesomeIcon className=" mr-3 text-xl" icon={item.icon} />
                  <p className=" text-lg font-medium capitalize ">
                    {" "}
                    {item.text}{" "}
                  </p>
                </li>
              </>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
