import React, { useState } from "react";
import { Link } from "react-router-dom";
import GenerateReceiptService from "../Services/GenerateReceiptService";
import GarageService from "../Services/GarageService";

let GenerateReceipt = () => {
    let [msg, setMsg] = useState("");
    let [receipt, setReceipt] = useState({
        apid: "",
        servicetype: "",
        sparename: "",
        spareqty: ""
    });
   

    let uniHandler = (e) => {
        setReceipt({ ...receipt, [e.target.name]: e.target.value });
    };

    let saveReceipt = (e) => {
        e.preventDefault();

        GenerateReceiptService.createReceipt(receipt)
            .then((res) => {
                setMsg("Receipt generated successfully!"); 
            })
            .catch((err) => {
                setMsg("Error generating receipt!");
            });
    };

    return (
        
        <div className="receipt">
            <center>
                <h1>Generate Receipt</h1>
                <br />
                <input type="text"  name="apid" value={receipt.apid}  placeholder="Enter Appointment ID"  onChange={uniHandler}/><br /><br />
                <select name="servicetype" value={receipt.servicetype} onChange={uniHandler}>
                   <option value="" disabled>Select Service Type</option>
                   <option value="Coloring Car">Coloring Car</option>
                   <option value="Break">Break</option>
                   <option value="Suspension">Suspension</option>
                   <option value="Oil Changing">Oil Changing</option>
                   <option value="Wheel Alignment">Wheel Alignment</option>
                   <option value="Coolant Refilling">Coolant Refilling</option>
                   <option value="Engine Works">Engine Works</option>
                   <option value="Wheel Change">Wheel Change</option>
                </select><br /><br />
                <select  name="sparename" value={receipt.sparename} placeholder="Enter Spare Part Name" onChange={uniHandler}>
                 <option value="">select Spare Part</option>
                 <option value="Head Light">Head Light</option>
                 <option value="Oil Filter">Oil Filter</option>
                 <option value="Bumper">Bumper</option>
                 <option value="Wind Shield">Wind Shield</option>
                 <option value="Car Horn">Car Horn</option>
                 <option value="Indicator">Indicator</option>
                 <option value="wiper">wiper</option>
                 <option value="Break Disk">Break Disk</option>
                    
                    
                    
                  </select>  <br /><br />
                <input type="number" name="spareqty" value={receipt.spareqty} placeholder="Spare Part Quantity" onChange={uniHandler} /><br /><br /><br />
                <input  type="submit" value="Generate" onClick={saveReceipt}/><br /><br />
                <span>{msg}</span>
 
            </center>
        </div>
    );
};

export default GenerateReceipt;
