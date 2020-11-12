import React from 'react';
import { Spinner } from "react-bootstrap";
import Description from '../Description/Description';
import Drink from '../Drink/Drink';
import './Drinklist.css'

function Drinklist({drinks,loadDrinks,setSearch}) {
    
    return (
        <div className="frm">
            <Description setSearch={setSearch}/>
        <div className="drink_list">
        
            {loadDrinks?(
                <Spinner animation="border" variant="warning" />):
                (drinks  ===  null || drinks.length===0 ) ?
                <h1>Pardon! il n'y a pas de boisson avec ce nom.</h1>:
            (drinks.map((el) => < Drink key={el.idDrink}  drink={el} />))}
           
        </div>
        </div>
    )
}

export default Drinklist
