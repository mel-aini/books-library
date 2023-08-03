
export default function Book() {
    let title = 'Atomic habits';
    let author = 'James clear';
    let pages = '120';
    let state = 'unred';

    return (
        <div className="book">
            <h1 className="title">{ title }</h1>
            <hr />
            <h3 className="author"><span>author : </span>{ author }</h3>
            <div className="info">
                <p><span>pages : </span>{ pages }</p>
                <p>{ state }</p>
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