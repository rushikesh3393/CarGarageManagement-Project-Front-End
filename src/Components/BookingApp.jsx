import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AppointmentService from "../Services/AppointmentService";


let BookingApp = () => {

  let [msg,setMsg]=useState("");

  let [appointment,setAppointment] = useState({
    cname: "",
    adate: "",
    atime: "",
    vnumber: ""
  });

  let handleChange = (e) => 
    {
      setAppointment(appointment=>{
        return{...appointment,[e.target.name]:e.target.value}});
    };

  let saveAppointment=(e)=>{
    e.preventDefault();

    let promise=AppointmentService.bookAppointment(appointment);

    promise.then((res)=>{
        setMsg(res.data);
    }).catch((res)=>
    {
        setMsg("There is some Error");
    });

  };
    

    return (
          <div className="book">
            <form>
            <center>
              <br/>
          <h1>Booking Form</h1>
          <br/><br/>
          <input type="text" name="cname" value={appointment.cname} onChange={handleChange} placeholder="Customer Name" /> <br /><br />
          <input type="date" name="adate" value={appointment.adate} onChange={handleChange} /> <br /><br />
          <select name="atime" value={appointment.atime} onChange={handleChange}>
              <option value="">-- Select Time --</option>
              <option value="10.00 AM">10.00 AM</option>
              <option value="11.00 AM">11.00 AM</option>
              <option value="12.00 PM">12.00 PM</option>
              <option value="01.00 PM">01.00 PM</option>
              <option value="02.00 PM">02.00 PM</option>
              <option value="03.00 PM">03.00 PM</option>
              <option value="04.00 PM">04.00 PM</option>
              <option value="05.00 PM">05.00 PM</option>
              <option value="06.00 PM">06.00 PM</option>
          </select><br /><br />
          <input type="text" name="vnumber" value={appointment.vnumber} onChange={handleChange} placeholder="Vehicle Number(MH10 JK 8998)" /> <br /><br /><br /><br />
          <input type="submit" name="submit" value="Submit" onClick={(e)=>saveAppointment(e)} />
          <br/>
          {msg}
          </center>
          
          </form>
          </div>
      );
    }
export default BookingApp;
