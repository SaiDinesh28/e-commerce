import Modal from "../Modal/Modal";
import "./AddProduct.css"
import { useRef } from "react";
function AddProduct({showAddProduct,closeAddProduct,addToProductList}){
    const inputRef = useRef("")
    function handleSubmit(event){
        event.preventDefault();
        // console.log(inputRef.current.value);
        addToProductList(inputRef.current.value);
        closeAddProduct();
    }
    return (
        <Modal showModal={showAddProduct} closeModal={closeAddProduct}>
           <form className="product-form" onSubmit={handleSubmit}>
                <h2>Add Product</h2>
                <input type="text" placeholder="Enter product name" required ref={inputRef} />
                <button type="submit">Add Product to List</button>
            </form>
        </Modal>
    )

}

export default AddProduct;