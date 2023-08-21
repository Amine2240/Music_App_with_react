import "./discover.css";
import { useState, useEffect, useRef, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePause, faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { Volumevalue } from "./musicplay";
// eslint-disable-next-line react-refresh/only-export-components


const Information = () => {
  const [information, setinformation] = useState([]);
  const [newinfo, setnewinfo] = useState([]);
  const [trouv, settrouv] = useState(0);

  const value = useContext(Volumevalue);

  const fetchdata = () => {
    const url =
      "https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/3/tracks";

    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setinformation(data.data);
      })
      .catch((err) => console.log(err));
  };

  const modifyobjectarrayinfo = () => {
    const infotmp = information.map((item) => {
      return {
        ...item,
        pauseplay: false,
      };
    });
    setnewinfo(infotmp);
  };

  const updatepauseplayinfo = (element) => {
    const updateinfo = newinfo.map((item) => {
      if (element === item) {
        return { ...item, pauseplay: !item.pauseplay };
      } else {
        return item;
      }
    });
    setnewinfo(updateinfo);
  };
  useEffect(() => {
    fetchdata();
  }, []);
  useEffect(() => {
    modifyobjectarrayinfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [information]);

  const audioRefs = useRef([]);

  const handleTogglePlay = (i) => {
    const audioElement = audioRefs.current[i];

    if (newinfo[i].pauseplay) {
      audioElement.pause();
      audioRefs.current[i].volume = value;
    } else {
      audioElement.play();
    }
  };

  return (
    <>
      <>
        {newinfo.map((item, i) => {
          return (
            <>
              <audio
                src={item.preview}
                controls={item.pauseplay}
                className="hidden"
                ref={(element) => (audioRefs.current[i] = element)}
              ></audio>
              <div
                className=" w-64 h-64 group flex flex-col place-content-around bg-blue-950 rounded-md shadow-md cursor-pointer"
                key={i}
                onClick={() => {
                  settrouv(i);
                }}
              >
                <div className=" w-60 h-44 my-0 mx-auto bg-black mt-2 rounded-sm shadow-lg relative">
                  {item.pauseplay === false ? (
                    <FontAwesomeIcon
                      icon={faCirclePlay}
                      className=" text-white absolute top-1/2 left-1/2 text-5xl -translate-x-1/2 -translate-y-1/2 z-10 opacity-0 group-hover:opacity-100"
                      onClick={() => {
                        updatepauseplayinfo(item);
                        handleTogglePlay(i);
                      }}
                    />
                  ) : (
                    <FontAwesomeIcon
                      icon={faCirclePause}
                      className=" text-white absolute top-1/2 left-1/2 text-5xl -translate-x-1/2 -translate-y-1/2 z-10 opacity-0 group-hover:opacity-100"
                      onClick={() => {
                        updatepauseplayinfo(item);
                        handleTogglePlay(i);
                      }}
                    />
                  )}
                  <img
                    src={item.album.cover_xl}
                    alt=""
                    className="w-full h-full object-cover group-hover:opacity-75"
                  />
                </div>
                <div className=" text-white pl-3 ">
                  <p>{item.title} </p>

                  <p className=" text-gray-500 text-sm">{item.artist.name} </p>
                </div>
              </div>
            </>
          );
        })}
      </>
    </>
  );
};

export default Information;
