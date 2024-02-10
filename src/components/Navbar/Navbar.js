import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container py-2">
          <Link className="navbar-brand" to="/">
            <img
              src="/logo.png"
              alt=""
              height="24"
              className="d-inline-block align-text-top"
              style={{ filter: "brightness(0) invert(1)" }}
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Find a Course
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/dashboard"
                >
                  My Dashboard
                </Link>
              </li>
            </ul>
          </div>

          {/* New div for user profile */}
          <div className="user-profile d-none d-sm-block">
            <img src="/user-avatar.png" alt="User Avatar" className="avatar" />
            <span className="username">Souvagya</span>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
