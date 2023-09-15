import '../styles/section.css'
import { GiBookshelf } from "react-icons/gi";

export default function AddBook({ setModalClass }) {
    const openModal = () => {
        setModalClass('active');
    };

    return (
        <div id="add-book">
            <div>
                <GiBookshelf />
                <span>My bookshelf</span>
            </div>
            <button onClick={ openModal }>Add book</button>
        </div>
    )
}