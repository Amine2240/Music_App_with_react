import { useContext, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePause } from "@fortawesome/free-solid-svg-icons";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import "./discover.css";
import { Searchinfo } from "./discover";

const Genresearchinformation = () => {
  const { newinfogenre, updatepauseplaygenre } = useContext(Searchinfo);

  const audioRefs = useRef([]);
  const handleTogglePlay = (i) => {
    const audioElement = audioRefs.current[i];
    if (newinfogenre[i].pauseplay) {
      audioElement.pause();
    } else {
      audioElement.play();
    }
  };
  return (
    <>
      {newinfogenre.map((item, i) => {
        return (
          <>
            <audio
              src={item.preview}
              controls={item.pauseplay}
              autoPlay={item.pauseplay}
              ref={(element) => (audioRefs.current[i] = element)}
              className=" hidden"
            ></audio>
            <div
              className=" w-64 h-64 flex group flex-col place-content-around bg-blue-950 rounded-md shadow-md cursor-pointer"
              onClick={() => {
                // settrouv(i);
              }}
            >
              <div className=" w-60 h-44 my-0 mx-auto  bg-black mt-2 rounded-sm shadow-lg relative">
                {item.pauseplay === false ? (
                  <FontAwesomeIcon
                    icon={faCirclePlay}
                    className=" text-white absolute top-1/2 left-1/2 text-5xl -translate-x-1/2 -translate-y-1/2 z-10 opacity-0 group-hover:opacity-100"
                    onClick={() => {
                      updatepauseplaygenre(item);
                      handleTogglePlay(i);
                    }}
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={faCirclePause}
                    className=" text-white absolute top-1/2 left-1/2 text-5xl -translate-x-1/2 -translate-y-1/2 z-10 opacity-0 group-hover:opacity-100"
                    onClick={() => {
                      updatepauseplaygenre(item);
                      handleTogglePlay(i);
                    }}
                  />
                )}

                <img
                  src={item?.album?.cover_xl}
                  alt=""
                  className=" w-full h-full object-cover group-hover:opacity-75"
                />
              </div>
              <div className=" text-white pl-3 ">
                <p>{item?.title} </p>

                <p className=" text-gray-500 text-sm">{item?.artist.name} </p>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default Genresearchinformation;
