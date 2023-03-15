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

    const onInput = (e) => setValue(e.target.value);
    const [value, setValue] = useState("");

//the component is returning JSX    
    return (
     <div>   
        <form onSubmit={handleSubmit}>
            <input 
            type="text"
            placeholder="Search for a quote: text, author, tags" 
            class="no-outline"
            name="searchterm"
            onChange={handleChange}
            value={props.formData.searchterm} onInput={onInput}/>
            
            <button disabled={!props.formData.searchterm}>Submit</button>
         </form>
    </div>
    );
};