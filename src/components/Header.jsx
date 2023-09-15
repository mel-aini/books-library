import '../styles/header.css'
import { GiBookCover } from "react-icons/gi";

export default function Header() {
    return (
        <header>
            {/* <i class="fa-solid fa-book"></i> */}
            <GiBookCover />
            <h1>Library</h1>
        </header>
    );
}