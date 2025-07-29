import "./Modal.css"
function handleClick(event){
    event.stopPropagation();
}
function Modal({showModal,closeModal,children}){
    if(!showModal) return null; 
    return (
    <div className="modal-backdrop" id="myModal" onClick={closeModal}>
    <div className="modal-content" onClick={handleClick}>
        {children}
    </div>
    </div>);
}

export default Modal;