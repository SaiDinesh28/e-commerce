import Header from "./components/Header/Header";
import products from "./data/products.json";
import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";
import { useEffect,useCallback, useState } from "react";

function App() {
  const [cartItemList,setCartItemList] = useState([]);
  const [showCart,setShowCart] = useState(false);
  const openCart = ()=>setShowCart(true);
  const closeCart = ()=>setShowCart(false);
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
useEffect(() => {
    console.log("Cart has updated:", cartItemList);
  }, [cartItemList]);
  return <div>
    <Header 
    openCart={openCart}
    />
    <Products
    current_products={products}
    addToCart={addToCart}
    />
    <Cart
    cartItemList={cartItemList}
    showCart={showCart}
    closeCart={closeCart}
    />
  </div>
}

export default App;
