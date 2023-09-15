import { useState } from "react";
import { FaTrash, FaBookOpen } from "react-icons/fa6";
import { BsThreeDots } from "react-icons/bs";
import { GiBlackBook } from "react-icons/gi";

export default function Book({ book, index, myLibrary, setMyLibrary }) {
    let [bookState, setBookState] = useState(book.state);
    book.state = bookState;
    const deleteBook = () => {
        let updatedLib = [];
        for (let i = 0; i < myLibrary.length; i++) {
            if (i == book.id - 1)
                continue ;
            updatedLib.push(myLibrary[i]);
        }
        localStorage.setItem("keyLib", JSON.stringify(updatedLib));
        setMyLibrary(updatedLib);
    }

    const makeBookState = () => {
        // retrieve the keyLib array from local storage, 
        // change the read state according to the object index and set it again.
        let old = JSON.parse(localStorage.getItem('keyLib')) || [];
        if (bookState == "unread") {
            setBookState('read'); // the setState method in react works asynchronously
            if (old[index]) old[index].state = 'read';
        }
        else {
            setBookState('unread');
            if (old[index]) old[index].state = 'unread';
        }
        localStorage.setItem("keyLib", JSON.stringify(old));
    }

    return (
        <div className="book">
            <h1 className="title"><GiBlackBook />{ book.title }</h1>
            <hr />
            <h3 className="author"><span>author : </span>{ book.author }</h3>
            <div className="info">
                <p><span>pages : </span>{ book.pages }</p>
                <p>{ bookState }</p>
            </div>
            <BsThreeDots className="dots"/>
            <div className="tools">
                <div className="sec read-state" onClick={ makeBookState }>
                    <FaBookOpen />
                    <span>read</span>
                </div>
                <div className="sec del-section" onClick={ deleteBook }>
                    <FaTrash className="del-button"/>
                    <span>delete</span>
                </div>
            </div>
        </div>
    )
}