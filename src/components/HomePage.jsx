import React, { useState } from "react";
import ProductCard from "./ProductCard";

const HomePage = ({
  filteredProducts,
  selectedCategory,
  setSelectedCategory,
  navigate,
  addToCart,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6; // Show 6 products per page

  // Calculate pagination
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-20 lg:py-32">
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage: "url('hero.png')",
          }}
        ></div>
        <div className="relative w-full mx-auto px-2 sm:px-4">
          <div className="text-center max-w-5xl mx-auto">
            <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold mb-6">
              Professional <span className="text-red-400">Power Washing</span>{" "}
              <span className="text-gray-200">Equipment</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-200 mb-8 max-w-4xl mx-auto leading-relaxed">
              Leading supplier of industrial-grade pressure washers, pumps, and
              cleaning accessories. Trusted by professionals nationwide for over
              25 years.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate("/products")}
                className="bg-red-600 text-white px-8 py-4 rounded-lg hover:bg-red-700 transition-all font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Shop Equipment
              </button>
              <button
                onClick={() => navigate("/contact")}
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-all font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Get Quote
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <section className="py-12 bg-gray-50">
        <div className="w-full mx-auto px-2 sm:px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Browse by Category
            </h2>
            <p className="text-gray-600">
              Find the perfect equipment for your needs
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                selectedCategory === "all"
                  ? "bg-red-600 text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-red-50 border border-gray-200"
              }`}
            >
              All Products
            </button>
            <button
              onClick={() => setSelectedCategory("pressure-washers")}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                selectedCategory === "pressure-washers"
                  ? "bg-red-600 text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-red-50 border border-gray-200"
              }`}
            >
              Pressure Washers
            </button>
            <button
              onClick={() => setSelectedCategory("pumps")}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                selectedCategory === "pumps"
                  ? "bg-red-600 text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-red-50 border border-gray-200"
              }`}
            >
              Pumps & Motors
            </button>
            <button
              onClick={() => setSelectedCategory("accessories")}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                selectedCategory === "accessories"
                  ? "bg-red-600 text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-red-50 border border-gray-200"
              }`}
            >
              Accessories
            </button>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="w-full mx-auto px-2 sm:px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Featured Products
            </h2>
            <p className="text-gray-600">Discover our most popular equipment</p>
          </div>

          {currentProducts.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {currentProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    addToCart={addToCart}
                  />
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center items-center space-x-2">
                  {/* Previous Button */}
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                      currentPage === 1
                        ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                        : "bg-red-600 text-white hover:bg-red-700"
                    }`}
                  >
                    Previous
                  </button>

                  {/* Page Numbers */}
                  <div className="flex space-x-1">
                    {Array.from(
                      { length: totalPages },
                      (_, index) => index + 1
                    ).map((page) => (
                      <button
                        key={page}
                        onClick={() => handlePageChange(page)}
                        className={`px-3 py-2 rounded-lg font-medium transition-colors ${
                          currentPage === page
                            ? "bg-red-600 text-white"
                            : "bg-white text-gray-700 hover:bg-red-50 border border-gray-200"
                        }`}
                      >
                        {page}
                      </button>
                    ))}
                  </div>

                  {/* Next Button */}
                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                      currentPage === totalPages
                        ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                        : "bg-red-600 text-white hover:bg-red-700"
                    }`}
                  >
                    Next
                  </button>
                </div>
              )}

              {/* View All Products Button */}
              <div className="text-center mt-8">
                <button
                  onClick={() => navigate("/products")}
                  className="bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors font-semibold"
                >
                  View All Products ({filteredProducts.length})
                </button>
              </div>
            </>
          ) : (
            <div className="text-center py-12">
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
              <p className="text-gray-600">
                Try selecting a different category or view all products.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="w-full mx-auto px-2 sm:px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose PowerWash Pro?
            </h2>
            <p className="text-gray-600 max-w-4xl mx-auto">
              We provide the highest quality equipment and exceptional service
              to help your business succeed.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-red-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Quality Guaranteed
              </h3>
              <p className="text-gray-600 text-sm">
                All equipment meets rigorous industry standards
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-red-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Competitive Pricing
              </h3>
              <p className="text-gray-600 text-sm">
                Best value for professional equipment
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-red-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Expert Support
              </h3>
              <p className="text-gray-600 text-sm">
                24/7 technical assistance available
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-red-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Fast Shipping
              </h3>
              <p className="text-gray-600 text-sm">
                Quick delivery to your location
              </p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default HomePage;
