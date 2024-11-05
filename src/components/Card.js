import React from 'react'
import './Card.css'
import more from './more.png'
import { Link } from 'react-router-dom'


const Card = (props) =>  {


    return (
      <div className="Card">
          <Link to={'edit/'+ props.id}><img className="moreButton" alt="edit button" src={more} /></Link>
          <img className='crewmate' alt='crewmate' src='./spaceship.png' />
          <h2 className="title">{"Name of Crewmate: "+ props.name}</h2>
          <h3 className="author">{"Speed of Crewmate: " + props.speed + " mph"}</h3>
          <h3 className="description">{"Color of Crewmate: "+props.color}</h3>
    
      </div>
  );
};

export default Card;