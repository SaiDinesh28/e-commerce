import "./Header.css";
function Header({openCart}){
    return (<header className="site-header">
        <div className="header-title">
            <h3>E-commerce Store</h3>
        </div>
        <div className="header-actions">
            <button className="btn btn-add" >Add Product</button>
            <button className="btn btn-cart" onClick={openCart}>Cart</button>
        </div>
        </header>);
}
export default Header;