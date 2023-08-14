import { useState } from 'react';
import '../styles/bookshelf.css';
import Book from './Book';

export default function Bookshelf( { myLibrary, setMyLibrary } ) {
    const EmptyLib = () => {
        if (myLibrary.length != 0)
            return null;
        return (
            <p>No book added to the library</p>
        )
    }
    return (
        <div id="bookshelf">
            <EmptyLib />
            {myLibrary.map((book, index) => (
                <Book book={ book } index={ index } myLibrary={ myLibrary } setMyLibrary={ setMyLibrary } key={ book.id }/>
            ))}
		</div>
    )
}