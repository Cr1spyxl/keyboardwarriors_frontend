import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { WishlistContext } from '../context/WishlistContext';
import ProductCard from '../components/ProductCard';

const Wishlist = () => {
    const { wishlist, clearWishlist } = useContext(WishlistContext);

    const handleClearWishlist = () => {
        if (window.confirm('Are you sure you want to clear your entire wishlist?')) {
            clearWishlist();
        }
    };

    if (wishlist.length === 0) {
        return (
            <div className="container py-5">
                <div className="row">
                    <div className="col-lg-8 mx-auto text-center">
                        <h2 className="mb-4">
                            <i className="fas fa-heart text-danger"></i> My Wishlist
                        </h2>
                        <div className="alert alert-info" role="alert">
                            <p className="mb-3">Your wishlist is empty.</p>
                            <Link to="/products" className="btn btn-primary">
                                <i className="fas fa-shopping-bag"></i> Continue Shopping
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="container py-4">
            <div className="row mb-4">
                <div className="col-md-6">
                    <h2>
                        <i className="fas fa-heart text-danger"></i> My Wishlist
                        <span className="badge bg-primary ms-2">{wishlist.length}</span>
                    </h2>
                </div>
                <div className="col-md-6 text-end">
                    <button
                        className="btn btn-outline-danger"
                        onClick={handleClearWishlist}
                    >
                        <i className="fas fa-trash"></i> Clear Wishlist
                    </button>
                </div>
            </div>

            <div className="row">
                {wishlist.map(product => (
                    <div key={product.id} className="col-lg-3 col-md-4 col-sm-6 mb-4">
                        <ProductCard product={product} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Wishlist;
