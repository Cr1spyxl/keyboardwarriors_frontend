import { useState } from 'react';

const SearchBar = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (e) => {
        const value = e.target.value;
        setSearchTerm(value);
        onSearch(value);
    };

    const handleClear = () => {
        setSearchTerm('');
        onSearch('');
    };

    return (
        <div className="search-bar-container mb-4">
            <div className="input-group">
                <input
                    type="text"
                    className="form-control search-input"
                    placeholder="Search products by name or keyword..."
                    value={searchTerm}
                    onChange={handleChange}
                />
                <button
                    className="btn btn-outline-secondary"
                    type="button"
                    onClick={handleClear}
                    disabled={!searchTerm}
                >
                    <i className="fas fa-times"></i> Clear
                </button>
            </div>
            {searchTerm && (
                <p className="text-muted small mt-2">
                    Searching for: <strong>{searchTerm}</strong>
                </p>
            )}
        </div>
    );
};

export default SearchBar;
