import {useState, useEffect} from "react";
import './App.css';
//import components
import Random from "./components/Random";
import Results from "./components/Results";
import Search from "./components/Search";
import Selection from "./components/Selection";

export default function App() {
//state to hold quote data
  const [quote, setQuote] = useState(null);

//function to get the quotes 
  const getQuote = async (searchterm) => {

//make fetch request and store the response    
  
    const response = await fetch(
      `https://api.quotable.io/search/quotes?query=${searchterm}`
    );
//parse JSON response 
  const data = await response.json();
console.log(data)
//set Quote data in Quote state
  setQuote(data);
    }
    

useEffect(() => {
  getQuote("happiness");
}, []);


  return (
    <div className="App">
      <h1>Quote of the Day</h1>
      <Random />
      <Search quotesearch={getQuote}/>
      <Results quote={quote}/>
      <Selection />
    </div>
  );
}



