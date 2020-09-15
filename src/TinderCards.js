import { SwipeableDrawer } from "@material-ui/core";
import React, { useState } from "react";
import "./TinderCards.css";
function TinderCards() {
  const [people, setPeople] = useState([
    {
      name: "Elon Musk",
      url:
        "https://static.theceomagazine.net/wp-content/uploads/2018/10/15093202/elon-musk-1100x733.jpg",
    },
  ]);
  const swiped = (direction, nameToDelete) => {
    console.log("removing" + nameToDelete);
  };
  const outOfFrame = (name) => {
    console.log(name + " Left the screen!");
  };
  return (
    <div className="tinderCards">
      <div className="tinderCards__cardContainer">
        {people.map((person) => (
          <TinderCards
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(dir, person.name)}
            onCardLeftScreen={() => outOfFrame(person.name)}
          >
            <div
              style={{ backgroundImage: `url(${person.url})` }}
              className="card"
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCards>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;
