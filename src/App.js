import { useState } from 'react';
import Header from './components/Header';
import Modal from './components/Modal';
import Bookshelf from './components/Bookshelf';

export default function App() {
  return (
    <>
      <Header />
      <section>
        <Bookshelf />
        <Modal />
      </section>
    </>
  );
}
