const SortOptions = ({ onSortChange }) => {
    const sortOptions = [
        { value: 'none', label: 'Default' },
        { value: 'price-low', label: 'Price: Low to High' },
        { value: 'price-high', label: 'Price: High to Low' },
        { value: 'name-asc', label: 'Name: A to Z' },
        { value: 'name-desc', label: 'Name: Z to A' },
        { value: 'rating', label: 'Highest Rating' },
    ];

    return (
        <div className="sort-options mb-4">
            <label className="me-2 fw-bold">Sort By:</label>
            <select
                className="form-select d-inline-block"
                style={{ width: '250px' }}
                onChange={(e) => onSortChange(e.target.value)}
                defaultValue="none"
            >
                {sortOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default SortOptions;
