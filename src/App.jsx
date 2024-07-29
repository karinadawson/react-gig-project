import React from "react";
import "./App.css";
import Gig from "./components/Gig";
import Button from "./components/Button"
import "./components/Button.css"
import Catfish from "./assets/Catfish.png"
import KOL from "./assets/KOL.webp"
import AlabamaShakes from "./assets/AlabamaShakes.jpeg"
import { useState, useEffect } from "react";
import Counter from "./components/Counter";
import ClickListener from "./components/ClickListener";
import InputLogger from "./components/InputLogger";
import Die from "./components/Die";
import Form from "./components/Form";


function App() {
  const [gigsData, setGigsData] = useState([]);
  const [favorites, setFavorites] = useState({});

  useEffect(() => {
    fetch("https://makers-gig-backend.onrender.com/events")
      .then(response => response.json())
      .then(data => {
        setGigsData(data);
        const initialFavorites = data.reduce((acc, gig) => {
          acc[gig.id] = false;
          return acc;
        }, {});
        setFavorites(initialFavorites);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, []);
  
    const toggleFavorite = (gigId) => {
      setFavorites((prevSetting) => ({
        ...prevSetting,
        [gigId]: !prevSetting[gigId]
      }));
      console.log("Clicked!")
    };

    const favoritedGigs = gigsData.filter((gig) => favorites[gig.id]);
    const nonFavoritedGigs = gigsData.filter((gig) => !favorites[gig.id]);


    return (
      <div className="container">
        <div className="form-container">
          <Form />
        </div>
  
        {favoritedGigs.map((gig) => (
          <div key={gig.id} className="gig-container">
            <Gig
              heading={gig.heading}
              description={gig.description}
              dateAndTime={gig.dateAndTime}
              location={gig.location}
              image={gig.image}
              isFavorite={favorites[gig.id]}
              toggleFavorite={() => toggleFavorite(gig.id)}
            />
            <Button label="Get Tickets Here!" />
          </div>
        ))}
  
        {nonFavoritedGigs.map((gig) => (
          <div key={gig.id} className="gig-container">
            <Gig
              heading={gig.heading}
              description={gig.description}
              dateAndTime={gig.dateAndTime}
              location={gig.location}
              image={gig.image}
              isFavorite={favorites[gig.id]}
              toggleFavorite={() => toggleFavorite(gig.id)}
            />
            <Button label="Get Tickets Here!" />
          </div>
        ))}
  
        <div className="widget-container">
          <Counter />
        </div>
  
        <div className="widget-container">
          <ClickListener />
        </div>
  
        <div className="widget-container">
          <InputLogger />
        </div>
  
        <div className="widget-container">
          <Die />
        </div>
      </div>
    );
  }




// function App() {

//   const gigsData = [
//     {
//       id: "Catfish",
//       heading: "Catfish and the Bottlemen",
//       description: "Join CATB on their next tour of the UK!",
//       dateAndTime: "7pm on 12/08/24",
//       location: "Alexandra Palace - Doors open 6pm",
//       image: Catfish,
//     },
//     {
//       id: "KOL",
//       heading: "Kings of Leon",
//       description: "Back for another headline at BST!",
//       dateAndTime: "8pm on 14/08/24",
//       location: "Hyde Park - Entry from 3pm",
//       image: KOL,
//     },
//     {
//       id: "AlabamaShakes",
//       heading: "Alabama Shakes",
//       description: "Grammy-winning soul and blues rock band from Limestone County",
//       dateAndTime: "6pm on 4/09/24",
//       location: "The O2 (Greenwich) - Entry from 5pm",
//       image: AlabamaShakes,
//     },
//   ];
  
//     const [favorites, setFavorites] = useState({
//       Catfish: false,
//       KOL: false,
//       AlabamaShakes: false
//     });
  
//     const toggleFavorite = (gig) => {
//       setFavorites((prevSetting) => ({
//         ...prevSetting,
//         [gig]: !prevSetting[gig]
//       }));
//       console.log("Clicked!")
//     };

//     const favoritedGigs = gigsData.filter((gig) => favorites[gig.id]);
//     const nonFavoritedGigs = gigsData.filter((gig) => !favorites[gig.id]);


//     return (
//       <div className="container">
//         <div className="form-container">
//           <Form />
//         </div>
  
//         {favoritedGigs.map((gig) => (
//           <div key={gig.id} className="gig-container">
//             <Gig
//               heading={gig.heading}
//               description={gig.description}
//               dateAndTime={gig.dateAndTime}
//               location={gig.location}
//               image={gig.image}
//               isFavorite={favorites[gig.id]}
//               toggleFavorite={() => toggleFavorite(gig.id)}
//             />
//             <Button label="Get Tickets Here!" />
//           </div>
//         ))}
  
//         {nonFavoritedGigs.map((gig) => (
//           <div key={gig.id} className="gig-container">
//             <Gig
//               heading={gig.heading}
//               description={gig.description}
//               dateAndTime={gig.dateAndTime}
//               location={gig.location}
//               image={gig.image}
//               isFavorite={favorites[gig.id]}
//               toggleFavorite={() => toggleFavorite(gig.id)}
//             />
//             <Button label="Get Tickets Here!" />
//           </div>
//         ))}
  
//         <div className="widget-container">
//           <Counter />
//         </div>
  
//         <div className="widget-container">
//           <ClickListener />
//         </div>
  
//         <div className="widget-container">
//           <InputLogger />
//         </div>
  
//         <div className="widget-container">
//           <Die />
//         </div>
//       </div>
//     );
//   }
  

export default App;
