import "./Header.css";
function Header({openCart,openAddProduct}){
    return (<header className="site-header">
        <div className="header-title">
            <h3>E-commerce Store</h3>
        </div>
        <div className="header-actions">
            <button className="btn btn-add" onClick={openAddProduct}>Add Product</button>
            <button className="btn btn-cart" onClick={openCart}>Cart</button>
        </div>
        </header>);
}
export default Header;