import React, { useState, useEffect, useRef } from "react";
import { X } from "lucide-react";
import { SearchIcon, HeartIcon, BagIcon } from "../common/BrandIcons";
import { trendingProducts } from "../../data/products";

export default function SearchModal({ isOpen, onClose, onAddToBag, onToggleWishlist, wishlist }) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      // Small timeout for smooth slide transition before focus
      const timer = setTimeout(() => inputRef.current?.focus(), 150);
      return () => clearTimeout(timer);
    } else {
      setQuery("");
      setResults([]);
    }
  }, [isOpen]);

  useEffect(() => {
    if (query.trim() === "") {
      setResults([]);
    } else {
      const filtered = trendingProducts.filter((p) =>
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.category.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filtered);
    }
  }, [query]);

  if (!isOpen) return null;

  const popularSearches = ["Jordan", "Air Max", "Vomero", "Pegasus", "Sabrina", "Fleece"];

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-white/95 backdrop-blur-md transition-all duration-300">
      {/* Search Header */}
      <div className="flex items-center justify-between border-b border-gray-100 px-6 py-4 md:px-12 md:py-6">
        {/* Search Input Group */}
        <div className="flex flex-1 items-center max-w-3xl">
          <SearchIcon className="h-6 w-6 text-gray-500 mr-4" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search products, clothing, shoes..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full text-lg md:text-xl font-normal outline-none placeholder-gray-400 bg-transparent text-black"
          />
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-50 hover:bg-gray-100 transition-colors text-black"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      {/* Search Content */}
      <div className="flex-1 overflow-y-auto px-6 py-8 md:px-12">
        <div className="mx-auto max-w-6xl">
          {query.trim() === "" ? (
            /* Recommendations & Popular Searches */
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-4">
                  Popular Searches
                </h3>
                <div className="flex flex-wrap gap-2">
                  {popularSearches.map((term) => (
                    <button
                      key={term}
                      onClick={() => setQuery(term)}
                      className="px-4 py-2 text-sm font-medium bg-gray-50 hover:bg-gray-100 rounded-full text-black transition-colors"
                    >
                      {term}
                    </button>
                  ))}
                </div>
              </div>

              <div className="md:col-span-2">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-4">
                  Suggested Products
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {trendingProducts.slice(0, 3).map((product) => (
                    <div
                      key={product.id}
                      className="group cursor-pointer"
                      onClick={() => setQuery(product.name)}
                    >
                      <div className="aspect-square overflow-hidden bg-gray-50 rounded-lg mb-2">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <h4 className="text-sm font-semibold text-black leading-tight group-hover:underline">
                        {product.name}
                      </h4>
                      <p className="text-xs text-gray-500 mt-0.5">{product.category}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            /* Results Panel */
            <div>
              <div className="flex items-baseline justify-between mb-6">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
                  Search Results ({results.length})
                </h3>
                {results.length > 0 && (
                  <button
                    onClick={() => setQuery("")}
                    className="text-xs text-gray-500 hover:text-black underline"
                  >
                    Clear Search
                  </button>
                )}
              </div>

              {results.length === 0 ? (
                <div className="text-center py-20">
                  <p className="text-lg text-gray-500">
                    No results found for "<span className="font-semibold text-black">{query}</span>"
                  </p>
                  <p className="text-sm text-gray-400 mt-2">
                    Try searching for another style, name, or product category.
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {results.map((product) => (
                    <div
                      key={product.id}
                      className="group flex flex-col relative border border-gray-100 rounded-lg p-2 bg-white shadow-xs hover:shadow-md transition-shadow"
                    >
                      {/* Image Frame */}
                      <div className="aspect-square w-full overflow-hidden bg-gray-50 rounded-md relative mb-3">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                        />
                        {/* Quick actions overlay */}
                        <div className="absolute bottom-2 right-2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              onAddToBag(product);
                            }}
                            className="p-2 bg-white rounded-full text-black hover:bg-gray-100 shadow-sm transition-colors"
                            title="Add to Bag"
                          >
                            <BagIcon className="h-4 w-4" />
                          </button>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              onToggleWishlist(product.id);
                            }}
                            className={`p-2 bg-white rounded-full shadow-sm transition-colors ${
                              wishlist.includes(product.id) ? "text-red-500" : "text-black hover:text-red-500"
                            }`}
                            title="Add to Wishlist"
                          >
                            <HeartIcon
                              className={`h-4 w-4 ${
                                wishlist.includes(product.id) ? "fill-red-500" : ""
                              }`}
                            />
                          </button>
                        </div>
                      </div>

                      {/* Details */}
                      <div className="flex-1 flex flex-col justify-between px-1">
                        <div>
                          <h4 className="font-semibold text-sm text-black leading-tight">
                            {product.name}
                          </h4>
                          <p className="text-xs text-gray-500 mt-0.5">{product.category}</p>
                          <p className="text-xs text-gray-400">{product.color}</p>
                        </div>
                        <p className="font-semibold text-sm text-black mt-2">
                          ${product.price}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
