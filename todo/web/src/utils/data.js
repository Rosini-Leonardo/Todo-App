import React from "react";
import { SkeletonCard } from "../components";

const data_card = [
    {
      id:1,
      title:'Prototyping in Figma',
      subtitle:'Design of UI and representation of a roadmap',
      body:'Before starting to write source code I build a roadmap and create the user interface (UI).',
    },
    {
      id:2,
      title:'Front-end',
      subtitle:'Set up the necessary tools and apply the rules',
      body:'Following the procedures described, I build the front-end side using various technologies such as React, bootstrap,...',
    },
    {
      id:3,
      title:'Back-end',
      subtitle:'Creating a new roadmap to merge front-end to back-end.',
      body:'I create the back-end server and the superuser, using Django and SQLite. Finally I combine everything trying to keep a clean and intuitive code.',
    }
]

const Card = () =>{
    return(
        <React.Fragment>
        {
            data_card.map((el)=>{
                    return(
                    <SkeletonCard
                    {...el}
                    key={el.id}
                    />
                )})
            }
        </React.Fragment>
    )
};

export{
    Card 
};