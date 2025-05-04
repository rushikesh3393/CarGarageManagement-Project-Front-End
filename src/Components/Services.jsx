import React, { useEffect, useState } from "react";
import GarageService from "../Services/GarageService";
import "bootstrap/dist/css/bootstrap.min.css";

let Services = () => {
  let [garageservice, setGarageService] = useState([]);
  let [search, setSearch] = useState("");

  useEffect(() => {
    if (search.length === 0) {
      GarageService.viewGarageService()
        .then((res) => {
          setGarageService(res.data);
        })
        .catch((res) => {
          setGarageService(res.data);
        });
    }
  }, []);

  return (
    <>
      <div className="container">
        <table className="table table-striped border p-5 text-center">
          <thead>
            <tr>
              <th>ServiceId</th>
              <th>Service Type</th>
              <th>Service Cost(rupees)</th>
            </tr>
          </thead>
          <tbody>
            {garageservice.map((e) => (
              <tr>
                <td>{e.svid}</td>
                <td>{e.servicetype}</td>
                <td>{e.svcost}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
export default Services;
