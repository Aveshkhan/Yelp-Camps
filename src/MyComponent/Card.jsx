import React from 'react'
import { NavLink } from 'react-router-dom'

const Card = (props) => {
  return (
    <div>
        <div className="card">
            <img src={props.cardImg} alt="" />
            <h5>{props.title}</h5>
            <p>{props.para}</p>
            <NavLink className="btn2" to="/Camp" >{props.btn}</NavLink>
        </div>
    </div>
  )
}

export default Card