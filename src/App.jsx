import Header from "./components/Header/Header";
import products from "./data/products.json";
import Products from "./components/Products/Products";
import Modal from "./components/Modal/Modal";
function App() {
  return <div>
    <Header />
    <Products
    current_products={products}
    />
    <Modal showModal={false}> <h1>This is Modal</h1>
    </Modal>
  </div>
}

export default App
