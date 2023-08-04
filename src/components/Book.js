
export default function Book({ book }) {
    return (
        <div className="book">
            <h1 className="title">{ book.title }</h1>
            <hr />
            <h3 className="author"><span>author : </span>{ book.author }</h3>
            <div className="info">
                <p><span>pages : </span>{ book.pages }</p>
                <p>{ book.state }</p>
            </div>
            <div className="tools">
                <div className="read-state">
                    <i className="fa-solid fa-book-open-reader"></i>
                    <span>read</span>
                </div>
                <i className="del-button fa-solid fa-trash"></i>
            </div>
        </div>
    )
}