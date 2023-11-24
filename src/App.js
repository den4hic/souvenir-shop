import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Help from "./pages/Help";
import Contacts from "./pages/Contacts";
import Cart from "./pages/Cart";
import WishList from "./pages/WishList";
import {useEffect, useState} from "react";
import productsData from "./data/products.json";

function App() {
    const [wishlistItems, setWishlistItems] = useState([]);
    const [cartlistItems, setCartlistItems] = useState([]);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        if (productsData && productsData.items) {
            setProducts(productsData.items);
        }
    }, []);

    const handleSearch = (searchRequest) => {
        if (productsData && productsData.items) {
            setProducts(productsData.items.filter((item) => item.name.toUpperCase().startsWith(searchRequest.toUpperCase())));
        }
    };

    const handleChangeToWishList = (item, flag) => {
        if (flag) {
            setWishlistItems([...wishlistItems, item]);
        } else {
            setWishlistItems(wishlistItems.filter((product) => product !== item));
        }
    };

    const handleAddToCartList = (item) => {
        setCartlistItems([...cartlistItems, item]);
    };

  return (
      <BrowserRouter>
          <Routes>
              <Route
                  path="/"
                  element={<Home changeToWishList={handleChangeToWishList} addToCartList={handleAddToCartList} wishlist={wishlistItems} handleSearch={handleSearch} products={products}/>}
              />
              <Route
                  path="/about"
                  element={<About handleSearch={handleSearch}/>}
              />
              <Route
                  path="/help"
                  element={<Help handleSearch={handleSearch}/>}
              />
              <Route
                  path="/contacts"
                  element={<Contacts color1='blue' color2='blue' handleSearch={handleSearch}/>}
              />
              <Route
                  path="/contacts/map"
                  element={<Contacts color1='facebook' color2='teal' handleSearch={handleSearch}/>}
              />
              <Route
                  path="/contacts/social"
                  element={<Contacts color1='teal' color2='facebook' handleSearch={handleSearch}/>}
              />
              <Route
                  path="/cart"
                  element={<Cart cartlistItems={cartlistItems} handleSearch={handleSearch}/>}
              />
              <Route
                  path="/wish"
                  element={<WishList wishlistItems={wishlistItems} handleSearch={handleSearch}/>}
              />
          </Routes>
      </BrowserRouter>
  );
}

export default App;
