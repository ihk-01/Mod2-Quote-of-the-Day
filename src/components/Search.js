import {useState, useEffect} from "react";

export default function Search (props) {
    
    const [formData, setFormData] = useState({
        searchterm: "",
    })
//updates formData when typing into form
    const handleChange = (event) => {
      
        event.preventDefault();
    //use the event object to detect key and value to update
        setFormData ({...formData, [event.target.name]: event.target.value});
    }

    const handleSubmit = (event) => {
    //prevent page from refreshing on form submission  
        event.preventDefault();
    //pass the search term to quotesearch prop,   
        props.quotesearch(formData.searchterm);
    };

//the component is returning JSX    
    return (
    <div>
    
        <form onSubmit={handleSubmit}>
            <input 
            type="text" 
            name="searchterm"
            onChange={handleChange}
            value={formData.searchterm}
            />
            <input 
            type="submit" 
            value="submit"/>
         </form>
    </div>
    );
};