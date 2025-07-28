import React, { useState } from "react";
import {
  Routes,
  Route,
  Link,
  useNavigate,
  useLocation,
} from "react-router-dom";
import "./App.css";
import HomePage from "./components/HomePage";
import ProductsPage from "./components/ProductsPage";
import AboutPage from "./components/AboutPage";
import ContactPage from "./components/ContactPage";
import CheckoutPage from "./components/CheckoutPage";
import SupportPage from "./components/SupportPage";
import IndustriesPage from "./components/IndustriesPage";
import ProductCard from "./components/ProductCard";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [showCart, setShowCart] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const products = [
    // Pressure Washers
    {
      id: 1,
      name: "Troy-Bilt 3000 PSI High Pressure Washer",
      price: 329.9,
      image:
        "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300&fit=crop",
      category: "pressure-washers",
      brand: "Troy-Bilt",
      power: "3000 PSI / 2.8 GPM",
      type: "Gas Powered",
      description:
        "3000 PSI, 2.8 GPM high pressure washer with Briggs & Stratton Intek X engine. Axial cam pump, stainless steel pistons, thermal relief valve.",
      inStock: true,
    },
    {
      id: 2,
      name: "Honda Pressure Washer 2600 PSI",
      price: 299.99,
      image:
        "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300&fit=crop",
      category: "pressure-washers",
      brand: "Honda / Ex-Cell",
      power: "2600 PSI / 2.5 GPM",
      type: "Gas Powered",
      description:
        "Ex-Cell XR2600-2 with Honda engine, maintenance-free pump, quick connect wand, 25' high pressure hose, 4 nozzles.",
      inStock: true,
    },
    {
      id: 3,
      name: "A-iPower APW3200KH 3200 PSI Pressure Washer",
      price: 349.99,
      image:
        "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300&fit=crop",
      category: "pressure-washers",
      brand: "A-iPower",
      power: "3200 PSI / 2.4 GPM",
      type: "Gas Powered",
      description:
        "196cc 4-stroke Kohler engine, 4 quick connect nozzles, 25 ft. hose, 0.5 gal. soap tank, steel frame, flat-free wheels.",
      inStock: true,
    },
    // Pumps
    {
      id: 4,
      name: "AAA 4000 Max Boost PSI Pump",
      price: 329.9,
      image:
        "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300&fit=crop",
      category: "pumps",
      brand: "AAA",
      power: "4000 PSI / 3.5 GPM",
      type: "Pump",
      description:
        "Heavy-duty replacement pump for pressure washers, 3.5 GPM, brass construction.",
      inStock: true,
    },
    // Accessories
    {
      id: 5,
      name: "Water Seal Kit Briggs & Stratton",
      price: 20.15,
      image:
        "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300&fit=crop",
      category: "accessories",
      brand: "Briggs & Stratton",
      type: "Accessory/Replacement Part",
      description:
        "Double water seal kit for pressure washer pumps, compatible with Briggs & Stratton models.",
      inStock: true,
    },
    {
      id: 6,
      name: "DeWalt Nozzle Cleaning Tool",
      price: 5.52,
      image:
        "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300&fit=crop",
      category: "accessories",
      brand: "DeWalt",
      type: "Accessory",
      description:
        "Cleaning tool for pressure washer nozzles, compatible with most DeWalt models.",
      inStock: true,
    },
  ];

  const addToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCartItems((prev) => prev.filter((item) => item.id !== productId));
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const getCartItemCount = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const getCartTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const isActivePage = (path) => {
    return location.pathname === path;
  };

  return (
    <div className="min-h-screen bg-gray-50 w-full">
      <ScrollToTop />

      {/* Top Bar */}
      <div className="bg-gray-900 text-white text-xs lg:text-sm py-2">
        <div className="w-full mx-auto px-2 sm:px-4 flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
          <div className="flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-6">
            <span>Phone: +1 (555) 123-4567</span>
            <span>Email: info@powerwash-pro.com</span>
          </div>
          <div className="flex items-center">
            <span>Free Shipping on Orders $500+</span>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="w-full mx-auto px-2 sm:px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link
                to="/"
                className="text-2xl lg:text-3xl font-bold text-gray-900 cursor-pointer"
              >
                <span className="text-red-600">The</span> Soft Wash Store
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-8">
              <Link
                to="/"
                className={`text-sm font-medium transition-colors ${
                  isActivePage("/")
                    ? "text-red-600"
                    : "text-gray-700 hover:text-red-600"
                }`}
              >
                Home
              </Link>
              <Link
                to="/products"
                className={`text-sm font-medium transition-colors ${
                  isActivePage("/products")
                    ? "text-red-600"
                    : "text-gray-700 hover:text-red-600"
                }`}
              >
                Products
              </Link>
              <Link
                to="/industries"
                className={`text-sm font-medium transition-colors ${
                  isActivePage("/industries")
                    ? "text-red-600"
                    : "text-gray-700 hover:text-red-600"
                }`}
              >
                Industries
              </Link>
              <Link
                to="/about"
                className={`text-sm font-medium transition-colors ${
                  isActivePage("/about")
                    ? "text-red-600"
                    : "text-gray-700 hover:text-red-600"
                }`}
              >
                About
              </Link>
              <Link
                to="/contact"
                className={`text-sm font-medium transition-colors ${
                  isActivePage("/contact")
                    ? "text-red-600"
                    : "text-gray-700 hover:text-red-600"
                }`}
              >
                Contact
              </Link>
              <Link
                to="/support"
                className={`text-sm font-medium transition-colors ${
                  isActivePage("/support")
                    ? "text-red-600"
                    : "text-gray-700 hover:text-red-600"
                }`}
              >
                Support
              </Link>
            </nav>

            <div className="flex items-center space-x-2 lg:space-x-4">
              {/* Search - Hidden on mobile */}
              <div className="relative hidden md:block">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-48 lg:w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm"
                />
                <svg
                  className="w-5 h-5 text-gray-400 absolute left-3 top-2.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>

              {/* Cart Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setShowCart(!showCart)}
                  className="relative p-2 text-gray-600 hover:text-red-600 transition-colors"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01"
                    />
                  </svg>
                  {getCartItemCount() > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {getCartItemCount()}
                    </span>
                  )}
                </button>

                {/* Cart Dropdown */}
                {showCart && (
                  <div className="absolute right-0 top-full mt-2 w-80 sm:w-96 bg-white shadow-xl rounded-lg border z-50">
                    <div className="p-4">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-semibold">Shopping Cart</h3>
                        <button
                          onClick={() => setShowCart(false)}
                          className="text-gray-400 hover:text-gray-600"
                        >
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </button>
                      </div>

                      {cartItems.length === 0 ? (
                        <p className="text-gray-500 text-center py-8">
                          Your cart is empty
                        </p>
                      ) : (
                        <>
                          <div className="space-y-4 max-h-64 overflow-y-auto">
                            {cartItems.map((item) => (
                              <div
                                key={item.id}
                                className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg"
                              >
                                <img
                                  src={item.image}
                                  alt={item.name}
                                  className="w-12 h-12 object-cover rounded"
                                />
                                <div className="flex-1 min-w-0">
                                  <h4 className="font-medium text-sm truncate">
                                    {item.name}
                                  </h4>
                                  <p className="text-gray-600 text-sm">
                                    ${item.price}
                                  </p>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <button
                                    onClick={() =>
                                      updateQuantity(item.id, item.quantity - 1)
                                    }
                                    className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-sm hover:bg-gray-300"
                                  >
                                    -
                                  </button>
                                  <span className="text-sm w-8 text-center">
                                    {item.quantity}
                                  </span>
                                  <button
                                    onClick={() =>
                                      updateQuantity(item.id, item.quantity + 1)
                                    }
                                    className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-sm hover:bg-gray-300"
                                  >
                                    +
                                  </button>
                                </div>
                                <button
                                  onClick={() => removeFromCart(item.id)}
                                  className="text-red-500 hover:text-red-700"
                                >
                                  <svg
                                    className="w-4 h-4"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                    />
                                  </svg>
                                </button>
                              </div>
                            ))}
                          </div>

                          <div className="border-t pt-4 mt-4">
                            <div className="flex justify-between items-center mb-4">
                              <span className="font-semibold">Total:</span>
                              <span className="font-bold text-lg">
                                ${getCartTotal().toFixed(2)}
                              </span>
                            </div>
                            <Link
                              to="/checkout"
                              onClick={() => setShowCart(false)}
                              className="block w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition-colors text-center"
                            >
                              Proceed to Checkout
                            </Link>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setShowMobileMenu(!showMobileMenu)}
                className="lg:hidden p-2 text-gray-600 hover:text-red-600"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {showMobileMenu && (
            <div className="lg:hidden border-t border-gray-200 py-4">
              <div className="space-y-2">
                <Link
                  to="/"
                  onClick={() => setShowMobileMenu(false)}
                  className={`block w-full text-left px-3 py-2 rounded-lg ${
                    isActivePage("/")
                      ? "text-red-600 bg-red-50"
                      : "text-gray-700"
                  }`}
                >
                  Home
                </Link>
                <Link
                  to="/products"
                  onClick={() => setShowMobileMenu(false)}
                  className={`block w-full text-left px-3 py-2 rounded-lg ${
                    isActivePage("/products")
                      ? "text-red-600 bg-red-50"
                      : "text-gray-700"
                  }`}
                >
                  Products
                </Link>
                <Link
                  to="/about"
                  onClick={() => setShowMobileMenu(false)}
                  className={`block w-full text-left px-3 py-2 rounded-lg ${
                    isActivePage("/about")
                      ? "text-red-600 bg-red-50"
                      : "text-gray-700"
                  }`}
                >
                  About
                </Link>
                <Link
                  to="/contact"
                  onClick={() => setShowMobileMenu(false)}
                  className={`block w-full text-left px-3 py-2 rounded-lg ${
                    isActivePage("/contact")
                      ? "text-red-600 bg-red-50"
                      : "text-gray-700"
                  }`}
                >
                  Contact
                </Link>
              </div>

              {/* Mobile Search */}
              <div className="mt-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  />
                  <svg
                    className="w-5 h-5 text-gray-400 absolute left-3 top-2.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Routes */}
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              filteredProducts={filteredProducts}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              navigate={navigate}
              addToCart={addToCart}
            />
          }
        />
        <Route
          path="/products"
          element={
            <ProductsPage
              filteredProducts={filteredProducts}
              addToCart={addToCart}
            />
          }
        />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/industries" element={<IndustriesPage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route
          path="/checkout"
          element={
            <CheckoutPage
              cartItems={cartItems}
              getCartTotal={getCartTotal}
              setShowCart={setShowCart}
            />
          }
        />
      </Routes>

      {/* Footer */}
      <footer className="bg-red-600 text-white">
        <div className="w-full mx-auto px-2 sm:px-4 py-8 lg:py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8">
            <div className="sm:col-span-2 lg:col-span-2">
              <div className="text-2xl font-bold mb-4">
                <span className="text-white">The</span> Soft Wash Store
              </div>
              <p className="text-red-100 mb-6 max-w-2xl">
                Leading supplier of professional power washing equipment and
                industrial cleaning solutions. Serving commercial, industrial,
                and municipal clients nationwide.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-red-200 hover:text-white transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-red-200 hover:text-white transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-red-200 hover:text-white transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Products</h4>
              <ul className="space-y-2 text-red-100">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Pressure Washers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Water Pumps
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Surface Cleaners
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Hoses & Reels
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Replacement Parts
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-red-100">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Technical Support
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Installation Guide
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Warranty Information
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Returns & Exchanges
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Service Centers
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-red-100 text-sm">
                <p>
                  1234 Industrial Boulevard
                  <br />
                  Manufacturing District, ST 12345
                </p>
                <p>Phone: +1 (555) 123-4567</p>
                <p>Email: info@powerwash-pro.com</p>
                <p>Hours: Mon-Fri 8AM-6PM EST</p>
              </div>
            </div>
          </div>

          <div className="border-t border-red-500 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-red-100">
            <p>&copy; 2024 The Soft Wash Store. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
