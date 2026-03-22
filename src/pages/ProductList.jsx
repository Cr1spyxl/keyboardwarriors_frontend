import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import Sidebar from "../components/Sidebar";
import SearchBar from "../components/SearchBar";
import PriceRangeFilter from "../components/PriceRangeFilter";
import SortOptions from "../components/SortOptions";

const ProductList = () => {
    // Store products from backend
    const [allProducts, setAllProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [sortBy, setSortBy] = useState("none");
    const [priceRange, setPriceRange] = useState({ min: 0, max: Infinity });

    // Track loading state
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const API_BASE = import.meta?.env?.VITE_API_BASE_URL || "https://keyboardwarriors-backend.onrender.com";

    // Fetch products when component loads
    useEffect(() => {
        fetch(`${API_BASE}/api/products`)
            .then((res) => {
                if (!res.ok) throw new Error(`status ${res.status}`);
                return res.json();
            })
            .then((data) => {
                console.log("local backend data", data);
                const formatted = (Array.isArray(data) ? data : []).map((item) => ({
                    id: item.id,
                    name: item.name,
                    oldPrice: parseFloat(item.oldPrice.replace(/,/g, '')),
                    price: parseFloat(item.price.replace(/,/g, '')),
                    discount: item.discount,
                    rating: item.rating,
                    image: item.image,
                    category: item.category,
                }));

                setAllProducts(formatted);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Failed to fetch local products:", err);
                setError(`Unable to load products: ${err.message}`);
                setAllProducts([]);
                setLoading(false);
            });
    }, []);

    // Filter and sort products
    let filteredProducts = allProducts.filter((product) => {
        // Category filter
        if (selectedCategory && product.category !== selectedCategory) {
            return false;
        }

        // Search filter
        if (searchTerm && !product.name.toLowerCase().includes(searchTerm.toLowerCase())) {
            return false;
        }

        // Price range filter
        if (product.price < priceRange.min || product.price > priceRange.max) {
            return false;
        }

        return true;
    });

    // Apply sorting
    if (sortBy === "price-low") {
        filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-high") {
        filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price);
    } else if (sortBy === "name-asc") {
        filteredProducts = [...filteredProducts].sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === "name-desc") {
        filteredProducts = [...filteredProducts].sort((a, b) => b.name.localeCompare(a.name));
    } else if (sortBy === "rating") {
        filteredProducts = [...filteredProducts].sort((a, b) => b.rating - a.rating);
    }

    const handlePriceChange = (min, max) => {
        setPriceRange({ min, max });
    };

    if (loading) {
        return <h3 className="text-center py-5">Loading products...</h3>;
    }

    if (error) {
        return <h3 className="text-center text-danger py-5">{error}</h3>;
    }

    return (
        <div className="container-fluid py-4">
            <div className="row">
                {/* Sidebar */}
                <div className="col-lg-2 col-md-3 mb-4">
                    <Sidebar onSelectCategory={setSelectedCategory} />
                    <PriceRangeFilter products={allProducts} onPriceChange={handlePriceChange} />
                </div>

                {/* Products Area */}
                <div className="col-lg-10 col-md-9">
                    {/* Header */}
                    <h2 className="mb-4">
                        {selectedCategory ? `${selectedCategory} Products` : "All Products"}
                        <span className="badge bg-primary ms-2">{filteredProducts.length}</span>
                    </h2>

                    {/* Search Bar */}
                    <SearchBar onSearch={setSearchTerm} />

                    {/* Sort Options */}
                    <SortOptions onSortChange={setSortBy} />

                    {/* Active Filters Display */}
                    {(searchTerm || selectedCategory || priceRange.min > 0 || priceRange.max < Infinity) && (
                        <div className="alert alert-info mb-4">
                            <strong>Active Filters:</strong>
                            {searchTerm && <span className="badge bg-info me-2">Search: {searchTerm}</span>}
                            {selectedCategory && <span className="badge bg-info me-2">Category: {selectedCategory}</span>}
                            {(priceRange.min > 0 || priceRange.max < Infinity) && (
                                <span className="badge bg-info me-2">
                                    Price: ₱{priceRange.min.toLocaleString()} - ₱{priceRange.max.toLocaleString()}
                                </span>
                            )}
                            <button
                                className="btn btn-sm btn-outline-info ms-2"
                                onClick={() => {
                                    setSearchTerm("");
                                    setSelectedCategory(null);
                                    setPriceRange({ min: 0, max: Infinity });
                                    setSortBy("none");
                                }}
                            >
                                <i className="fas fa-times"></i> Clear All
                            </button>
                        </div>
                    )}

                    {/* Products Grid */}
                    {filteredProducts.length > 0 ? (
                        <div className="row">
                            {filteredProducts.map((product) => (
                                <div
                                    className="col-lg-3 col-md-4 col-sm-6 mb-4"
                                    key={product.id}
                                >
                                    <ProductCard product={product} />
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="alert alert-warning text-center py-5">
                            <h5>
                                <i className="fas fa-search"></i> No products found
                            </h5>
                            <p className="text-muted mb-3">
                                Try adjusting your search or filter criteria
                            </p>
                            <button
                                className="btn btn-outline-primary"
                                onClick={() => {
                                    setSearchTerm("");
                                    setSelectedCategory(null);
                                    setPriceRange({ min: 0, max: Infinity });
                                    setSortBy("none");
                                }}
                            >
                                Reset Filters
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProductList;