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
      name: "Professional 3000 PSI Pressure Washer",
      price: 899.99,
      image:
        "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300&fit=crop",
      category: "pressure-washers",
      brand: "PowerWash Pro",
      power: "3000 PSI",
      type: "Gas Powered",
      description:
        "Heavy-duty commercial pressure washer with 3000 PSI for industrial cleaning applications.",
      inStock: true,
    },
    {
      id: 2,
      name: "Electric 2000 PSI Pressure Washer",
      price: 299.99,
      image:
        "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300&fit=crop",
      category: "pressure-washers",
      brand: "CleanForce",
      power: "2000 PSI",
      type: "Electric",
      description:
        "Quiet and efficient electric pressure washer perfect for residential use.",
      inStock: true,
    },
    {
      id: 3,
      name: "Industrial 4000 PSI Hot Water Washer",
      price: 2499.99,
      image:
        "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300&fit=crop",
      category: "pressure-washers",
      brand: "IndustrialMax",
      power: "4000 PSI",
      type: "Hot Water",
      description:
        "Professional hot water pressure washer for grease and oil removal.",
      inStock: false,
    },
    {
      id: 4,
      name: "Portable 1500 PSI Pressure Washer",
      price: 199.99,
      image:
        "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300&fit=crop",
      category: "pressure-washers",
      brand: "MobileClean",
      power: "1500 PSI",
      type: "Portable",
      description:
        "Lightweight and portable pressure washer for mobile cleaning services.",
      inStock: true,
    },
    {
      id: 5,
      name: "Commercial 3500 PSI Diesel Washer",
      price: 1899.99,
      image:
        "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300&fit=crop",
      category: "pressure-washers",
      brand: "DieselPro",
      power: "3500 PSI",
      type: "Diesel",
      description:
        "High-performance diesel pressure washer for heavy-duty commercial use.",
      inStock: false,
    },
    {
      id: 6,
      name: "Residential 1800 PSI Pressure Washer",
      price: 249.99,
      image:
        "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300&fit=crop",
      category: "pressure-washers",
      brand: "HomeClean",
      power: "1800 PSI",
      type: "Electric",
      description: "Perfect for home use with easy operation and maintenance.",
      inStock: true,
    },
    {
      id: 7,
      name: "Industrial 5000 PSI Ultra High Pressure",
      price: 3999.99,
      image:
        "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300&fit=crop",
      category: "pressure-washers",
      brand: "UltraMax",
      power: "5000 PSI",
      type: "Industrial",
      description:
        "Ultra high-pressure washer for the most demanding industrial applications.",
      inStock: false,
    },
    {
      id: 8,
      name: "Compact 1200 PSI Pressure Washer",
      price: 149.99,
      image:
        "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300&fit=crop",
      category: "pressure-washers",
      brand: "CompactPro",
      power: "1200 PSI",
      type: "Compact",
      description: "Space-saving compact pressure washer for small spaces.",
      inStock: true,
    },

    // Pumps & Motors
    {
      id: 9,
      name: "High-Pressure Triplex Pump",
      price: 599.99,
      image:
        "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300&fit=crop",
      category: "pumps",
      brand: "PumpMaster",
      power: "3000 PSI",
      type: "Triplex",
      description: "Professional triplex pump for high-pressure applications.",
      inStock: true,
    },
    {
      id: 10,
      name: "Industrial Cat Pump",
      price: 899.99,
      image:
        "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300&fit=crop",
      category: "pumps",
      brand: "CatPump",
      power: "4000 PSI",
      type: "Industrial",
      description: "Heavy-duty industrial pump for continuous operation.",
      inStock: false,
    },
    {
      id: 11,
      name: "Electric Motor 5HP",
      price: 399.99,
      image:
        "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300&fit=crop",
      category: "pumps",
      brand: "MotorTech",
      power: "5 HP",
      type: "Electric",
      description:
        "High-efficiency electric motor for pressure washer applications.",
      inStock: true,
    },
    {
      id: 12,
      name: "Gas Engine 13HP",
      price: 699.99,
      image:
        "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300&fit=crop",
      category: "pumps",
      brand: "EnginePro",
      power: "13 HP",
      type: "Gas",
      description: "Powerful gas engine for commercial pressure washing.",
      inStock: true,
    },
    {
      id: 13,
      name: "Diesel Engine 18HP",
      price: 1299.99,
      image:
        "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300&fit=crop",
      category: "pumps",
      brand: "DieselMax",
      power: "18 HP",
      type: "Diesel",
      description: "Heavy-duty diesel engine for industrial applications.",
      inStock: false,
    },
    {
      id: 14,
      name: "Plunger Pump Assembly",
      price: 299.99,
      image:
        "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300&fit=crop",
      category: "pumps",
      brand: "PlungerPro",
      power: "2500 PSI",
      type: "Plunger",
      description: "Reliable plunger pump for consistent pressure output.",
      inStock: true,
    },
    {
      id: 15,
      name: "Gear Pump System",
      price: 449.99,
      image:
        "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300&fit=crop",
      category: "pumps",
      brand: "GearTech",
      power: "2000 PSI",
      type: "Gear",
      description: "Smooth operation gear pump for low-pressure applications.",
      inStock: true,
    },
    {
      id: 16,
      name: "Variable Speed Motor",
      price: 549.99,
      image:
        "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300&fit=crop",
      category: "pumps",
      brand: "VariablePro",
      power: "7.5 HP",
      type: "Variable Speed",
      description: "Variable speed motor for precise pressure control.",
      inStock: false,
    },

    // Accessories
    {
      id: 17,
      name: "Professional Surface Cleaner",
      price: 199.99,
      image:
        "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300&fit=crop",
      category: "accessories",
      brand: "SurfacePro",
      power: "3000 PSI",
      type: "Surface Cleaner",
      description: "Professional surface cleaner attachment for large areas.",
      inStock: true,
    },
    {
      id: 18,
      name: "Rotating Turbo Nozzle",
      price: 89.99,
      image:
        "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300&fit=crop",
      category: "accessories",
      brand: "TurboMax",
      power: "4000 PSI",
      type: "Nozzle",
      description: "High-performance rotating turbo nozzle for tough cleaning.",
      inStock: true,
    },
    {
      id: 19,
      name: "50ft High-Pressure Hose",
      price: 129.99,
      image:
        "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300&fit=crop",
      category: "accessories",
      brand: "HosePro",
      power: "5000 PSI",
      type: "Hose",
      description: "Heavy-duty high-pressure hose for extended reach.",
      inStock: true,
    },
    {
      id: 20,
      name: "Chemical Injection System",
      price: 159.99,
      image:
        "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300&fit=crop",
      category: "accessories",
      brand: "ChemInject",
      power: "3000 PSI",
      type: "Chemical System",
      description:
        "Professional chemical injection system for cleaning solutions.",
      inStock: false,
    },
    {
      id: 21,
      name: 'Extension Wand 36"',
      price: 79.99,
      image:
        "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300&fit=crop",
      category: "accessories",
      brand: "WandPro",
      power: "4000 PSI",
      type: "Wand",
      description: "Extended reach wand for hard-to-reach areas.",
      inStock: true,
    },
    {
      id: 22,
      name: "Foam Cannon Attachment",
      price: 69.99,
      image:
        "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300&fit=crop",
      category: "accessories",
      brand: "FoamMaster",
      power: "2000 PSI",
      type: "Foam Cannon",
      description: "Foam cannon for applying cleaning solutions evenly.",
      inStock: true,
    },
    {
      id: 23,
      name: "Quick Connect Fittings Set",
      price: 49.99,
      image:
        "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300&fit=crop",
      category: "accessories",
      brand: "QuickConnect",
      power: "5000 PSI",
      type: "Fittings",
      description:
        "Complete set of quick connect fittings for easy attachment changes.",
      inStock: true,
    },
    {
      id: 24,
      name: "Pressure Gauge Kit",
      price: 39.99,
      image:
        "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300&fit=crop",
      category: "accessories",
      brand: "GaugePro",
      power: "6000 PSI",
      type: "Gauge",
      description: "Precision pressure gauge for monitoring system pressure.",
      inStock: true,
    },
    {
      id: 25,
      name: "Water Filter System",
      price: 199.99,
      image:
        "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300&fit=crop",
      category: "accessories",
      brand: "FilterMax",
      power: "4000 PSI",
      type: "Filter",
      description:
        "Professional water filtration system for clean water supply.",
      inStock: false,
    },
    {
      id: 26,
      name: "Safety Glasses & Gloves Kit",
      price: 29.99,
      image:
        "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300&fit=crop",
      category: "accessories",
      brand: "SafetyPro",
      power: "N/A",
      type: "Safety",
      description:
        "Complete safety kit including glasses and heavy-duty gloves.",
      inStock: true,
    },
    {
      id: 27,
      name: "Detergent Tank 5 Gallon",
      price: 89.99,
      image:
        "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300&fit=crop",
      category: "accessories",
      brand: "TankPro",
      power: "3000 PSI",
      type: "Tank",
      description:
        "Large capacity detergent tank for extended cleaning sessions.",
      inStock: true,
    },
    {
      id: 28,
      name: "Wheel Kit for Pressure Washer",
      price: 119.99,
      image:
        "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300&fit=crop",
      category: "accessories",
      brand: "WheelPro",
      power: "N/A",
      type: "Wheels",
      description: "Heavy-duty wheel kit for easy mobility of pressure washer.",
      inStock: true,
    },
    {
      id: 29,
      name: "Trigger Gun with Safety Lock",
      price: 59.99,
      image:
        "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300&fit=crop",
      category: "accessories",
      brand: "TriggerPro",
      power: "5000 PSI",
      type: "Trigger Gun",
      description: "Professional trigger gun with safety lock mechanism.",
      inStock: false,
    },
    {
      id: 30,
      name: "Nozzle Set (5-Piece)",
      price: 44.99,
      image:
        "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300&fit=crop",
      category: "accessories",
      brand: "NozzlePro",
      power: "4000 PSI",
      type: "Nozzles",
      description:
        "Complete nozzle set with different spray patterns and angles.",
      inStock: true,
    },
    {
      id: 31,
      name: "Pressure Washer Cover",
      price: 34.99,
      image:
        "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300&fit=crop",
      category: "accessories",
      brand: "CoverPro",
      power: "N/A",
      type: "Cover",
      description: "Weather-resistant cover to protect your pressure washer.",
      inStock: true,
    },
    {
      id: 32,
      name: "Stainless Steel Wand",
      price: 89.99,
      image:
        "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300&fit=crop",
      category: "accessories",
      brand: "StainlessPro",
      power: "5000 PSI",
      type: "Wand",
      description: "Corrosion-resistant stainless steel wand for longevity.",
      inStock: true,
    },
    {
      id: 33,
      name: "Digital Pressure Controller",
      price: 299.99,
      image:
        "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300&fit=crop",
      category: "accessories",
      brand: "DigitalPro",
      power: "6000 PSI",
      type: "Controller",
      description:
        "Digital pressure controller for precise pressure management.",
      inStock: false,
    },
    {
      id: 34,
      name: "Heavy-Duty Hose Reel",
      price: 179.99,
      image:
        "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300&fit=crop",
      category: "accessories",
      brand: "ReelPro",
      power: "5000 PSI",
      type: "Hose Reel",
      description: "Professional hose reel for organized hose storage.",
      inStock: true,
    },
    {
      id: 35,
      name: "Multi-Surface Cleaning Kit",
      price: 149.99,
      image:
        "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300&fit=crop",
      category: "accessories",
      brand: "MultiClean",
      power: "3000 PSI",
      type: "Cleaning Kit",
      description: "Complete kit for cleaning various surfaces effectively.",
      inStock: true,
    },
    {
      id: 36,
      name: "Pressure Washer Stand",
      price: 79.99,
      image:
        "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300&fit=crop",
      category: "accessories",
      brand: "StandPro",
      power: "N/A",
      type: "Stand",
      description: "Stable stand to mount your pressure washer securely.",
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
                <span className="text-red-600">Power</span>Wash Pro
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
                <span className="text-white">Power</span>Wash Pro
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
            <p>&copy; 2024 PowerWash Pro. All rights reserved.</p>
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
