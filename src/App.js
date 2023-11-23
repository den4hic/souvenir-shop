import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Help from "./pages/Help";
import Contacts from "./pages/Contacts";
import Cart from "./pages/Cart";
import WishList from "./pages/WishList";
import {useState} from "react";

function App() {
    const [wishlistItems, setWishlistItems] = useState([]);
    const [cartlistItems, setCartlistItems] = useState([]);

    const handleChangeToWishList = (item, flag) => {
        if (flag) {
            setWishlistItems([...wishlistItems, item]);
        } else {
            setWishlistItems(wishlistItems.filter((product) => product !== item));
        }
        console.log(wishlistItems);
    };

    const handleAddToCartList = (item) => {
        setCartlistItems([...cartlistItems, item]);
    };

  return (
      <BrowserRouter>
          <Routes>
              <Route
                  path="/"
                  element={<Home changeToWishList={handleChangeToWishList} addToCartList={handleAddToCartList} wishlist={wishlistItems}/>}
              />
              <Route
                  path="/about"
                  element={<About/>}
              />
              <Route
                  path="/help"
                  element={<Help/>}
              />
              <Route
                  path="/contacts"
                  element={<Contacts color1='blue' color2='blue' />}
              />
              <Route
                  path="/contacts/map"
                  element={<Contacts color1='facebook' color2='teal' />}
              />
              <Route
                  path="/contacts/social"
                  element={<Contacts color1='teal' color2='facebook' />}
              />
              <Route
                  path="/cart"
                  element={<Cart cartlistItems={cartlistItems}/>}
              />
              <Route
                  path="/wish"
                  element={<WishList wishlistItems={wishlistItems}/>}
              />
          </Routes>
      </BrowserRouter>
  );
}

export default App;
