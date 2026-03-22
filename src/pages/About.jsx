import React from 'react';

const About = () => {
    return (
        <div className="container my-5">
            {/* Hero Section */}
            <div className="text-center mb-5">
                <h1 className="display-4 fw-bold text-primary">About Keyboard Warriors</h1>
                <p className="lead text-muted">Empowering tech enthusiasts with quality, affordable gadgets</p>
            </div>

            {/* Mission Card */}
            <div className="row mb-4">
                <div className="col-md-6">
                    <div className="card h-100 shadow-sm">
                        <div className="card-body">
                            <h3 className="card-title text-primary">
                                <i className="fas fa-bullseye me-2"></i>Our Mission
                            </h3>
                            <p className="card-text">
                                "We sell the best, we sell the cheapest." At Keyboard Warriors Tech, we\'re committed to offering cutting-edge products without the premium price tag, ensuring that every customer can enjoy the latest innovations without compromise.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card h-100 shadow-sm">
                        <div className="card-body">
                            <h3 className="card-title text-primary">
                                <i className="fas fa-users me-2"></i>Our Community
                            </h3>
                            <p className="card-text">
                                Keyboard Warriors Tech is a community-driven tech company built on the belief that technology should be powerful, affordable, and accessible to everyone. We specialize in delivering high-quality gadgets, gaming gear, and computer hardware.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Values Section */}
            <div className="row mb-4">
                <div className="col-12">
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <h3 className="card-title text-primary text-center mb-4">
                                <i className="fas fa-star me-2"></i>Our Values
                            </h3>
                            <div className="row">
                                <div className="col-md-4 text-center mb-3">
                                    <i className="fas fa-shield-alt fa-3x text-success mb-3"></i>
                                    <h5>Trust</h5>
                                    <p>Building lasting relationships through reliable products and honest service.</p>
                                </div>
                                <div className="col-md-4 text-center mb-3">
                                    <i className="fas fa-award fa-3x text-warning mb-3"></i>
                                    <h5>Quality</h5>
                                    <p>Delivering high-quality gadgets that meet the needs of both casual users and enthusiasts.</p>
                                </div>
                                <div className="col-md-4 text-center mb-3">
                                    <i className="fas fa-heart fa-3x text-danger mb-3"></i>
                                    <h5>Community</h5>
                                    <p>Fostering a community spirit where technology empowers creativity, connection, and progress.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Story Section */}
            <div className="row">
                <div className="col-12">
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <h3 className="card-title text-primary">
                                <i className="fas fa-book-open me-2"></i>Our Story
                            </h3>
                            <p className="card-text">
                                What sets us apart is our focus on people. We don\'t just sell devices�we build experiences. Whether it\'s helping a student find the right laptop, guiding a gamer to their dream setup, or supporting professionals with reliable hardware, we make sure every interaction reflects our values of trust, quality, and community spirit.
                            </p>
                            <p className="card-text">
                                At Keyboard Warriors Tech, we see technology as more than just tools�it\'s a way to empower creativity, connection, and progress. Join our community and discover the difference that quality and affordability can make.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
