import React from "react";

const ProductCard = ({ product, addToCart }) => {
  const handleAddToCart = () => {
    if (product.inStock) {
      addToCart(product);
    }
  };

  return (
    <div
      className={`bg-white rounded-lg shadow-sm border ${
        product.inStock ? "border-gray-200 hover:shadow-lg" : "border-red-200"
      } transition-all overflow-hidden`}
    >
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className={`w-full h-48 object-cover ${
            !product.inStock ? "filter grayscale opacity-75" : ""
          }`}
        />
        {!product.inStock && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
              Out of Stock
            </span>
          </div>
        )}
        {product.inStock && (
          <div className="absolute top-2 right-2">
            <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-semibold">
              In Stock
            </span>
          </div>
        )}
      </div>

      <div className="p-4">
        <div className="mb-2">
          <span className="text-xs font-medium text-red-600 bg-red-50 px-2 py-1 rounded">
            {product.brand}
          </span>
        </div>

        <h3
          className={`font-semibold text-gray-900 mb-2 line-clamp-2 ${
            !product.inStock ? "text-gray-500" : ""
          }`}
        >
          {product.name}
        </h3>

        <p
          className={`text-sm text-gray-600 mb-3 line-clamp-2 ${
            !product.inStock ? "text-gray-400" : ""
          }`}
        >
          {product.description}
        </p>

        <div className="flex items-center justify-between mb-3">
          <div className="flex flex-col">
            <span className="text-xs text-gray-500">Power</span>
            <span
              className={`text-sm font-medium ${
                !product.inStock ? "text-gray-400" : "text-gray-900"
              }`}
            >
              {product.power}
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs text-gray-500">Type</span>
            <span
              className={`text-sm font-medium ${
                !product.inStock ? "text-gray-400" : "text-gray-900"
              }`}
            >
              {product.type}
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <span
            className={`text-lg font-bold ${
              !product.inStock ? "text-gray-400" : "text-gray-900"
            }`}
          >
            ${product.price.toFixed(2)}
          </span>

          <button
            onClick={handleAddToCart}
            disabled={!product.inStock}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              product.inStock
                ? "bg-red-600 text-white hover:bg-red-700 transform hover:scale-105"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            {product.inStock ? "Add to Cart" : "Out of Stock"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
