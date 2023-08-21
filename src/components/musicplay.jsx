/* eslint-disable react/prop-types */
import "./musicplay.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faVolumeHigh,
  faPlay,
  faForwardStep,
  faRepeat,
  faShuffle,
  faPause,
} from "@fortawesome/free-solid-svg-icons";
import { createContext, useState } from "react";
import { nexttrouvsearch, previoustrouvsearch } from "../redux/musicplayslice";
import { useDispatch } from "react-redux";

export const Volumevalue = createContext();

// eslint-disable-next-line react/prop-types
const Musicplay = ({ array }) => {
  const [pauseplay, setpauseplay] = useState(false);
  const [value, setvalue] = useState(0.5);
  const dispatch = useDispatch();
  return (
    <Volumevalue.Provider value={value}>
      <div className="musicplay flex place-content-between items-center">
        <div className=" flex ml-5">
          <div className=" bg-gradient-to-tr from-red-500 to-transparent rounded-full w-12 h-12">
            <img
              src={array?.album?.cover_xl}
              alt=""
              className=" rounded-full"
            />
          </div>
          <div className=" text-white ml-3">
            <p>{array?.title} </p>
            <p className=" text-gray-500">{array?.artist.name} </p>
          </div>
        </div>
        <div className="flex flex-col place-content-between h-12">
          <div className=" flex place-content-between mb-4">
            <FontAwesomeIcon icon={faRepeat} className=" text-white" />
            <FontAwesomeIcon
              icon={faForwardStep}
              className=" cursor-pointer text-white rotate-180"
              onClick={() => {
                dispatch(previoustrouvsearch());
              }}
            />
            {pauseplay === false ? (
              <FontAwesomeIcon
                className=" cursor-pointer text-white text-xl "
                icon={faPlay}
                onClick={() => {
                  setpauseplay(!pauseplay);
                }}
              />
            ) : (
              <FontAwesomeIcon
                className=" cursor-pointer text-white text-xl"
                icon={faPause}
                onClick={() => {
                  setpauseplay(!pauseplay);
                }}
              />
            )}

            <FontAwesomeIcon
              className=" cursor-pointer text-white"
              icon={faForwardStep}
              onClick={() => {
                dispatch(nexttrouvsearch());
              }}
            />
            <FontAwesomeIcon
              className=" cursor-pointer text-white"
              icon={faShuffle}
            />
          </div>
          <div className=" flex text-white items-center w-72 place-content-around">
            <p> - 0:30</p>
            <input
              type="range"
              name=""
              id=""
              className=" h-1 w-44"
              min="0"
              max="1"
              step="0.1"
            />
            <p> 1:29 +</p>
          </div>
        </div>
        <div className=" mr-5">
          <FontAwesomeIcon
            icon={faVolumeHigh}
            className=" text-white text-lg mr-3"
          />
          <input
            type="range"
            name=""
            id=""
            className=" h-1"
            min="0"
            step="0.1"
            max="1"
            value={value}
            onChange={(event) => {
              setvalue(event.target.value);
            }}
          />
        </div>
      </div>
    </Volumevalue.Provider>
  );
};

export default Musicplay;
