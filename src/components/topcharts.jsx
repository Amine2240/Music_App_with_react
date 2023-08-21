import "./topcharts.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

const Topcharts = () => {
  const [charts, setcharts] = useState([]);
  const fetchdata = () => {
    const url =
      "https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart";

    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setcharts(data.tracks.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchdata();
    
  }, []);
  return (
    <>
      <div className=" mt-5 ml-10">
        <p className=" capitalize text-white font-bold text-2xl mb-5">
          top charts
        </p>
        <section className=" h-[450px] overflow-y-scroll chart ">
          {charts.map((item) => {
            return (
              <>
                <div className=" flex  place-content-between mb-2 items-center hover:bg-gradient-to-br from-myblue to-mywhite  rounded-lg duration-100 p-2">
                  <div className=" flex">
                    <div className=" h-16 w-16 bg-red-400 rounded-lg">
                      <img
                        src={item.album.cover_xl}
                        alt=""
                        className=" w-full h-full object-cover rounded-lg"
                      />
                    </div>
                    <div className=" ml-5">
                      <p className=" text-white font-bold capitalize text-xl">
                        {item.title}
                      </p>
                      <p className=" text-gray-500 font-medium capitalize text-sm">
                        {item.name}
                      </p>
                    </div>
                  </div>
                  <FontAwesomeIcon
                    icon={faCirclePlay}
                    className=" text-white text-3xl cursor-pointer"
                  />
                </div>
              </>
            );
          })}
        </section>
      </div>
    </>
  );
};

export default Topcharts;
