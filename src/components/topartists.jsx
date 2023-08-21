import "./topartists.css";
import { useEffect, useState, createContext } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const Artistinfo = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const Topartists = () => {
  const [artists, setartists] = useState([]);
  const [newartists, setnewartists] = useState([]);
  const [trouv, settrouv] = useState(0);

  const fetchdata = () => {
    const url =
      "https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/0/artists";

    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setartists(data?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const updateartists = () => {
    const newartists = artists.map((item) => {
      return { ...item, isartist: false };
    });
    setnewartists(newartists);
  };

  const updatebooleen = (element) => {
    const artiststmp = newartists.map((item) => {
      if (item === element) {
        return { ...item, isartist: true };
      } else {
        return item;
      }
    });
    setnewartists(artiststmp);
  };
  useEffect(() => {
    fetchdata();
  }, []);
  useEffect(() => {
    updateartists();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [artists]);

  return (
    <Artistinfo.Provider value={newartists[trouv]}>
      <div className="overflow-x-scroll artist ">
        <p className=" capitalize text-white font-bold text-2xl mb-5 mt-3 ml-10">
          top artists
        </p>
        <div className=" flex  w-fit gap-1  ">
          {artists.map((item, i) => {
            return (
              <>
                <div
                  className=" h-[60px] w-[60px] bg-red-500 rounded-full cursor-pointer"
                  onClick={() => {
                    updatebooleen(item);
                    settrouv(i);
                  }}
                >
                  {" "}
                  <img
                    src={item?.picture_xl}
                    alt=""
                    className=" w-full h-full object-cover rounded-full"
                  />
                </div>
              </>
            );
          })}
        </div>
      </div>
    </Artistinfo.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default Topartists;
