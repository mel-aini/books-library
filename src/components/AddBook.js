import '../styles/section.css'

export default function AddBook({ setModalClass }) {
    const openModal = () => {
        // modal.classList.add("active");
        // console.log(modalClass);
        setModalClass('active');
    };

    return (
        <div id="add-book">
            <span>My bookshelf</span>
            <button onClick={openModal}>Add book</button>
        </div>
    )
}