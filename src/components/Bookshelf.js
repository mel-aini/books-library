import { useState } from 'react';
import '../styles/bookshelf.css';
import Book from './Book';

export default function Bookshelf() {
    let [myLibrary, setMyLibrary] = useState([
        {
            title: "Atomic",
            author: "Atomic",
            pages: "Atomic",
            state: "Atomic",
            id: 1
        }]);

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
            {myLibrary.map((book) => (
                <Book book={ book } key={ book.id }/>
            ))}
		</div>
    )
}