import Header from "./components/Header/Header";
import products from "./data/products.json";
import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";
import AddProduct from "./components/AddProduct/AddProduct";
import { useEffect,useCallback, useState } from "react";

function App() {
  const [cartItemList,setCartItemList] = useState([]);
  const [productsList,setProductsList]=useState(products);
  const [showCart,setShowCart] = useState(false);
  const [showAddProduct,setShowAddProduct]= useState(false);
  const openCart = ()=>setShowCart(true);
  const closeCart = ()=>setShowCart(false);
  const openAddProduct = ()=>setShowAddProduct(true);
  const closeAddProduct = ()=>setShowAddProduct(false);
  const increaseQuantity = (item) => {
    setCartItemList((prevList)=>
    prevList.map((currItem) => currItem.id===item.id?{...currItem,quantity:currItem.quantity+1}:currItem
    )
    )
  }
    const decreaseQuantity = (item) => {
    setCartItemList((prevList)=>
    prevList.map((currItem) => currItem.id===item.id?{...currItem,quantity:currItem.quantity-1}:currItem
    )
    )
    setCartItemList((prevList)=>
    prevList.filter((item)=>item.quantity>0)
    )
  }
  
  const addToCart= useCallback((currItem)=>{
    setCartItemList((cartItemList)=>
  { 
  const index = cartItemList.findIndex(item => item.id==currItem.id);
   if(index==-1){
        return [...cartItemList,{key:currItem.id,id:currItem.id,image:currItem.image,name:currItem.name,quantity:1}]
   }
   else{
      return cartItemList.map(item=>item.id===currItem.id?{...item,quantity:item.quantity+1}:item
      );
   }
  });
     
},[]);
const addToProductList = useCallback((newItemName) =>{
  setProductsList((oldList)=>[...oldList,{id:oldList.length+1,name:newItemName,image:"default_product.png"}]);
},[]);
useEffect(() => {
    console.log("Cart has updated:", cartItemList);
  }, [cartItemList]);
  return <div>
    <Header 
    openCart={openCart}
    openAddProduct={openAddProduct}
    />
    <Products
    current_products={productsList}
    addToCart={addToCart}
    />
    <Cart
    cartItemList={cartItemList}
    showCart={showCart}
    closeCart={closeCart}
    increaseQuantity={increaseQuantity}
    decreaseQuantity={decreaseQuantity}
    />
    <AddProduct
    showAddProduct={showAddProduct}
    closeAddProduct={closeAddProduct}
    addToProductList={addToProductList}
    />
  </div>
}

export default App;
