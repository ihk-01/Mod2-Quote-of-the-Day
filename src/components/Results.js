export default function Results ({ quote }) {

  const loaded = () => {
    
    return (
    <>
        <h1>{quote.content}</h1>
        <h2>{quote.author}</h2>
        <h3>{quote.tags}</h3>

    </>
    );

    
};

const loading = () => {
    return <h1>No Quotes to Display. Try different search criteria.</h1>;

};

return quote ? loaded() : loading();
};

