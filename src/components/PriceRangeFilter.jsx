import { useState, useEffect } from 'react';

const PriceRangeFilter = ({ products, onPriceChange }) => {
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(0);
    const [selectedMin, setSelectedMin] = useState(0);
    const [selectedMax, setSelectedMax] = useState(0);

    // Calculate min/max from products
    useEffect(() => {
        if (products.length > 0) {
            const prices = products.map(p => p.price);
            const min = Math.min(...prices);
            const max = Math.max(...prices);
            setMinPrice(Math.floor(min / 1000) * 1000);
            setMaxPrice(Math.ceil(max / 1000) * 1000);
            setSelectedMin(Math.floor(min / 1000) * 1000);
            setSelectedMax(Math.ceil(max / 1000) * 1000);
        }
    }, [products]);

    const handleMinChange = (e) => {
        const value = parseInt(e.target.value);
        setSelectedMin(value);
        onPriceChange(value, selectedMax);
    };

    const handleMaxChange = (e) => {
        const value = parseInt(e.target.value);
        setSelectedMax(value);
        onPriceChange(selectedMin, value);
    };

    const handleReset = () => {
        setSelectedMin(minPrice);
        setSelectedMax(maxPrice);
        onPriceChange(minPrice, maxPrice);
    };

    return (
        <div className="price-filter card p-3 mb-3">
            <h6 className="font-weight-bold mb-3">Price Range</h6>
            
            <div className="mb-3">
                <label className="small text-muted">
                    Min: ₱{selectedMin.toLocaleString()}
                </label>
                <input
                    type="range"
                    className="form-range w-100"
                    min={minPrice}
                    max={maxPrice}
                    step={1000}
                    value={selectedMin}
                    onChange={handleMinChange}
                />
            </div>

            <div className="mb-3">
                <label className="small text-muted">
                    Max: ₱{selectedMax.toLocaleString()}
                </label>
                <input
                    type="range"
                    className="form-range w-100"
                    min={minPrice}
                    max={maxPrice}
                    step={1000}
                    value={selectedMax}
                    onChange={handleMaxChange}
                />
            </div>

            <div className="price-range-display mb-3 text-center p-2 bg-light rounded">
                <small><strong>₱{selectedMin.toLocaleString()} - ₱{selectedMax.toLocaleString()}</strong></small>
            </div>

            <button
                className="btn btn-sm btn-outline-secondary w-100"
                onClick={handleReset}
            >
                Reset Filter
            </button>
        </div>
    );
};

export default PriceRangeFilter;
