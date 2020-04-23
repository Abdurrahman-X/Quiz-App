import React, { useState } from "react"
import { navigate } from "gatsby"
import Js from "../images/javascript.png"
import Php from "../images/php.png"
import Python from "../images/python.png"
import JavaScript from "../pages/JavaScript"
import { CardStyle } from "./Style/HomeStyle"
const Cards = () => {
  const [Card] = useState([
    {
      title: "JavaScript",
      logo: Js,
      background: true,
    },
    {
      title: "Php",
      logo: Php,
      background: false,
    },
    {
      title: "Python",
      logo: Python,
      background: true,
    },
  ])
  return (
    <div
      style={{
        margin: "auto",
      }}
    >
      {Card.map((card, index) => (
        <CardStyle
          key={index}
          true={card.background}
          onClick={() => navigate(`/${card.title}`)}
        >
          <h1> {card.title} </h1>
          <h5> This quiz contains 15 questions about {card.title} </h5>
          <img
            src={card.logo}
            alt={card.title}
            style={{
              width: "100px",
            }}
          />
        </CardStyle>
      ))}
    </div>
  )
}

export default Cards
