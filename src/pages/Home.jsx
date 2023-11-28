import Header from "../components/Header";
import Main from "../components/Main";

const Home = ({ changeToWishList, handleChangeCart, cartlist, wishlistItems: wishlist, handleSearch, products, handleChangeCategory, handleSort, handlePopular}) => {
    return (
        <div style={{width: "100%"}}>
            <Header handleSearch={handleSearch}/>
            <Main changeToWishList={changeToWishList} handleChangeCart={handleChangeCart} cartlist={cartlist} wishlist={wishlist} products={products} handleChangeCategory={handleChangeCategory} handleSort={handleSort} handlePopular={handlePopular}/>
        </div>
    );
};

export default Home;
