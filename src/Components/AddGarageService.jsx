import React, { useState } from "react";
import GarageService from "../Services/GarageService";

let AddGarageService=()=>{
     let [msg,setMsg]=useState("");
    let[garageservice,setGarageService]=useState({
        servicetype:"",
        svcost:""
    });

    let uniHandler=(e)=>{
       setGarageService(garageservice=>{
        return{...garageservice,[e.target.name]:e.target.value}
       });
    }

    let saveGarageService=(e)=>
    {
        e.preventDefault();
        let promise=GarageService.addGarageService(garageservice);
        promise.then((res)=>{
            setMsg(res.data);
        }).catch((res)=>{
            setMsg(res.data);
        }); 
    };
 
    return(
    <>
    <div className="serviceform">
    <center>
     <h1>Add Garage Service Form</h1><br/><br/>
    <input type="text" name="servicetype" value={garageservice.servicetype} placeholder="Enter Service Type"  onChange={(e)=>uniHandler(e)}/><br/><br/>
    <input type="text" name="svcost" value={garageservice.svcost}  placeholder="Enter Service cost" onChange={(e)=>uniHandler(e)} /><br/><br/>
    <input type="Submit" name="subservice" value="Add Service" onClick={saveGarageService}/><br/><br/>
    {msg}
    </center>
   
    </div>
    </>);
}
export default AddGarageService;