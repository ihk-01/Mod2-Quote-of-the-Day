//import React, { Component } from 'react';
import {useState, useEffect} from "react";
import './App.css';
//import components

import Results from "./components/Results";
import Search from "./components/Search";
import Random from "./components/Random";


export default function App() {
//state to hold quote data
  const [quote, setQuote] = useState(null);

//state to hold random quote data
  const [randomQuote, setRandomQuote] = useState([]);

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
    

//function to get the random quotes

    const getRandomQuote = async () => {

//make fetch request and store the random response

    const response = await fetch(
      `https://api.quotable.io/random`
    );

//parse JSON response for random quote
    const dataRandom = await response.json();

//set random Quote data in random Quote state
      setRandomQuote(dataRandom);
      console.log(randomQuote)
    }
//make the function that stores the random data run every time the page loads
  useEffect(() => {
    getRandomQuote('');
  }, []);
  

  return (
    <div className="App">
      <header>
      <Random random={randomQuote}/>
      </header>
      <Search quotesearch={
        getQuote
//          Component
          } />
      <Results 
//      quote={ this.state.quote }
      quote={quote} 
      />
  
      
    </div>
  );
}





