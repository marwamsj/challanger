import {Switch, Route} from 'react-router-dom';
import React,{ useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Header from './Component/Header/Header';
import Drinklist from './Component/Drinklist/Drinklist';
import Detail from './Component/Detail/Detail';
import Erreur from './Component/Erreur/Erreur';
import About from './Component/About/About';
import Footer from './Component/Footer/Footer'

function App() {
  const [drinks, setDrinks] = useState([])
  const [loadDrinks, setLoadDrinks] = useState(true)
  const [search, setSearch] = useState("margarita");
  const getDrinks = async()=>{
    try {
      const res = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`);
      setDrinks(res.data.drinks)
      setLoadDrinks(false)
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getDrinks();
  }, [search])
   
  return (
    <div className="App">
      <Header />
      
      <br/>
      <Switch>
        <Route  exact
          path="/" 
          render={() => <Drinklist drinks={drinks} loadDrinks={loadDrinks}  setSearch={setSearch}  />}/>
           <Route  path="/About"  component={About}/>
          <Route  path="/Drinkslist/:id"  component={Detail}/>
          <Route path="*"  component={Erreur}/>
      </Switch>
      <a name="PageBottom"><Footer/></a>
      
      </div>
    
  );
}

export default App;
