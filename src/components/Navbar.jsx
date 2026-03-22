import { useContext } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { WishlistContext } from '../context/WishlistContext';
import logo from '../assets/kb.png'; // or remove and use <img src="/kb.png" ... />

const Navbar = () => {
  const { cart } = useContext(CartContext);
  const { wishlist } = useContext(WishlistContext);

  const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);

  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img
            src={logo}
            alt="Keyboard Warriors Tech"
            style={{ width: '100px', height: 'auto' }}
          />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink to="/" end className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/products" end className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
                Products
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" end className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" end className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
                Contact
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/policies" end className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
                Policies
              </NavLink>
            </li>

            {/* Wishlist icon with live count */}
            <li className="nav-item">
              <Link className="nav-link" to="/wishlist">
                <i className="fa fa-heart"></i>
                {wishlist.length > 0 && (
                  <span className="badge bg-danger ms-1">
                    {wishlist.length}
                  </span>
                )}
              </Link>
            </li>

            {/* Cart icon with live count */}
            <li className="nav-item">
              <Link className="nav-link" to="/cart">
                <i className="fa fa-shopping-cart"></i>
                <span className="badge bg-danger ms-1">
                  {totalQty}
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    {/* MOBILE BOTTOM NAVIGATION */}
    <nav className="navbar fixed-bottom bg-light border-top d-lg-none shadow-sm">
      <div className="container-fluid d-flex justify-content-around text-center">

        {/* Home */}
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive
              ? "text-primary text-decoration-none"
              : "text-dark text-decoration-none"
          }
        >
          <div>
            <i className="fa fa-home fs-5"></i>
            <div style={{ fontSize: "12px" }}>Home</div>
          </div>
        </NavLink>

        {/* Products */}
        <NavLink
          to="/products"
          className={({ isActive }) =>
            isActive
              ? "text-primary text-decoration-none"
              : "text-dark text-decoration-none"
          }
        >
          <div>
            <i className="fa fa-box fs-5"></i>
            <div style={{ fontSize: "12px" }}>Products</div>
          </div>
        </NavLink>

        {/* Wishlist */}
        <NavLink
          to="/wishlist"
          className={({ isActive }) =>
            isActive
              ? "text-primary text-decoration-none position-relative"
              : "text-dark text-decoration-none position-relative"
          }
        >
          <div className="position-relative">
            <i className="fa fa-heart fs-5"></i>
            {wishlist.length > 0 && (
              <span
                className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                style={{ fontSize: "10px" }}
              >
                {wishlist.length}
              </span>
            )}
            <div style={{ fontSize: "12px" }}>Wishlist</div>
          </div>
        </NavLink>

        {/* Cart */}
        <NavLink
          to="/cart"
          className={({ isActive }) =>
            isActive
              ? "text-primary text-decoration-none position-relative"
              : "text-dark text-decoration-none position-relative"
          }
        >
          <div className="position-relative">
            <i className="fa fa-shopping-cart fs-5"></i>
            {totalQty > 0 && (
              <span
                className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                style={{ fontSize: "10px" }}
              >
                {totalQty}
              </span>
            )}
            <div style={{ fontSize: "12px" }}>Cart</div>
          </div>
        </NavLink>

        {/* About */}
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "text-primary text-decoration-none"
              : "text-dark text-decoration-none"
          }
        >
          <div>
            <i className="fa fa-info-circle fs-5"></i>
            <div style={{ fontSize: "12px" }}>About</div>
          </div>
        </NavLink>

        {/* Contact */}
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "text-primary text-decoration-none"
              : "text-dark text-decoration-none"
          }
        >
          <div>
            <i className="fa fa-phone fs-5"></i>
            <div style={{ fontSize: "12px" }}>Contact</div>
          </div>
        </NavLink>
      </div>
    </nav>
    </>
  );
};

export default Navbar;
``