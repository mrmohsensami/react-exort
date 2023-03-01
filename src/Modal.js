import { useEffect } from "react";

function Modal({ modalContent, closeModal }) {
    useEffect(() => {
        setTimeout(() => {
            closeModal();
        }, 3000);
    });
    return <div className="text-center modal">{modalContent}</div>;
}

export default Modal;
