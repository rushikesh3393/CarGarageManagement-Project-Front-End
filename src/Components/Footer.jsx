import React from "react";
import { NavLink } from "react-router-dom";

let Footer=()=>{
    return(<>

    <div className="mainfoot">
         <div className="lfooter">
            <h1>RMOTORS</h1> <br />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Tempore dignissimos fugit temporibus quam vel quae in optio corrupti,
                  sed voluptate! Ducimus, iste? Harum, mollitia expedita. Deleniti optio voluptatum quisquam quia!
                  </p>
                  <br />

                  <div className="footicon">
                  <i class="fa-brands fa-instagram fa-2xl"></i>
                  <i class="fa-brands fa-whatsapp fa-2xl"></i>
                  <i class="fa-brands fa-facebook fa-2xl"></i>
                  </div>
                  
                  <div className="mainiconfoot">
                  <div className="iconfooter">
                  <i class="fa-solid fa-location-dot"></i>
                  <p>Herwade Colony Behind Shahu Garden Jaysingpur,Kolhapur,Maharashtra-416101</p>
                  </div>
                  <div className="iconfooter">
                  <i class="fa-solid fa-square-phone"></i>
                  <p>7666138655</p>
                  </div>
                  <div className="iconfooter">
                  <i class="fa-solid fa-envelope "></i>
                  <p>rushikeshmadake3393@gmail.com</p>
                  </div>
                  </div>

                   
                  
         </div>

         <div className="serviceslink">
                   <h3>services</h3>
                   <ul>
                    <li><a href="">Paint</a></li>
                    <li><a href="">oil change</a></li>
                    <li><a href="">Break</a></li>
                    <li><a href="">Suspension</a></li>
                   </ul>

                   </div>


         <div className="footsLink">
           <h3>Links</h3>
               <div className="footerLinks">
                    <br/>
                     <NavLink to="/" className="nav-link text-white"> Home</NavLink><br/>
                     <NavLink to="/about" className="nav-link text-white">About</NavLink><br/>
                     <NavLink to="/services" className="nav-link text-white">Services</NavLink><br/>
                     <NavLink to="/contact" className="nav-link text-white">Contact</NavLink>
                </div>

          </div>

          

         </div>
         <div className="footend">
         <h6>This Website is maintain by &copy;rushikesh</h6>
         </div>
    </>);
}
export default Footer;