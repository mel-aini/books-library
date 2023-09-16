import { useEffect, useRef, useState } from "react";
import { FaTrash, FaBookOpen } from "react-icons/fa6";
import { BsThreeDots } from "react-icons/bs";
import { GiBlackBook } from "react-icons/gi";
import { BsThreeDotsVertical } from "react-icons/bs";

export default function Book({ book, index, myLibrary, setMyLibrary }) {
  const [bookState, setBookState] = useState(book.state);
  const [toolsOpen, setToolsOpen] = useState(false);
  const delButton = useRef(null);
  const readButton = useRef(null);

  book.state = bookState;
  const deleteBook = () => {
    let updatedLib = [];
    for (let i = 0; i < myLibrary.length; i++) {
      if (i == book.id - 1) continue;
      updatedLib.push(myLibrary[i]);
    }
    localStorage.setItem("keyLib", JSON.stringify(updatedLib));
    setMyLibrary(updatedLib);
  };

  const makeBookState = () => {
    // retrieve the keyLib array from local storage,
    // change the read state according to the object index and set it again.
    let old = JSON.parse(localStorage.getItem("keyLib")) || [];
    if (bookState === "unread") {
      setBookState("read"); // the setState method in react works asynchronously
      if (old[index]) old[index].state = "read";
    } else {
      setBookState("unread");
      if (old[index]) old[index].state = "unread";
    }
    localStorage.setItem("keyLib", JSON.stringify(old));
  };

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  const fadeOut = async (toggle) => {
    if (toolsOpen) {
      delButton.current.classList.add("fade-out");
      readButton.current.classList.add("fade-out");
      await sleep(300);
    }
    toggle ? setToolsOpen(!toolsOpen) : setToolsOpen(false);
  };

  return (
    <div className="book">
      <div className="up-area">
        <h1 className="title">
          <GiBlackBook />
          {book.title}
        </h1>
        <div
          className="tools-icons"
          onMouseEnter={() => setToolsOpen(true)}
          onMouseLeave={() => fadeOut(false)}
        >
          {toolsOpen && (
            <span
              ref={readButton}
              onClick={makeBookState}
              className="read-button"
            >
              <FaBookOpen />
            </span>
          )}
          {toolsOpen && (
            <span ref={delButton} onClick={deleteBook} className="del-button">
              <FaTrash />
            </span>
          )}
          <BsThreeDotsVertical onClick={() => fadeOut(true)} className="dots" />
        </div>
      </div>
      <hr />
      <h3 className="author">
        <span>author : </span>
        {book.author}
      </h3>
      <div className="info">
        <p>
          <span>pages : </span>
          {book.pages}
        </p>
        <p>{bookState}</p>
      </div>
      {/* {toolsOpen && (
        <div className="tools">
          <div className="sec read-state" onClick={makeBookState}>
            <FaBookOpen />
            <span>read</span>
          </div>
          <div className="sec del-section" onClick={deleteBook}>
            <FaTrash className="del-button" />
            <span>delete</span>
          </div>
        </div>
      )} */}
    </div>
  );
}
