export default function Random({ random }) {

    return (


        <body>

            <h2>Quotes to Live By</h2>
            <table className="randomDisplay">
                <tbody>
                    <tr>{random?.content}</tr>
                    <tr>{random?.author}</tr>
                </tbody>
            </table>
        </body>


    )


}
