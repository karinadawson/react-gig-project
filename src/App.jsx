import React from "react";
import "./App.css";
import Gig from "./components/Gig";
import Button from "./components/Button"
import "./components/Button.css"
import Catfish from "./assets/Catfish.jpg"
import KOL from "./assets/KOL.webp"
import { useState } from "react";
import Counter from "./components/Counter";
import ClickListener from "./components/ClickListener";
import InputLogger from "./components/InputLogger";




function App() {
  
    const [favorites, setFavorites] = useState({
      Catfish: false,
      KOL: false
    });
  
    const toggleFavorite = (gig) => {
      setFavorites((prevSetting) => ({
        ...prevSetting,
        [gig]: !prevSetting[gig]
      }));
      console.log("Clicked!")
    };


  return (
    <>
      <Gig 
      heading = "Catfish and the Bottlemen"
      description = "Join CATB on their next tour of the UK!"
      dateAndTime = "7pm on 12/08/24"
      location = "Alexandra Pallace - Doors open 6pm"
      image={Catfish}
      isFavorite={favorites.Catfish}
      toggleFavorite={() => toggleFavorite('Catfish')}
      />
      <Button label="Get Tickets Here!" />

    <Gig 
      heading = "Kings of Leon"
      description = "Back for another headline at BST!"
      dateAndTime = "8pm on 14/08/24"
      location = "Hyde Park - Entry from 3pm"
      image={KOL}
      isFavorite={favorites.KOL}
      toggleFavorite={() => toggleFavorite('KOL')}
      
      />
      <Button label="Get Tickets Here!" />
      <Counter/>

      <ClickListener/>
      <InputLogger/>
      </>
    
  );
}

export default App;
