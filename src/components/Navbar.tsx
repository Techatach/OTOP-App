"use client";

// import React from "react";
import React, { useState } from "react";
import Script from "next/script";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <meta charSet="utf-8" />
      <title>MultiShop - Online Shop Website Template</title>
      <meta content="width=device-width, initial-scale=1.0" name="viewport" />
      <meta content="Free HTML Templates" name="keywords" />
      <meta content="Free HTML Templates" name="description" />

      {/* <!-- Favicon --> */}
      <link href="img/favicon.ico" rel="icon" />

      {/* <!-- Google Web Fonts --> */}
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
        rel="stylesheet"
      />

      {/* <!-- Font Awesome --> */}
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css"
        rel="stylesheet"
      />

      {/* <!-- Libraries Stylesheet --> */}
      <link href="lib/animate/animate.min.css" rel="stylesheet" />
      <link
        href="lib/owlcarousel/assets/owl.carousel.min.css"
        rel="stylesheet"
      />

      {/* <!-- Customized Bootstrap Stylesheet --> */}
      <link href="css/style.css" rel="stylesheet" />

      {/* Topbar Start */}
      <div className="container-fluid">
        <div className="row bg-secondary py-1 px-xl-5">
          <div className="col-lg-6 d-none d-lg-block">
            <div className="d-inline-flex align-items-center h-100">
              <a className="text-body mr-3" href="">
                About
              </a>
              <a className="text-body mr-3" href="">
                Contact
              </a>
              <a className="text-body mr-3" href="">
                Help
              </a>
              <a className="text-body mr-3" href="">
                FAQs
              </a>
            </div>
          </div>
          <div className="col-lg-6 text-center text-lg-right">
            <div className="d-inline-flex align-items-center">
              <div className="btn-group">
                <button
                  type="button"
                  className="btn btn-sm btn-light dropdown-toggle"
                  data-toggle="dropdown"
                >
                  My Account
                </button>
                <div className="dropdown-menu dropdown-menu-right">
                  <button className="dropdown-item" type="button">
                    Sign in
                  </button>
                  <button className="dropdown-item" type="button">
                    Sign up
                  </button>
                </div>
              </div>
              <div className="btn-group mx-2">
                <button
                  type="button"
                  className="btn btn-sm btn-light dropdown-toggle"
                  data-toggle="dropdown"
                >
                  USD
                </button>
                <div className="dropdown-menu dropdown-menu-right">
                  <button className="dropdown-item" type="button">
                    EUR
                  </button>
                  <button className="dropdown-item" type="button">
                    GBP
                  </button>
                  <button className="dropdown-item" type="button">
                    CAD
                  </button>
                </div>
              </div>
              <div className="btn-group">
                <button
                  type="button"
                  className="btn btn-sm btn-light dropdown-toggle"
                  data-toggle="dropdown"
                >
                  EN
                </button>
                <div className="dropdown-menu dropdown-menu-right">
                  <button className="dropdown-item" type="button">
                    FR
                  </button>
                  <button className="dropdown-item" type="button">
                    AR
                  </button>
                  <button className="dropdown-item" type="button">
                    RU
                  </button>
                </div>
              </div>
            </div>
            <div className="d-inline-flex align-items-center d-block d-lg-none">
              <a href="" className="btn px-0 ml-2">
                <i className="fas fa-heart text-dark" />
                <span
                  className="badge text-dark border border-dark rounded-circle"
                  style={{ paddingBottom: 2 }}
                >
                  0
                </span>
              </a>
              <a href="" className="btn px-0 ml-2">
                <i className="fas fa-shopping-cart text-dark" />
                <span
                  className="badge text-dark border border-dark rounded-circle"
                  style={{ paddingBottom: 2 }}
                >
                  0
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="row align-items-center bg-light py-3 px-xl-5 d-none d-lg-flex">
          <div className="col-lg-4">
            <a href="/" className="text-decoration-none">
              <span className="h1 text-uppercase text-primary bg-dark px-2">
                สินค้า
              </span>
              <span className="h1 text-uppercase text-dark bg-primary px-2 ml-n1">
                OTOP
              </span>
            </a>
          </div>
          <div className="col-lg-4 col-6 text-left">
            <form action="">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search for products"
                />
                <div className="input-group-append">
                  <span className="input-group-text bg-transparent text-primary">
                    <i className="fa fa-search" />
                  </span>
                </div>
              </div>
            </form>
          </div>
          <div className="col-lg-4 col-6 text-right">
            <p className="m-0">Customer Service</p>
            <h5 className="m-0">+012 345 6789</h5>
          </div>
        </div>
      </div>
      {/* Topbar End */}
      {/* Navbar Start */}
      <div className="container-fluid bg-dark mb-30">
        <div className="row px-xl-5">
          <div className="col-lg-3 d-none d-lg-block">
            <button
              className="btn d-flex align-items-center justify-content-between bg-primary w-100"
              style={{ height: 65, padding: "0 30px" }}
              onClick={() => setIsOpen(!isOpen)}
            >
              <h6 className="text-dark m-0">
                <i className="fa fa-bars mr-2" />
                Categories
              </h6>
              <i
                className={`fa ${
                  isOpen ? "fa-angle-up" : "fa-angle-down"
                } text-dark`}
              />
            </button>
            {isOpen && (
              <nav
                className="position-absolute navbar navbar-vertical navbar-light align-items-start p-0 bg-light"
                style={{ width: "calc(100% - 30px)", zIndex: 999 }}
              >
                <div className="navbar-nav w-100">
                  <div className="nav-item dropdown dropright">
                    <a
                      href="#"
                      className="nav-link dropdown-toggle"
                      data-toggle="dropdown"
                    >
                      เสื้อผ้า{" "}
                      <i className="fa fa-angle-right float-right mt-1"></i>
                    </a>
                    <div className="dropdown-menu position-absolute rounded-0 border-0 m-0">
                      <a href="/shop" className="dropdown-item">
                        เสื้อผ้าบุรุษ
                      </a>
                      <a href="/shop" className="dropdown-item">
                        เสื้อผ้าสตรี
                      </a>
                      <a href="/shop" className="dropdown-item">
                        เสื้อผ้า
                      </a>
                    </div>
                  </div>
                  <a href="" className="nav-item nav-link">
                    Shirts
                  </a>
                  <a href="" className="nav-item nav-link">
                    Jeans
                  </a>
                  <a href="" className="nav-item nav-link">
                    Swimwear
                  </a>
                  <a href="" className="nav-item nav-link">
                    Sleepwear
                  </a>
                  <a href="" className="nav-item nav-link">
                    Sportswear
                  </a>
                  <a href="" className="nav-item nav-link">
                    Jumpsuits
                  </a>
                  <a href="" className="nav-item nav-link">
                    Blazers
                  </a>
                  <a href="" className="nav-item nav-link">
                    Jackets
                  </a>
                  <a href="" className="nav-item nav-link">
                    Shoes
                  </a>
                </div>
              </nav>
            )}
          </div>

          <div className="col-lg-9">
            <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3 py-lg-0 px-0">
              <a href="/" className="text-decoration-none d-block d-lg-none">
                <span className="h1 text-uppercase text-dark bg-light px-2">
                  Multi
                </span>
                <span className="h1 text-uppercase text-light bg-primary px-2 ml-n1">
                  Shop
                </span>
              </a>
              <button
                type="button"
                className="navbar-toggler"
                data-toggle="collapse"
                data-target="#navbarCollapse"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div
                className="navbar-collapse justify-content-between"
                id="navbarCollapse"
              >
                <div className="navbar-nav mr-auto py-0">
                  <a href="/" className="nav-item nav-link active">
                    หน้าหลัก
                  </a>
                  <a href="/shop" className="nav-item nav-link">
                    สินค้า
                  </a>
                  <a href="/detail" className="nav-item nav-link">
                    รายละเอียด
                  </a>
                  <div className="nav-item dropdown">
                    <a
                      href="#"
                      className="nav-link dropdown-toggle"
                      data-toggle="dropdown"
                    >
                      สั่งซื้อสินค้า <i className="fa fa-angle-down mt-1" />
                    </a>
                    <div className="dropdown-menu bg-primary rounded-0 border-0 m-0">
                      <a href="/cart" className="dropdown-item">
                        ตะกร้าสินค้า
                      </a>
                      <a href="/checkout" className="dropdown-item">
                        ชำระเงิน
                      </a>
                    </div>
                  </div>
                  <a href="/contact" className="nav-item nav-link">
                    ติดต่อ
                  </a>
                  <a href="/ai" className="nav-item nav-link">
                    บริการตรวจสุขภาพ
                  </a>
                </div>
                <div className="navbar-nav ml-auto py-0 d-none d-lg-block">
                  <a href="" className="btn px-0">
                    <i className="fas fa-heart text-primary" />
                    <span
                      className="badge text-secondary border border-secondary rounded-circle"
                      style={{ paddingBottom: 2 }}
                    >
                      0
                    </span>
                  </a>
                  <a href="" className="btn px-0 ml-3">
                    <i className="fas fa-shopping-cart text-primary" />
                    <span
                      className="badge text-secondary border border-secondary rounded-circle"
                      style={{ paddingBottom: 2 }}
                    >
                      0
                    </span>
                  </a>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
      {/* Navbar End */}

      {/* JavaScript Libraries */}
      <Script src="https://code.jquery.com/jquery-3.4.1.min.js"></Script>
      <Script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.bundle.min.js"></Script>
      <Script src="lib/easing/easing.min.js"></Script>
      <Script src="lib/owlcarousel/owl.carousel.min.js"></Script>
      {/* Contact Javascript File */}
      <Script src="mail/jqBootstrapValidation.min.js"></Script>
      <Script src="mail/contact.js"></Script>

      {/* Template Javascript */}
      <Script src="js/main.js"></Script>
    </div>
  );
}
