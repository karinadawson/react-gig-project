import React from "react";
import Catfish from "../assets/Catfish.jpg"
import "./Gig.css"
import Button from "./Button"
import "./Button.css"

const Gig = () => {
  return (
      <>
      <h3 className="gig-heading">Catfish and the Bottlemen</h3>
      <img src={Catfish} alt="Catfish and the Bottlemen" style={{ width: "300px", height: "auto" }}></img>
      <p className="gig-description">Join CATB on their next tour of the UK!</p>
      <p className="gig-date-time">7pm on 12/08/24</p>
      <p className="gig-location">Alexandra Pallace - Doors open 6pm</p>
      <Button label="Get Tickets Here!" />
      </>
    );
};

export default Gig;

