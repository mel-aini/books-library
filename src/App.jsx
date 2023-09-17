import { useEffect, useState } from "react";
import Header from "./components/Header";
import Modal from "./components/Modal";
import Bookshelf from "./components/Bookshelf";
import AddBook from "./components/AddBook";
import Home from "./components/Home";

export default function App() {
  let [modalClass, setModalClass] = useState(null);
  let [myLibrary, setMyLibrary] = useState(
    JSON.parse(localStorage.getItem("keyLib")) || []
  );

  useEffect(() => {
    for (let i = 0; i < myLibrary.length; i++) {
      myLibrary[i].id = i + 1;
    }
  });

  return (
    <>
      {/* <Header /> */}
      <Home />
      <section className="bookshelf-area">
        <AddBook setModalClass={setModalClass} />
        <hr />
        <Bookshelf myLibrary={myLibrary} setMyLibrary={setMyLibrary} />
        <Modal
          modalClass={modalClass}
          setModalClass={setModalClass}
          myLibrary={myLibrary}
          setMyLibrary={setMyLibrary}
        />
      </section>
    </>
  );
}
