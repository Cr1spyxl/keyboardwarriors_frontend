const Policies = () => {
  return (
    <div className="container py-5">
      <div className="row mb-4">
        <div className="col-lg-8 mx-auto text-center">
          <h1 className="display-5">Store Policies & Terms</h1>
          <p className="lead text-muted mt-3">
            Keyboard Warriors is committed to trust, safety, and customer satisfaction.
            Please review our updated policy summary for delivery, returns, payments, and warranty.
          </p>
        </div>
      </div>

      <div className="row g-4">
        <div className="col-md-6">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body">
              <h5 className="card-title">Shipping & Delivery</h5>
              <p className="card-text">
                <strong>📦 Processing</strong>: 1-2 business days.
              </p>
              <p className="card-text">
                <strong>🚚 Delivery</strong>: 3-7 business days across the Philippines.
              </p>
              <p className="card-text">
                <strong>📍 Tracking</strong>: All shipped orders include tracking details via SMS/email.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body">
              <h5 className="card-title">Payment & Security</h5>
              <p className="card-text">💳 Secure payments available via cards, e-wallets and bank transfer.</p>
              <p className="card-text">🔒 Your data is encrypted with industry standard protections.</p>
              <p className="card-text">🧾 Digital invoice is sent on purchase completion.</p>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body">
              <h5 className="card-title">Returns & Refunds</h5>
              <p className="card-text">🔄 Return window: 14 days (product must be unused and in original condition).</p>
              <p className="card-text">🧾 Refunds issue within 5-7 business days after inspection.</p>
              <p className="card-text">❗ Items not accepted: opened consumables, discarded packaging, accidental damage.</p>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body">
              <h5 className="card-title">Warranty & Support</h5>
              <p className="card-text">🛡️ Standard 1-year warranty for manufacturing defects.</p>
              <p className="card-text">⚠️ Warranty excludes drops, liquid spills, and misuse.</p>
              <p className="card-text">💬 Customer service available Monday-Saturday.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-lg-8 mx-auto">
          <div className="alert alert-primary shadow-sm" role="alert">
            <h4 className="alert-heading">Customer Promise</h4>
            <p>
              At Keyboard Warriors, every order is backed by our promise: genuine products, fair prices, and responsive support.
              By placing an order, you agree to our full policies and terms, which are designed to protect both buyers and sellers.
            </p>
            <hr />
            <p className="mb-0">
              Questions? Contact us via <strong>support@keyboardwarriors.ph</strong> or phone at
              <strong> +63 (2) 1234-5678</strong>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Policies;
