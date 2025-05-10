import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

let BookingApp = () => {
  let [msg, setMsg] = useState("");
  let [bookedSlots, setBookedSlots] = useState({});
  let [appointment, setAppointment] = useState({
    cname: "",
    adate: "",
    atime: "",
    vnumber: "",
  });

  useEffect(() => {
    const savedSlots = localStorage.getItem("bookedSlots");
    if (savedSlots) 
    {
      setBookedSlots(JSON.parse(savedSlots));
    }
  }, []);

  let handleChange = (e) => {
    const { name, value } = e.target;

    setAppointment((prev) => ({
      ...prev,[name]: value,
    }));
  };

  let saveAppointment = (e) => {
    e.preventDefault();

    const { adate, atime } = appointment;
    if (!adate || !atime) {
      setMsg("Please select date and time.");
      return;
    }

    setBookedSlots((prev) => {
      const updated = { ...prev };
      if (!updated[adate]) {
        updated[adate] = [];
      }
      if (!updated[adate].includes(atime)) 
      {
        updated[adate].push(atime);
      }

      localStorage.setItem("bookedSlots", JSON.stringify(updated));
      return updated;
    });

    setMsg("Appointment Booked Successfully!");
  };

  const timeSlots = [
    "10.00 AM",
    "11.00 AM",
    "12.00 PM",
    "01.00 PM",
    "02.00 PM",
    "03.00 PM",
    "04.00 PM",
    "05.00 PM",
    "06.00 PM",
  ];

  const disabledTimes = bookedSlots[appointment.adate] || [];

  return (
    <div className="book">
      <form>
        <center>
          <br/><br/>
          <h1>Booking Form</h1>
          <br/>
          <input type="text" name="cname" value={appointment.cname} onChange={handleChange} placeholder="Customer Name" />
          <br /><br /><br/>
          <input type="date" name="adate" value={appointment.adate} onChange={handleChange}/>
          <br /><br /><br/>
          <select name="atime" value={appointment.atime} onChange={handleChange}>
            <option value="">-- Select Time --</option>
            {timeSlots.map((time) => (
              <option key={time} value={time} disabled={disabledTimes.includes(time)}>
                {time}
              </option>
            ))}
          </select>
          <br /><br /><br/>
          <input type="text" name="vnumber" value={appointment.vnumber} onChange={handleChange} placeholder="Vehicle Number (MH10 JK 8998)"/>
          <br /><br /><br/>
          <input type="submit" name="submit" value="Submit" onClick={saveAppointment}/>
          <br /><br />
          {msg && <div><strong>{msg}</strong></div>}
        </center>
      </form>
    </div>
  );
};

export default BookingApp;


