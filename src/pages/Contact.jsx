import { useState } from "react";

const Contact = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.message) {
            setStatus("Please fill all fields before sending your message.");
            return;
        }

        setStatus("Your message has been sent! Our team will contact you shortly.");
        setFormData({ name: "", email: "", message: "" });

        setTimeout(() => setStatus(""), 5000);
    };

    return (
        <div className="container py-5">
            <div className="row mb-4">
                <div className="col-lg-12 text-center">
                    <h1 className="display-5">Get in Touch</h1>
                    <p className="lead text-muted">
                        Need help or have a question? Our Keyboard Warriors support squad is here for you, 24/7.
                    </p>
                </div>
            </div>

            <div className="row gy-4">
                <div className="col-lg-4">
                    <div className="card h-100 border-0 shadow-sm p-3">
                        <div className="card-body">
                            <h5 className="card-title">Contact Details</h5>
                            <p className="mb-1">
                                <i className="fas fa-phone-alt me-2"></i>
                                +63 (2) 1234-5678
                            </p>
                            <p className="mb-1">
                                <i className="fas fa-envelope me-2"></i>
                                support@keyboardwarriors.ph
                            </p>
                            <p className="mb-1">
                                <i className="fas fa-map-marker-alt me-2"></i>
                                2026 Tech Tower, Makati City, Metro Manila
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4">
                    <div className="card h-100 border-0 shadow-sm p-3">
                        <div className="card-body">
                            <h5 className="card-title">Support Hours</h5>
                            <p className="mb-1">Monday - Friday: 9:00 AM - 8:00 PM</p>
                            <p className="mb-1">Saturday: 10:00 AM - 6:00 PM</p>
                            <p className="mb-1">Sunday: Closed (Emergency support available)</p>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4">
                    <div className="card h-100 border-0 shadow-sm p-3">
                        <div className="card-body">
                            <h5 className="card-title">Follow Us</h5>
                            <p>
                                <a className="me-2" href="https://facebook.com" target="_blank" rel="noreferrer">
                                    <i className="fab fa-facebook fa-lg"></i>
                                </a>
                                <a className="me-2" href="https://twitter.com" target="_blank" rel="noreferrer">
                                    <i className="fab fa-twitter fa-lg"></i>
                                </a>
                                <a className="me-2" href="https://instagram.com" target="_blank" rel="noreferrer">
                                    <i className="fab fa-instagram fa-lg"></i>
                                </a>
                                <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                                    <i className="fab fa-linkedin fa-lg"></i>
                                </a>
                            </p>
                            <p className="text-muted small">
                                Keep up with our launch deals and exclusive releases for the Filipino gaming community.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row mt-4 gx-4 gy-4">
                <div className="col-lg-6">
                    <div className="card border-0 shadow-sm p-4 h-100" style={{ backgroundColor: "rgba(0,0,0,0.03)" }}>
                        <h4>Send us a message</h4>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    className="form-control"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Your full name"
                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    className="form-control"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="you@example.com"
                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="message" className="form-label">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    className="form-control"
                                    rows={5}
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Tell us how we can help"
                                />
                            </div>

                            <button type="submit" className="btn btn-primary">
                                <i className="fas fa-paper-plane me-2"></i>
                                Send Message
                            </button>
                        </form>

                        {status && (
                            <div className="alert alert-success alert-dismissible fade show mt-3" role="alert">
                                {status}
                                <button type="button" className="btn-close" onClick={() => setStatus("")} aria-label="Close"></button>
                            </div>
                        )}
                    </div>
                </div>

                <div className="col-lg-6">
                    <div className="card border-0 shadow-sm h-100">
                        <div className="card-body p-0">
                            <iframe
                                title="Keyboard Warriors Location"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.5306367948833!2d121.02851786508849!3d14.554814078201565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c874ce3685d3%3A0x7ed2d6882fe1590a!2sMakati%20City!5e0!3m2!1sen!2sph!4v1700000000000!5m2!1sen!2sph"
                                width="100%"
                                height="100%"
                                style={{ minHeight: "340px", border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;

