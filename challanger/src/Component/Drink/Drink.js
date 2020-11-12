import React from 'react'
import { Link } from 'react-router-dom'
import './Drink.css'

function Drink({drink}) {
    return (
        <div className="drink_card">
            <img src={drink.strDrinkThumb} alt={drink.strDrink}/>
            <p> {drink.strDrink}</p>
            <Link to={ `/Drinkslist/${drink.idDrink}`}>
            <button>En savoir plus</button>
            </Link>
        </div>
    )
}

export default Drink
