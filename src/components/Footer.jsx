import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';

const Footer = () => {
    const { isDarkMode } = useContext(ThemeContext);

    return (
        <footer
            className="text-center py-5 mt-5"
            style={{
                borderTop: '1px solid #d1d5db',
                backgroundColor: isDarkMode ? '#1a1a1a' : '#f8f9fa',
                color: isDarkMode ? '#aaa' : '#666',
                transition: 'background-color 0.3s ease, color 0.3s ease'
            }}
        >
            <div className="container">
                <div className="row mb-4">
                    {/* About Section */}
                    <div className="col-md-4 mb-3 mb-md-0">
                        <h6 className="font-weight-bold mb-3" style={{ color: isDarkMode ? '#fff' : '#000' }}>
                            <i className="fas fa-keyboard"></i> About Us
                        </h6>
                        <p className="small">
                            Keyboard Warriors Tech is your trusted source for high-quality computer hardware and gaming peripherals in the Philippines.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="col-md-4 mb-3 mb-md-0">
                        <h6 className="font-weight-bold mb-3" style={{ color: isDarkMode ? '#fff' : '#000' }}>
                            Quick Links
                        </h6>
                        <div className="small">
                            <Link to="/products" className="text-decoration-none" style={{ color: isDarkMode ? '#aaa' : '#666' }}>
                                Products
                            </Link>
                            <br />
                            <Link to="/about" className="text-decoration-none" style={{ color: isDarkMode ? '#aaa' : '#666' }}>
                                About
                            </Link>
                            <br />
                            <Link to="/contact" className="text-decoration-none" style={{ color: isDarkMode ? '#aaa' : '#666' }}>
                                Contact
                            </Link>
                            <br />
                            <Link to="/policies" className="text-decoration-none" style={{ color: isDarkMode ? '#aaa' : '#666' }}>
                                Policies
                            </Link>
                        </div>
                    </div>

                    {/* Contact & Social */}
                    <div className="col-md-4">
                        <h6 className="font-weight-bold mb-3" style={{ color: isDarkMode ? '#fff' : '#000' }}>
                            Contact Us
                        </h6>
                        <p className="small mb-2">
                            <i className="fas fa-phone"></i> +63 (0)2 1234-5678
                        </p>
                        <p className="small mb-3">
                            <i className="fas fa-envelope"></i> support@keyboardwarriors.ph
                        </p>
                        <div>
                            <a href="https://facebook.com" className="me-2" style={{ color: isDarkMode ? '#aaa' : '#666' }}>
                                <i className="fab fa-facebook fa-lg"></i>
                            </a>
                            <a href="https://twitter.com" className="me-2" style={{ color: isDarkMode ? '#aaa' : '#666' }}>
                                <i className="fab fa-twitter fa-lg"></i>
                            </a>
                            <a href="https://instagram.com" style={{ color: isDarkMode ? '#aaa' : '#666' }}>
                                <i className="fab fa-instagram fa-lg"></i>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <hr style={{ borderColor: isDarkMode ? '#333' : '#ddd' }} />
                <p className="small mb-0">&copy; 2026 Keyboard Warriors Tech. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;