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
        let storedArray = localStorage.getItem('wishlist');
        if (storedArray) {
            let parsedArray = JSON.parse(storedArray);
            setWishlistItems(parsedArray);
        }
        if (productsData && productsData.items) {
            setProducts(productsData.items);
        }
    }, []);

    const handleChangeCategory = (category) => {
        if (productsData && productsData.items) {
            if (category === "all") {
                setProducts(productsData.items);
            } else {
                setProducts(productsData.items.filter((item) => item.category.some((cat) => cat === category)));
            }
        }
    };

    const handlePopular = (checked) => {
        if (productsData && productsData.items) {
            if (checked) {
                setProducts(products.filter((item) => item.isPopular));
            } else {
                setProducts(productsData.items);
            }
        }
    };

    const handleSort = (sortOption) => {
        if(productsData && productsData.items) {
            let sortedProducts = [...products];

            switch (sortOption) {
                case "price_asc":
                    sortedProducts.sort((item1, item2) => item1.price - item2.price);
                    break;
                case "price_desc":
                    sortedProducts.sort((item1, item2) => item2.price - item1.price);
                    break;
                case "lang":
                    sortedProducts.sort((item1, item2) => item1.name.localeCompare(item2.name));
                    break;
                default:
            }

            setProducts(sortedProducts);
        }
    };


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
                  element={<Home changeToWishList={handleChangeToWishList} addToCartList={handleAddToCartList} wishlist={wishlistItems} handleSearch={handleSearch} products={products} handleChangeCategory={handleChangeCategory} handleSort={handleSort} handlePopular={handlePopular}/>}
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
