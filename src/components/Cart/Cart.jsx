import Modal from "../Modal/Modal";
import "./Cart.css";
function Cart({cartItemList,showCart,closeCart}){
    console.log("cart is rendered");
    // cartItemList = ["Dinesh"]
    return (
        <Modal showModal={showCart} closeModal={closeCart}>
        <div className="cart-container">
            <h2>Cart</h2>
            {
            cartItemList.length>0 ?
            (<>
            <div className="cart-items-list">
                {cartItemList.map((item)=>(
                    <div className="cart-item" key={item.id}>
                        <div className="cart-item-details">
                            <img src={`/assets/${item.image}`} alt={`${item.name}`} />
                            <p>{item.name}</p>
                        </div>
                        <div className="cart-item-controls">
                            <p>qty:{`${item.quantity}`}</p>
                            <button className="quantity-btn">+</button>
                            <button className="quantity-btn">-</button>
                        </div>
                    </div>
                ))}
                
            </div>
            <div className="cart-footer">
                <button className="btn-close" onClick={closeCart}>Close</button>
                <button className="btn-checkout" onClick={closeCart}>Checkout</button>
            </div>
            </>) : <h2>Cart is empty</h2>
            }
        </div>
        </Modal>
    )
}
export default Cart;