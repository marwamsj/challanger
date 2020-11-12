import React from 'react';
import  './Description.css'

function Description({setSearch}) {
    const handleChange = (e) => {
        e.preventDefault();
        e.target.value === ""? setSearch("margarita"): setSearch(e.target.value); }
    return (
        <div className="background">
            <div className="titile">
            <h1>DECOUVREZ NOS COCKTAILS</h1>
            <p>Des création délicatement équilibrées avec des ingrédiants sélectionnés avec soin.</p>
            <p>Pour vos cocktails ou juste pour étancher votre soif.</p>
            <form>
                <input className="search" type="text" placeholder="Search"
                 onChange={handleChange}/>
                
            </form>
            </div>
           
            

        </div>
    )
}

export default Description
