import React from 'react';
import '../css/Modal.css';
function Modal({ modalcontent, found }) {
	return (
		<>
			<div className={found ? 'text-info' : 'text-danger'}>
				{modalcontent}
			</div>
		</>
	);
}

export default Modal;
