import React, { useEffect, useState } from 'react';
import '../styles/Product.css';
import { Button, Icon } from 'semantic-ui-react';

const Product = ({ product, onChangeToWishlist, onAddToCartlist, wishlist }) => {
    const [isOnWish, setIsOnWish] = useState(false);

    useEffect(() => {
        if(wishlist.some((item) => item.id === product.id)) {
            setIsOnWish(true)
        }
    }, [product.id, wishlist]);

    const handleChangeToWishList = () => {
        if (isOnWish) {
            setIsOnWish(false);
            onChangeToWishlist(product, false);
        } else {
            setIsOnWish(true);
            onChangeToWishlist(product, true);
        }
    };

    const handleAddToCartlist = () => {
        onAddToCartlist(product);
    };

    if (!product) {
        return <p>Loading....</p>;
    }

    return (
        <div className="item-block">
            <div className="item-img">
                <div className="image-container"><img className="image" src={`/assets/images/products/${product.image}`} alt="No data" /></div>
                <div onClick={handleChangeToWishList}>
                    {isOnWish ? (
                        <Icon className="wish-btn" circular inverted color="red" name="like" size="large" />
                    ) : (
                        <Icon className="wish-btn" circular inverted color="teal" name="like" size="large" />
                    )}
                </div>
                {product.isPopular && <div className="badge"><b>Популярно</b></div>}
            </div>
            <div className="item-info">
                <div className="text-info">
                    <h2>{product.name}</h2>
                    <p>{product.description}</p>
                </div>
                <div className="buy-container">
                    <b className="price">{product.price} грн.</b>
                    <Button onClick={handleAddToCartlist} color="yellow" circular icon="shop" size="big" />
                </div>
            </div>

        </div>
    );
};

export default Product;
