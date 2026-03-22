import { useEffect, useState } from "react";
import { Carousel } from "bootstrap";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import banner1 from "../assets/banner1.jpg";
import banner2 from "../assets/banner2.jpg";
import banner3 from "../assets/banner3.png";
import banner4 from "../assets/banner4.jpg";

const fallbackProducts = [
    {
        name: "Ryzen 9 9950X3D",
        oldPrice: "43,394",
        price: "32,546.25",
        discount: 25,
        rating: 5,
        image: "/assets/product1.jpeg",
    },
    {
        name: "RTX 5090 OC 32GB",
        oldPrice: "243,997",
        price: "195,197.60",
        discount: 20,
        rating: 5,
        image: "/assets/product2.webp",
    },
    {
        name: "Corsair Nautilus 360 RS",
        oldPrice: "9,495",
        price: "8,545.50",
        discount: 10,
        rating: 5,
        image: "/assets/product3.webp",
    },
    {
        name: "G.Skill Trident Z5 Royal DDR5 96GB",
        oldPrice: "87,850",
        price: "17,570",
        discount: 80,
        rating: 5,
        image: "/assets/product4.webp",
    },
];

const API_BASE = import.meta?.env?.VITE_API_BASE_URL || "http://localhost:5000";

const Home = () => {
    const [products, setProducts] = useState(fallbackProducts);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        fetch(`${API_BASE}/api/products`)
            .then((res) => {
                if (!res.ok) throw new Error(`HTTP ${res.status}`);
                return res.json();
            })
            .then((data) => {
                const formatted = (Array.isArray(data) ? data : []).map((item) => ({
                    id: item.id,
                    name: item.name,
                    oldPrice: item.oldPrice,
                    price: item.price,
                    discount: item.discount,
                    rating: item.rating,
                    image: item.image,
                }));

                // Ensure homepage only shows 4 featured products
                const featured = formatted.length > 0 ? formatted.slice(0, 4) : fallbackProducts;
                setProducts(featured);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Failed to fetch local products:", err);
                setError(`Unable to load products: ${err.message}`);
                setLoading(false);
            });
    }, []);

    useEffect(() => {
        const slider = document.querySelector("#bannerCarousel");
        if (!slider) return;

        const bs = new Carousel(slider, {
            interval: 3000,
            ride: "carousel",
            pause: "hover",
            wrap: true,
        });

        return () => bs.dispose();
    }, []);

    return (
        <div className="container">
            {/* Banner carousel */}
            <div
                id="bannerCarousel"
                className="carousel slide mb-4"
                data-bs-ride="carousel"
                style={{
                    width: "100%",
                    maxWidth: "1300px",
                    height: "400px",
                    maxHeight: "65vh",
                    overflow: "hidden",
                    margin: "0 auto",
                    borderRadius: "8px",
                }}
            >
                <div className="carousel-inner" style={{ height: "100%" }}>
                    {[banner1, banner2, banner3, banner4].map((src, idx) => (
                        <div key={idx} className={`carousel-item ${idx === 0 ? "active" : ""}`} style={{ height: "100%" }}>
                            <img
                                src={src}
                                className="d-block w-100 h-100"
                                alt={`Banner ${idx + 1}`}
                                style={{ objectFit: "cover", height: "100%", width: "100%" }}
                            />
                        </div>
                    ))}
                </div>

                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#bannerCarousel"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#bannerCarousel"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            {/* header with link to full list */}
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h2>Featured Products</h2>

                {/* Link to full ProductList page */}
                <Link to="/products" className="btn btn-outline-primary">
                    View More Products
                </Link>
            </div>

            {/* Product area: show spinner while loading; after load show products or fallback */}
            {loading ? (
                <div className="d-flex justify-content-center my-5">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            ) : error ? (
                <div className="alert alert-danger" role="alert">
                    {error}
                </div>
            ) : (
                <div className="row">
                    {products.map((product, index) => (
                        <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={index}>
                            <ProductCard product={product} />
                        </div>
                    )
                    )}
                </div>
            )}
        </div>
    );
};

export default Home;