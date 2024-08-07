import React, { useState } from 'react'

const Cars = ({bg}) => {
    const [cars, setcars] = useState([
        {brand: "Kia", model: "Picanto", color: "red"},
        {brand: "BMV", model: "2024", color: "black"},
        {brand: "Mazda", model: "3", color: "blue"},
    ])
  return (
    <div>
        <h4>Cars componenta:</h4>
        {cars.map(car =>
        <div style={{backgroundColor:bg}}>
            {car.brand}, &nbsp; {car.model},&nbsp; {car.color}</div>
     )}</div>
  )
}

export default Cars