import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const Header = () => {
    const { isDarkMode, toggleTheme } = useContext(ThemeContext);

    return (
        <header 
            className="p-4 text-center custom-header"
            style={{
                borderBottom: '2px solid #d1d5db',
                backgroundColor: isDarkMode ? '#1a1a1a' : '#ffffff',
                color: isDarkMode ? '#ffffff' : '#000000',
                transition: 'background-color 0.3s ease, color 0.3s ease'
            }}
        >
            <div className="d-flex justify-content-between align-items-center">
                <div>
                    <h1 className="store-title mb-0">
                        <i className="fas fa-keyboard me-2"></i>Keyboard Warriors
                    </h1>
                    <p className="store-subtitle mb-0">We sell the best, we sell the cheapest</p>
                </div>
                <button
                    className="btn btn-outline-secondary"
                    onClick={toggleTheme}
                    title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                    style={{
                        borderColor: isDarkMode ? '#666' : '#ccc',
                        color: isDarkMode ? '#aaa' : '#666'
                    }}
                >
                    <i className={`fas fa-${isDarkMode ? 'sun' : 'moon'}`}></i>
                </button>
            </div>
        </header>
    );
};

export default Header;