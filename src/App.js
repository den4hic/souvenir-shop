import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Help from "./pages/Help";
import Contacts from "./pages/Contacts";
import Cart from "./pages/Cart";
import WishList from "./pages/WishList";
import {useEffect, useState} from "react";

import Cookies from "js-cookie";

import productsData from "./data/products.json";

function App() {
    const [wishlistItems, setWishlistItems] = useState([]);
    const [cartlistItems, setCartlistItems] = useState([]);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        let storedArray = localStorage.getItem('wishlist');
        if (storedArray) {
            let parsedArray = JSON.parse(storedArray);
            setWishlistItems(parsedArray);
        }
        if (productsData && productsData.items) {
            setProducts(productsData.items);
        }
    }, [products]);

    const handleSearch = (searchRequest) => {
        if (productsData && productsData.items) {
            setProducts(productsData.items.filter((item) => item.name.toUpperCase().startsWith(searchRequest.toUpperCase())));
        }
    };

    const handleChangeToWishList = (item, flag) => {
        let newArray = [];
        if (flag) {
            newArray = [...wishlistItems, item];
            setWishlistItems([...wishlistItems, item]);
        } else {
            for (let i = 0; i < wishlistItems.length; i++) {
                if(wishlistItems[i].id !== item.id) {
                    newArray.push(wishlistItems[i])
                }
            }

            setWishlistItems(newArray);
        }
        console.log(newArray)
        localStorage.setItem("wishlist", JSON.stringify(newArray));
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
                  element={<WishList changeToWishList={handleChangeToWishList} addToCartList={handleAddToCartList} wishlistItems={wishlistItems} handleSearch={handleSearch}/>}
              />
          </Routes>
      </BrowserRouter>
  );
}

export default App;
