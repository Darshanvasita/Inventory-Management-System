
import React from 'react';
import './Home.css';  // You can create a CSS file for custom styles
import { Link } from 'react-router-dom';

const Home = () => (

  <div className="container mt-5">
    <h1 className="text-center mb-4 main-heading">Welcome to the Inventory Management System</h1>

    {/* Banner Section */}
    <section className="py-5 banner-section rounded shadow-lg">
      <div className="position-relative text-center text-white rounded overflow-hidden banner-content">
        <img
          className="img-fluid position-absolute w-100 h-100 banner-image"
          style={{ objectFit: "cover", top: 0, left: 0, zIndex: -1 }}
          src="https://sc04.alicdn.com/kf/Hd5a00c4c857845de937e751056c812b5Q/202390270/Hd5a00c4c857845de937e751056c812b5Q.jpeg"
          alt="Banner"
        />
        <div className="position-relative">
          <h2 className="fw-bold banner-heading">
            Generate <span className="highlighted-text">Monthly Reports</span>
          </h2>
          <p className="banner-description">
            Good customer relationship management is the foundation of modern business. Take care of the development.
          </p>
          <Link className="btn btn-outline-light btn-lg mt-3 rounded-pill shadow-sm" to="/AddProduct">
            Get Started
          </Link>
        </div>
      </div>
    </section>

    {/* Additional content sections */}
    <section className="features-section mt-5">
      <h3 className="text-center text-primary">What We Offer</h3>
      <div className="row mt-4">
        <div className="col-md-4 mb-4">
          <Link className="card feature-card shadow-sm border-0 text-center" to="/">
            <div className="card-body">
              <div className="icon-circle bg-primary text-white mb-3">
           <img src="./ready-stock.png" alt="" style={{width:"45px "}} />
              </div>
              <h5 className="card-title">Track Inventory</h5>
              <p className="card-text">Easily manage and track your inventory levels in real-time.</p>
            </div>
          </Link>
        </div>
        <div className="col-md-4 mb-4">
          <Link className="card feature-card shadow-sm border-0 text-center" to="/allProduct">
            <div className="card-body">
              <div className="icon-circle bg-success text-white mb-3">
              <img src="./report.png" alt="" style={{width:"45px ", padding:"5px"}} />
              </div>
              <h5 className="card-title">Generate Reports</h5>
              <p className="card-text">Create detailed reports on inventory status, sales, and more.</p>
              </div>
            </Link>
          </div>
       
        <div className="col-md-4 mb-4">
          <Link className="card feature-card shadow-sm border-0 text-center" to="/ProductList">
            <div className="card-body">
              <div className="icon-circle bg-warning text-white mb-3">
              <img src="./booking.png" alt="" style={{width:"45px "}} />
              </div>
              <h5 className="card-title">Manage Orders</h5>
              <p className="card-text">Keep track of customer orders and streamline your process.</p>
            </div>
          </Link>
        </div>
        </div>

    </section>
      </div>
);

export default Home;
