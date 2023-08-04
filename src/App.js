import { useRef, useState, useSyncExternalStore } from 'react';
import Header from './components/Header';
import Modal from './components/Modal';
import Bookshelf from './components/Bookshelf';
import AddBook from './components/AddBook';

export default function App() {
  let [modalClass, setModalClass] = useState(null);

  return (
    <>
      <Header />
      <section>
        <AddBook setModalClass={ setModalClass }/>
        <hr />
        <Bookshelf />
        <Modal modalClass={ modalClass } setModalClass={ setModalClass }/>
      </section>
    </>
  );
}
