import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const API_BASE = import.meta?.env?.VITE_API_BASE_URL || "http://localhost:5000";

const SingleProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(`${API_BASE}/api/products/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then(setProduct)
      .catch((err) => {
        console.error("Failed to fetch product:", err);
        setError(`Unable to load product: ${err.message}`);
      })
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return <h3 className="text-center">Loading product...</h3>;
  }

  if (error) {
    return <h3 className="text-center text-danger">{error}</h3>;
  }

  if (!product) {
    return <h3 className="text-center">Product not found</h3>;
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img
            src={product.image}
            alt={product.name}
            className="img-fluid rounded"
            style={{ maxHeight: "400px", objectFit: "cover" }}
          />
        </div>
        <div className="col-md-6">
          <h2 className="text-neon">{product.name}</h2>
          <p className="text-muted">Category: {product.category}</p>
          <div className="mb-3">
            <span className="text-decoration-line-through text-muted">₱{product.oldPrice}</span>
            <span className="fs-4 fw-bold ms-2 text-neon">₱{product.price}</span>
            {product.discount > 0 && (
              <span className="badge bg-danger ms-2">{product.discount}% OFF</span>
            )}
          </div>
          <div className="mb-3">
            Rating: {"★".repeat(product.rating)}{"☆".repeat(5 - product.rating)}
          </div>
          <p className="mb-4">
            High-quality {product.category.toLowerCase()} product. Perfect for gaming and professional use.
          </p>
          <Link to="/products" className="btn btn-outline-primary">
            Back to Products
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
