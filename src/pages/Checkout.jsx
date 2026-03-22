import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const Checkout = () => {
  const { cart, clearCart } = useContext(CartContext);
  const [form, setForm] = useState({ name: '', email: '', address: '', phone: '', payment: 'cod' });
  const [submitted, setSubmitted] = useState(false);
  const [finalTotal, setFinalTotal] = useState(0);

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const tax = subtotal * 0.12;
  const shipping = subtotal > 0 ? 150 : 0;
  const total = subtotal + tax + shipping;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.address || !form.phone) {
      setSubmitted('incomplete');
      return;
    }

    setFinalTotal(total);
    clearCart();
    setSubmitted(true);
  };

  if (submitted === 'incomplete') {
    return (
      <div className="container py-5">
        <div className="alert alert-warning text-center">
          Please complete all required information before placing order.
        </div>
        <Link to="/checkout" className="btn btn-primary">
          Back to checkout
        </Link>
      </div>
    );
  }

  if (submitted) {
    return (
      <div className="container py-5">
        <div className="text-center p-4 rounded shadow-sm bg-light">
          <h2 className="mb-3 text-success">Order Confirmed</h2>
          <p className="lead">Thanks, {form.name}! Your order was successfully placed.</p>
          <p className="fs-5">Total paid: <strong>₱{finalTotal.toFixed(2)}</strong></p>
          <p className="text-muted">Your items will be ready for shipment shortly.</p>
          <Link to="/" className="btn btn-primary mt-3">Continue Shopping</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <div className="row gy-4">
        <div className="col-lg-7">
          <div className="card border-0 shadow-sm">
            <div className="card-body">
              <h2 className="mb-4">Checkout</h2>

              <h5 className="mb-3">Customer Details</h5>
              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label htmlFor="name" className="form-label">Full Name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      className="form-control"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Juan Dela Cruz"
                    />
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="email" className="form-label">Email Address</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className="form-control"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="juan@example.com"
                    />
                  </div>

                  <div className="col-12">
                    <label htmlFor="address" className="form-label">Delivery Address</label>
                    <textarea
                      id="address"
                      name="address"
                      rows="3"
                      className="form-control"
                      value={form.address}
                      onChange={handleChange}
                      placeholder="Brgy 24, Barangay Highstreet, Makati City"
                    />
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="phone" className="form-label">Phone Number</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      className="form-control"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="0917 123 4567"
                    />
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="payment" className="form-label">Payment Method</label>
                    <select
                      id="payment"
                      name="payment"
                      className="form-select"
                      value={form.payment}
                      onChange={handleChange}
                    >
                      <option value="cod">Cash on Delivery</option>
                      <option value="gcash">GCash</option>
                      <option value="card">Credit/Debit Card</option>
                    </select>
                  </div>

                  <div className="col-12">
                    <button type="submit" className="btn btn-primary w-100 py-2">
                      Confirm Purchase
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="col-lg-5">
          <div className="card border-0 shadow-sm sticky-top" style={{ top: '80px' }}>
            <div className="card-body">
              <h5 className="card-title">Order Summary</h5>
              <div className="list-group list-group-flush">
                {cart.length ? cart.map((item) => (
                  <div key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                    <div>
                      <strong>{item.name}</strong>
                      <small className="d-block text-muted">Qty: {item.qty}</small>
                    </div>
                    <span>₱{(item.price * item.qty).toFixed(2)}</span>
                  </div>
                )) : (
                  <div className="list-group-item text-center text-muted">Your cart is empty.</div>
                )}
              </div>

              <hr />

              <div className="d-flex justify-content-between">
                <span>Subtotal</span>
                <strong>₱{subtotal.toFixed(2)}</strong>
              </div>
              <div className="d-flex justify-content-between">
                <span>VAT (12%)</span>
                <strong>₱{tax.toFixed(2)}</strong>
              </div>
              <div className="d-flex justify-content-between">
                <span>Shipping</span>
                <strong>₱{shipping.toFixed(2)}</strong>
              </div>

              <hr />

              <div className="d-flex justify-content-between fs-5">
                <span className="fw-bold">Total</span>
                <strong>₱{total.toFixed(2)}</strong>
              </div>

              <p className="text-muted small mt-3">
                ※ Orders above ₱20,000 are eligible for expedited shipping.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
``