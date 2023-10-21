import { Artistinfo } from "./topartists";
import { useContext } from "react";

const Relatedartist = () => {
  const newartistoftrouv = useContext(Artistinfo);

  console.log(newartistoftrouv);
  return (
    <>
      <div>
        <div className=" w-16 h-16">
          <img src={newartistoftrouv.picture_xl} alt="" />
        </div>                 
        <div>
          <p>related artist </p>
        </div>
      </div>
    </>
  );
};

export default Relatedartist;
