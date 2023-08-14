
import '../styles/modal.css';
import { useRef } from 'react';

export default function Modal({ modalClass, setModalClass, myLibrary, setMyLibrary }) {
	let titleRef = useRef();
	let authorRef = useRef();
	let pagesRef = useRef();
	let existRef = useRef();

	const closeModal = () => {
		setModalClass(null);
		titleRef.current.value = "";
		authorRef.current.value = "";
		pagesRef.current.value = "";
		titleRef.current.classList.remove("invalid");
		authorRef.current.classList.remove("invalid");
		pagesRef.current.classList.remove("invalid");
		existRef.current.style.opacity = 0;
	};

	const updateInputStyle = () => {
		titleRef.current.value ? titleRef.current.classList.remove("invalid") : titleRef.current.classList.add("invalid");
		authorRef.current.value ? authorRef.current.classList.remove("invalid") : authorRef.current.classList.add("invalid");
		pagesRef.current.value ? pagesRef.current.classList.remove("invalid") : pagesRef.current.classList.add("invalid");
	}

	function isExist(library) {
		let is_exist = 0;
	
		if (!library)
			return (0);
		existRef.current.style.opacity = 0;
		library.forEach((elem) => {
			if (elem.title.toUpperCase() == titleRef.current.value.toUpperCase()) {
				existRef.current.style.opacity = 1;
				titleRef.current.classList.add("invalid");
				is_exist = 1;
			}
		})
		return (is_exist);
	}

	const isEmpty = () => {
		return !titleRef.current.value || !authorRef.current.value || !pagesRef.current.value;
	}

	const getInfo = (e) => {
		e.preventDefault();
		let updatedLib = myLibrary;
		updateInputStyle();
		if (isExist(myLibrary) || isEmpty())
			return ;
		let newBook = {
			title : titleRef.current.value, 
			author : authorRef.current.value,
			pages : pagesRef.current.value,
			state : "unread",
			id : myLibrary.length + 1
		};
		updatedLib.push(newBook);
		localStorage.setItem("keyLib", JSON.stringify(updatedLib));
		setMyLibrary = updatedLib;
		closeModal();
	}
	

    return (
			<div id="modal" className={ modalClass }>
            <div id="form-sec">
				<div className="modal-header">
					<span ref={ existRef }>Already exist</span>
					<div id="close" onClick={closeModal}>
						<i className="fa-solid fa-xmark"></i>
						<span>close</span>
					</div>
				</div>
				<form action="POST" onSubmit={ getInfo }>
					<input ref={ titleRef } type="text" placeholder="title" />
					<input ref={ authorRef } type="text" placeholder="author" />
					<input ref={ pagesRef } type="number" placeholder="pages number" />
					<button type="submit">Add Book</button>
				</form>
			</div>
			<div className="overlay">
            </div>
        </div>
    )
}