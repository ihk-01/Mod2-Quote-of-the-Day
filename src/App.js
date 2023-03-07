import {useState, useEffect} from "react";
import logo from "./logo.svg";
import './App.css';
import Random from "./components/Random";
import Results from "./components/Results";
import Search from "./components/Search";
import Selection from "./components/Selection";

export default function App() {

  const [quote, setQuote] = useState(null);

  const getQuote = async (searchTerm) => {
    const response = await fetch(
      'https://api.quotable.io/search/quotes'
    );
  }
  const data = await response.json();
  setQuote(data);
};

  return (
    <div className="App">
    <h1>Quote of the Day</h1>
    <Random />
    <Results />
    <Search />
    <Selection />
    </div>
  );
}


