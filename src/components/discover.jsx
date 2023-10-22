import "./discover.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect, useContext, createContext } from "react";
import { Artistinfo } from "./topartists";
import Relatedartist from "./relatedartist";
import Information from "./information";
import Searchinformation from "./searchinformation";
import Genresearchinformation from "./genresearchinfo";
import Musicplay from "./musicplay";
import { useSelector } from "react-redux";
import {} from "react-query";

// eslint-disable-next-line react-refresh/only-export-components
export const Searchinfo = createContext();

const Discover = () => {
  const [value, setvalue] = useState("");
  const [genresearchvalue, setgenresearchvalue] = useState("");
  const [infosearch, setinfosearch] = useState([]);
  const [issearch, setissearch] = useState(false);
  const [infogenre, setinfogenre] = useState([]);
  const [newinfosearch, setnewinfosearch] = useState([]);
  const [isgenresearch, setisgenresearch] = useState(false);
  const [genresearchinfo, setgenresearchinfo] = useState([]);
  const [newinfogenre, setnewinfogenre] = useState([]);
  const [isanimate, setisanimate] = useState(false);

  const artistinformation = useContext(Artistinfo);
  const trouvsearch = useSelector((state) => state.trouvsearch.value);

  const foranimation = () => {
    setisanimate(true);
    setTimeout(() => {
      setisanimate(false);
    }, 1000);
  };

  const fetchsearch = () => {
    const url = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=${value}`;
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setinfosearch(data?.data);
      })
      .catch((err) => console.log(err));
  };

  const modifyobjectarray = () => {
    const infosearchtmp = infosearch.map((item) => {
      return {
        ...item,
        pauseplay: false,
      };
    });
    setnewinfosearch(infosearchtmp);
  };
  const fetchgenre = () => {
    const url =
      "https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre";

    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setinfogenre(data?.data);
      });
  };

  const updatepauseplay = (element) => {
    const updateinfosearch = newinfosearch.map((item) => {
      if (element === item) {
        return { ...element, pauseplay: !item.pauseplay };
      } else {
        return item;
      }
    });
    setnewinfosearch(updateinfosearch);
  };

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    fetchgenre();
  }, []);
  useEffect(() => {
    modifyobjectarray();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [infosearch]);
  useEffect(() => {
    foranimation();
  }, []);

  const fetchgenresearch = (element) => {
    const url = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=${element}`;

    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setgenresearchinfo(data?.data);
      })
      .catch((err) => console.log(err));
  };

  const modifyobjectarraygenre = () => {
    const infogenretmp = genresearchinfo.map((item) => {
      return {
        ...item,
        pauseplay: false,
      };
    });
    setnewinfogenre(infogenretmp);
  };

  const updatepauseplaygenre = (element) => {
    const updateinfogenre = newinfogenre.map((item) => {
      if (element === item) {
        return { ...item, pauseplay: !item.pauseplay };
      } else {
        return item;
      }
    });
    setnewinfogenre(updateinfogenre);
  };

  useEffect(() => {
    modifyobjectarraygenre();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [genresearchinfo]);

  // const { data, loading, error } = useQuery("data", fetchsearch);

  // if (loading) {
  //   return (
  //     <div>
  //       <h1>loaindgin.....</h1>
  //     </div>
  //   );
  // }
  // if (error) {
  //   return <div>{error.message} </div>;
  // }
  console.log("newinfosearch", newinfosearch);

  return (
    <>
      <Searchinfo.Provider
        value={{
          newinfosearch,
          updatepauseplay,
          newinfogenre,
          updatepauseplaygenre,
        }}
      >
        <div className="overflow-y-scroll contain">
          <div className=" relative ml-2 flex place-content-between">
            <input
              type="text"
              placeholder="Search"
              className=" bg-transparent w-28 mt-5 rounded-lg h-9 pl-4 text-white"
              onChange={(event) => {
                setvalue(event.target.value);
              }}
              value={value}
            />
            <FontAwesomeIcon
              className=" text-white absolute top-8 left-20 outline-none cursor-pointer z-10"
              icon={faSearch}
              onClick={() => {
                fetchsearch();
                setisgenresearch(false);
                setissearch(true);
                foranimation();
              }}
            />
            <a
              href="https://cors-anywhere.herokuapp.com/corsdemo"
              target="_blank"
              rel="noreferrer"
            >
              <button className=" text-gray-500  mt-5">Nothing appears?</button>
            </a>
          </div>

          <div className=" flex place-content-between mt-5">
            <h1 className=" text-white text-3xl capitalize font-bold ml-4">
              discover{" "}
              {issearch && !isgenresearch
                ? `${value}`
                : isgenresearch
                ? `${genresearchvalue}`
                : ""}
            </h1>

            <select
              name=""
              id=""
              className=" bg-blackk text-white w-28 rounded-lg p-1 cursor-pointer mr-2"
              onChange={(event) => {
                fetchgenresearch(event.target.value);
                setisgenresearch(true);
                setgenresearchvalue(event.target.value);
                foranimation();
              }}
            >
              {infogenre.map((item) => {
                return (
                  <>
                    <option
                      value={item.name}
                      className=" bg-black hover:bg-red-500"
                    >
                      {item.name}
                    </option>
                  </>
                );
              })}
            </select>
          </div>

          <div
            className={`flex flex-wrap gap-4 ml-10 mt-5 ${
              isanimate ? "undercontain" : ""
            }`}
          >
            {!issearch && !isgenresearch && value == "" && <Information />}
            {issearch && !isgenresearch && <Searchinformation />}
            {isgenresearch && <Genresearchinformation />}
          </div>
        </div>
        <Musicplay
          array={
            // issearch === true ? newinfosearch[trouvsearch] : newinfo[trouv]
            newinfosearch[trouvsearch]
          }
        />

        {artistinformation?.isartist && <Relatedartist />}
      </Searchinfo.Provider>
    </>
  );
};

export default Discover;
