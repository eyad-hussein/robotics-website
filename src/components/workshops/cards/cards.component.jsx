import "./cards.styles.scss";
import Card from "./card/card.component";
import React, { useEffect, useState } from "react";
import moment from "moment";
import { WorkshopsRepository } from "../../../services/api.jsx";
const content =
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit, similique! Ipsum fugit repudiandae dignissimos aspernatur architecto nihil, quibusdam expedita culpa est illum excepturi autem ullam rerum quis odio et. Est.";

const Cards = ({ activeWorkshops }) => {
  return (
    <section className='cards-section'>
      {/* {activeWorkshops.map(function (activeWorkshop) {
        return <Card activeWorkshop={activeWorkshop} />;
      })} */}
    </section>
  );
};

export default Cards;
