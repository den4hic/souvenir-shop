import Header from "../components/Header";
import Items from "../components/Items";

import '../styles/WishList.css';

const WishList = ({changeToWishList, addToCartList,handleSearch, wishlistItems}) => {
    return (
        <div>
            <Header handleSearch={handleSearch}/>
            <div className="wishlist-text">
                <h1>Список бажань</h1>
                {wishlistItems.length === 0 && <h3>Список бажань порожній</h3>}
            </div>
            <div className="wishlist-container">
                <Items changeToWishList={changeToWishList} addToCartList={addToCartList} products={wishlistItems} activePage={1}/>
            </div>
        </div>
    );
};

export default WishList;
