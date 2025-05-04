import React, { useEffect, useState } from "react";
import{useParams} from "react-router-dom";
import AppointmentService from "../Services/AppointmentService";

let CancelAppointment = () => {
  
    let{apid}=useParams();
    let[msg,setMSg]=useState("");

    useEffect(()=>{
        let promise=AppointmentService.cancelAppointment(apid);

        promise.then((res)=>{
            setMSg(res.data);
        }).catch((res)=>{
            setMSg(res.data);
        });
    });
    return (
    <>
     
      <div>
        <center>
          <br/>
          <h1>Appointment ID:{apid} <br/></h1>
          <h1>Your Appointment Cancel Successfully...!</h1> 
        </center>
        </div>
    </>
  );
};

export default CancelAppointment;
