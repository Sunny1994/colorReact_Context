import React, { useContext } from "react";
import {Button} from "reactstrap";
import "bootstrap/dist/css/bootstrap.css"
import './App.css'

import { Colorcontext } from "./Colorcontext";


 const Color=()=>{
 
    const {setColor}= useContext(Colorcontext)


   const handlecolor=(e)=>{
    setColor(e)
   }
    

    return(
    <div>
       
       <Button color="success" onClick={()=>handlecolor("green")}>Hit me Green</Button>
       <Button color="primary" onClick={()=>handlecolor("blue")}>Hit me Blue</Button>
       <Button color="danger" onClick={()=>handlecolor("red")}>Hit me Red</Button>
       <Button color="warning" onClick={()=>handlecolor("yellow")}>Hit me Yellow</Button>
       
    </div>
    )

}

export default Color