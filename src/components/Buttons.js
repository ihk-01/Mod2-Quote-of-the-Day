

export default function Buttons({ nextPage, prevPage }) {
    n
    return (
        <div className="prevnextContainer">
            <div className="prevnext">
                <button type="button" onClick={prevPage}>Previous</button>
                <button type="button" onClick={nextPage}>Next</button>

            </div>
        </div>
    )

}