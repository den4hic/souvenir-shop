import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";


const Home = ({ changeToWishList, handleChangeCart, cartlist, wishlistItems: wishlist, handleSearch, products, handleChangeCategory, handleSort, handlePopular}) => {
    return (
        <div>
            <Header handleSearch={handleSearch}/>
            <Main changeToWishList={changeToWishList} handleChangeCart={handleChangeCart} cartlist={cartlist} wishlist={wishlist} products={products} handleChangeCategory={handleChangeCategory} handleSort={handleSort} handlePopular={handlePopular}/>
            <Footer/>
        </div>
    );
};

export default Home;
