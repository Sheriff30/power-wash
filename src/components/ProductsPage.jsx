import React, { useState } from "react";
import ProductCard from "./ProductCard";

const ProductsPage = ({ filteredProducts, addToCart }) => {
  const [priceRange, setPriceRange] = useState([0, 10000]);
  const [selectedBrand, setSelectedBrand] = useState("all");
  const [selectedPower, setSelectedPower] = useState("all");
  const [selectedType, setSelectedType] = useState("all");
  const [sortBy, setSortBy] = useState("name");

  // Get unique brands and power ratings from products
  const brands = [...new Set(filteredProducts.map((product) => product.brand))];
  const powerRatings = [
    ...new Set(filteredProducts.map((product) => product.power)),
  ];
  const types = [...new Set(filteredProducts.map((product) => product.type))];

  // Filter products based on advanced filters
  const getFilteredProducts = () => {
    return filteredProducts
      .filter((product) => {
        const matchesPrice =
          product.price >= priceRange[0] && product.price <= priceRange[1];
        const matchesBrand =
          selectedBrand === "all" || product.brand === selectedBrand;
        const matchesPower =
          selectedPower === "all" || product.power === selectedPower;
        const matchesType =
          selectedType === "all" || product.type === selectedType;

        return matchesPrice && matchesBrand && matchesPower && matchesType;
      })
      .sort((a, b) => {
        switch (sortBy) {
          case "price-low":
            return a.price - b.price;
          case "price-high":
            return b.price - a.price;
          case "name":
            return a.name.localeCompare(b.name);
          case "brand":
            return a.brand.localeCompare(b.brand);
          default:
            return 0;
        }
      });
  };

  const filteredAndSortedProducts = getFilteredProducts();

  return (
    <section className="py-8 lg:py-12 min-h-screen bg-gray-50">
      <div className="w-full mx-auto px-2 sm:px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            All Products
          </h1>
          <p className="text-gray-600">
            Find the perfect power washing equipment for your needs
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Advanced Filters Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
              <h2 className="text-lg font-semibold text-gray-900 mb-6">
                Filters
              </h2>

              {/* Price Range */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-700 mb-3">
                  Price Range
                </h3>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="10000"
                    value={priceRange[1]}
                    onChange={(e) =>
                      setPriceRange([priceRange[0], parseInt(e.target.value)])
                    }
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex space-x-2">
                    <input
                      type="number"
                      value={priceRange[0]}
                      onChange={(e) =>
                        setPriceRange([parseInt(e.target.value), priceRange[1]])
                      }
                      className="w-20 px-2 py-1 text-sm border border-gray-300 rounded"
                      placeholder="Min"
                    />
                    <span className="text-gray-500">-</span>
                    <input
                      type="number"
                      value={priceRange[1]}
                      onChange={(e) =>
                        setPriceRange([priceRange[0], parseInt(e.target.value)])
                      }
                      className="w-20 px-2 py-1 text-sm border border-gray-300 rounded"
                      placeholder="Max"
                    />
                  </div>
                </div>
              </div>

              {/* Brand Filter */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-700 mb-3">
                  Brand
                </h3>
                <select
                  value={selectedBrand}
                  onChange={(e) => setSelectedBrand(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                >
                  <option value="all">All Brands</option>
                  {brands.map((brand) => (
                    <option key={brand} value={brand}>
                      {brand}
                    </option>
                  ))}
                </select>
              </div>

              {/* Power Rating Filter */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-700 mb-3">
                  Power Rating
                </h3>
                <select
                  value={selectedPower}
                  onChange={(e) => setSelectedPower(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                >
                  <option value="all">All Power Ratings</option>
                  {powerRatings.map((power) => (
                    <option key={power} value={power}>
                      {power}
                    </option>
                  ))}
                </select>
              </div>

              {/* Type Filter */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-700 mb-3">Type</h3>
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                >
                  <option value="all">All Types</option>
                  {types.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              {/* Sort By */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-700 mb-3">
                  Sort By
                </h3>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                >
                  <option value="name">Name A-Z</option>
                  <option value="brand">Brand A-Z</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
              </div>

              {/* Clear Filters */}
              <button
                onClick={() => {
                  setPriceRange([0, 10000]);
                  setSelectedBrand("all");
                  setSelectedPower("all");
                  setSelectedType("all");
                  setSortBy("name");
                }}
                className="w-full bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors text-sm"
              >
                Clear All Filters
              </button>
            </div>
          </div>

          {/* Products Grid */}
          <div className="lg:col-span-3">
            {/* Results Header */}
            <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <p className="text-gray-600 mb-2 sm:mb-0">
                  Showing {filteredAndSortedProducts.length} of{" "}
                  {filteredProducts.length} products
                </p>
                <div className="flex items-center space-x-4">
                  <span className="text-sm text-gray-600">Active Filters:</span>
                  {selectedBrand !== "all" && (
                    <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs">
                      Brand: {selectedBrand}
                    </span>
                  )}
                  {selectedPower !== "all" && (
                    <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs">
                      Power: {selectedPower}
                    </span>
                  )}
                  {selectedType !== "all" && (
                    <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs">
                      Type: {selectedType}
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Products Grid */}
            {filteredAndSortedProducts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredAndSortedProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    addToCart={addToCart}
                  />
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-sm p-12 text-center">
                <svg
                  className="w-16 h-16 text-gray-400 mx-auto mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.47-.881-6.08-2.33"
                  />
                </svg>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  No products found
                </h3>
                <p className="text-gray-600 mb-4">
                  Try adjusting your filters to find what you're looking for.
                </p>
                <button
                  onClick={() => {
                    setPriceRange([0, 10000]);
                    setSelectedBrand("all");
                    setSelectedPower("all");
                    setSelectedType("all");
                    setSortBy("name");
                  }}
                  className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsPage;
