
import { Artistinfo } from "./topartists";
import { useContext } from "react";

const Relatedartist = () => {
  const data  = useContext(Artistinfo)

  console.log(data);
  return(
   <>
   
      
    <div>
      <div className=" w-16 h-16">
        <img src={data.picture_xl} alt="" />
      </div>
      <div>
        <p>related artist </p>
      </div>
    </div>

   
     
  </>
  )
};

export default Relatedartist;
