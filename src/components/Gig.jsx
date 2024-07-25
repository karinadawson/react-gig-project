import React from "react";
import "./Gig.css"
import "@fortawesome/fontawesome-free/css/all.min.css";


const Gig = (props) => {
  return (
      <>
      <h3 className="gig-heading">{props.heading}
        <button className={`gig-favorite-button ${props.isFavorite ? "favorited" : ""}`}
        onClick={props.toggleFavorite}>
        <i className="fas fa-heart"></i>
      </button>
      </h3>

      <img className="gig-image" src={props.image} alt="Catfish and the Bottlemen"></img>
      <p className="gig-description">{props.description}</p>
      <p className="gig-date-time">{props.dateAndTime}</p>
      <p className="gig-location">{props.location}</p>
      
      
      </>
    );
};

export default Gig;

