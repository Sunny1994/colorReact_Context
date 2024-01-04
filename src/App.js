import React, { useState } from "react";
import Color from "./Color";
import { Colorcontext } from "./Colorcontext";
 

const App=()=>{
 
const [color, setColor]= useState("red")
  return(
    <Colorcontext.Provider value={{color, setColor}}>
  <div className="text-center">
    
  <div className="container"style={{backgroundColor:color}}>
         <h3 className="text-center mt-3">{color.toUpperCase()}</h3>
        </div>
      
    <Color/>
  </div>
  </Colorcontext.Provider>
)
}

export default App