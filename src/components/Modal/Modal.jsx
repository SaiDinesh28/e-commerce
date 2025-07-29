import "./Modal.css"
function Modal({showModal,children}){
    if(!showModal) return null; 
    return (
    <div class="modal-backdrop" id="myModal">
    <div class="modal-content">
        {children}
    </div>
    </div>);
}

export default Modal;