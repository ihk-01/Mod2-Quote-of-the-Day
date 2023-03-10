//export default function Results ({ quote }) {

function Results ({ quote }) {  
  
    const loaded = () => {
    
    return (
      <>
      <table>
      <thead>
        <tr>
          <th>Content</th>
          <th>Author</th>
          <th>Tags</th>
        </tr>
      </thead>
      <tbody>
      { quote.results.map( (quote, index) => {
           return (
            <tr key={ index }>
              <td>{ quote.content }</td>
              <td>{ quote.author }</td>
              <td>{ quote.tags}</td>
            </tr>
          )
         })}
      </tbody>
    </table>
  );

</>

        )
};

const loading = () => {
    return <h1>No Quotes to Display. Try entering search criteria.</h1>;

};

return quote ? loaded() : loading();
};

export default Results;


