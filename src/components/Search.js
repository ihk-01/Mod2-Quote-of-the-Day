import {useState} from "react";

export default function Search (props) {
    

//updates formData when typing into form
    const handleChange = (event) => {
      
        event.preventDefault();
    //use the event object to detect key and value to update
        props.setFormData ({...props.formData, [event.target.name]: event.target.value});
    }

    const handleSubmit = (event) => {
    //prevent page from refreshing on form submission  
        event.preventDefault();
    //pass the search term to quotesearch prop  
        props.quoteSearch(props.formData.searchterm);
    };

//the component is returning JSX    
    return (
    <div>
    
        <form onSubmit={handleSubmit}>
            <input 
            type="text"
            placeholder="Search for a quote" 
            class="no-outline"
            name="searchterm"
            onChange={handleChange}
            value={props.formData.searchterm}
            />
            <input 
            type="submit" 
            value="Submit"/>
         </form>
    </div>
    );
};