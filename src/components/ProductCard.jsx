import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { WishlistContext } from '../context/WishlistContext';

const ProductCard = ({ product }) => {
    const { addToCart } = useContext(CartContext);
    const { toggleWishlist, isInWishlist } = useContext(WishlistContext);
    return (
        <div className="card h-100 shadow-sm position-relative">

            {/* Wishlist button */}
            <button
                className="wishlist-btn"
                onClick={() => toggleWishlist(product)}
                style={{
                    position: 'absolute',
                    top: '10px',
                    right: '10px',
                    zIndex: 10,
                    background: 'white',
                    border: 'none',
                    borderRadius: '50%',
                    width: '40px',
                    height: '40px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                }}
            >
                <i
                    className={`fa-heart ${isInWishlist(product.id) ? 'fas text-danger' : 'far text-muted'}`}
                ></i>
            </button>

            {/* Image wrapper for zoom and badge */}
            <div className="product-img-wrapper">
                {/* Sale badge */}
                {product.discount && (
                    <div className="sale-badge">-{product.discount}%</div>
                )}

                <Link to={`/products/${product.id}`}>
                    <img
                        src={product.image}
                        className="card-img-top product-img"
                        alt={product.name}
                        onError={(e) => {
                            // If the image path is missing/broken, fall back to a generic placeholder.
                            // This avoids showing a broken image icon in the UI.
                            e.currentTarget.onerror = null;
                            e.currentTarget.src = "/vite.svg";
                        }}
                    />
                </Link>
            </div>

            <div className="card-body d-flex flex-column">

                <h6 className="card-title text-dark">
                    <Link to={`/products/${product.id}`} className="text-decoration-none text-dark">
                        {product.name}
                    </Link>
                </h6>

                {/* Sale badge */}
                <div className="mb-2 text-warning">
                    {[...Array(5)].map((star, index) => (
                        <i
                        key={index}
                        className={`fa-star ${index < product.rating ? 'fas' : 'far'} fa`}
                        ></i>
                    ))}
                </div>

                {/* Price Section */}
                <div className="mb-2">
                    <span className="text-muted text-decoration-line-through me-2">
                        ₱{product.oldPrice}
                    </span>
                    <span className="fw-bold text-danger">
                        ₱{product.price}
                    </span>
                </div>

                <button className="btn btn-primary mt-auto" onClick={() => addToCart(product)}>
                    <i className="fas fa-shopping-cart me-2"></i>
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default ProductCard;