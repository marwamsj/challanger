import React,{useState, useEffect} from 'react';
import axios from 'axios';
import  './Detail.css';
import { Spinner } from "react-bootstrap";

function Detail(props) {
    
    const [detail, setDetail] = useState([]);
    const [loadDetail, setLoadDetail] = useState(true);
    const { id } = props.match.params;
    const getDetail = () => {
        axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
          .then((res) => {
            setDetail(res.data.drinks);
            setLoadDetail(false);
          })
          .catch((err) => console.log(err));
      };
      useEffect(() => {
        getDetail();
      }, []);
      
    return (
        <div className="detail-frm">
            {loadDetail?(
                <Spinner animation="border" variant="warning" style={{margin:"50%"}}/>):
             (detail.map((el) =>(<div className="detail_blc" key={el.idDrink}> 
             <img className="detail_img" src={el.strDrinkThumb} alt={el.idDrink}/>
             <div className="detail_right_blc">
             <h3>{el.strAlcoholic}</h3>
             <h1>{el.strDrink}</h1>
             <h6>{el.strCategory}</h6> 
              
             <h2>Ingredients List</h2>
             <table className="detail_table">
                 <thead>
                 <tr>
                     <th>Ingredients</th>
                     <th>Measure</th>      
                 </tr>
                 </thead>

                 <tbody>
                 <tr>
                     <th>{el.strIngredient1}</th>
                     <th>{el.strMeasure1}</th>      
                 </tr>
                 <tr>
                     <th>{el.strIngredient2}</th>
                     <th>{el.strMeasure2}</th>      
                 </tr>
                 <tr>
                     <th>{el.strIngredient3}</th>
                     <th>{el.strMeasure3}</th>      
                 </tr>
                 <tr>
                     <th>{el.strIngredient4}</th>
                     <th>{el.strMeasure4}</th>      
                 </tr>
                 <tr>
                     <th>{el.strIngredient5}</th>
                     <th>{el.strMeasure5}</th>      
                 </tr>
                 <tr>
                     <th>{el.strIngredient6}</th>
                     <th>{el.strMeasure6}</th>      
                 </tr>
                 <tr>
                     <th>{el.strIngredient7}</th>
                     <th>{el.strMeasure7}</th>      
                 </tr>
                 <tr>
                     <th>{el.strIngredient8}</th>
                     <th>{el.strMeasure8}</th>      
                 </tr>
                 <tr>
                     <th>{el.strIngredient9}</th>
                     <th>{el.strMeasure9}</th>      
                 </tr>
                 <tr>
                     <th>{el.strIngredient10}</th>
                     <th>{el.strMeasure10}</th>      
                 </tr>
                 <tr>
                     <th>{el.strIngredient11}</th>
                     <th>{el.strMeasure11}</th>      
                 </tr>
                 <tr>
                     <th>{el.strIngredient12}</th>
                     <th>{el.strMeasure12}</th>      
                 </tr>
                 <tr>
                     <th>{el.strIngredient13}</th>
                     <th>{el.strMeasure13}</th>      
                 </tr>
                 <tr>
                     <th>{el.strIngredient14}</th>
                     <th>{el.strMeasure14}</th>      
                 </tr>
                 <tr>
                     <th>{el.strIngredient15}</th>
                     <th>{el.strMeasure15}</th>      
                 </tr>
                 </tbody>
             </table>
             </div>             
             </div>)))} 
        </div>
    )
}

export default Detail
