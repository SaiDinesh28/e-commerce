import "./Header.css";
function Header(){
    return (<header className="site-header">
        <div className="header-title">
            <h3>E-commerce Store</h3>
        </div>
        <div className="header-actions">
            <button className="btn btn-add">Add Product</button>
            <button className="btn btn-cart">Cart</button>
        </div>
        </header>);
}
export default Header;