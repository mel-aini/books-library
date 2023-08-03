
import '../styles/modal.css'

export default function Modal() {
    return (
        <div id="modal">
            <div id="form-sec">
				<div className="modal-header">
					<span>Already exist</span>
					<div id="close">
						<i className="fa-solid fa-xmark"></i>
						<span>close</span>
					</div>
				</div>
				<form action="POST">
					<input type="text" placeholder="title" />
					<input type="text" placeholder="author" />
					<input type="number" placeholder="pages number" />
					<button type="submit">Add Book</button>
				</form>
			</div>
			<div className="overlay">
            </div>
        </div>
    )
}