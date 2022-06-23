import {useEffect, useState} from "react";
import './App.css';
import SearchIcon from'./search.svg'; 
import CarCard from "./CarCard";
const API_URL = 'http://www.omdbapi.com?apikey=2b803e89';


const car1 = {
    
       
            "Title": "Audi 'The Debriefing'",
            "Year": "2019",
            "imdbID": "tt10308402",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMjAyNjU5MDQyM15BMl5BanBnXkFtZTgwOTAxMTkwODM@._V1_SX300.jpg"
        
    
    }




const App = () => {
const [cars, setCars] = useState([]);
const [searchterm, setSearchTerm] = useState('');
    const searchCars = async (title) =>
    {
  const response = await fetch(`${API_URL}&s=${title}`)
  const data = await response.json();
   
   setCars(data.Search);

    }
    useEffect(() =>
    {
    searchCars('audi');
    }, []);


    return(
        <div className="app">
            <h1>Kava Corp Movies</h1>
<div className="search">
    <input placeholder="Search for Movies and Songs" value={searchterm} onChange={(e) => setSearchTerm(e.target.value)}></input>
    <img src={SearchIcon} alt="search" onClick={() => searchCars(searchterm)}></img>
</div>

{

cars?.length > 0
? (
<div className="container">
{cars.map((cars) => 
<CarCard cars={cars}/>

)}
</div>
    ) : (
        <div className="empty">
        <h2>your search is not available right now!</h2>
        <h3>Try again later!</h3>
        </div>
    )
    
}





        </div>
    );
}

export default App;