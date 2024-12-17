//import { useContext } from "react";
import { colorContext } from "../context";

function GrandChildComponent() {
  //const value = useContext(colorContext);
  //console.log(value.color);

  return(

    <colorContext.consumer>
 {(value) => <p style={{ color: value.color}}>Color: {value.color}</p>}
    </colorContext.consumer>
 
  )
}

export default GrandChildComponent;
