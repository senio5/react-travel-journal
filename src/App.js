import React from "react";
import Card from "./components/Card"
import Navbar from "./components/Navbar"
import data from "./data";


export default function App(){
  const cardElements = data.map(function(card){
    return(
      <Card 
      key={card.id}
      card={card}
      />
    )
  })
  //have to be in the order you want it to appear on the page
  return(
    <div>
      <Navbar />
      <section className="cards-flexbox">
        {cardElements}
      </section>
    </div>
  )
}
