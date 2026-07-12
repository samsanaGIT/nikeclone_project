import React, { useState, useEffect, useRef } from "react";
import { X, Sparkles } from "lucide-react";
import { Swoosh, SearchIcon, HeartIcon, BagIcon } from "../common/BrandIcons";
import { trendingProducts } from "../../data/products";

export default function SearchModal({
  isOpen,
  onClose,
  onAddToBag,
  onToggleWishlist,
  wishlist,
}) {
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
      const filtered = trendingProducts.filter(
        (p) =>
          p.name.toLowerCase().includes(query.toLowerCase()) ||
          p.category.toLowerCase().includes(query.toLowerCase()),
      );
      setResults(filtered);
    }
  }, [query]);

  if (!isOpen) return null;

  const popularSearches = [
    "Jordan",
    "Air Max",
    "Vomero",
    "Pegasus",
    "Sabrina",
    "Fleece",
  ];

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-white transition-all duration-300">
      {/* Search Header */}
      <div className="flex items-center justify-between px-6 py-4 md:px-12 md:py-6">
        {/* Left: Logo */}
        <div className="hidden md:flex items-center w-24">
          <Swoosh className="h-6 w-auto text-black" />
        </div>

        {/* Search Input Group */}
        <div className="flex flex-1 items-center max-w-3xl mx-auto bg-[#F5F5F5] rounded-full px-5 py-2.5">
          <SearchIcon className="h-5 w-5 text-zinc-500 mr-3" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full text-base font-medium outline-none placeholder-zinc-500 bg-transparent text-black"
          />
        </div>

        {/* Right: Cancel Button */}
        <div className="w-24 flex justify-end">
          <button
            onClick={onClose}
            className="text-base font-medium text-black hover:text-zinc-600 transition-colors"
          >
            Cancel
          </button>
        </div>
      </div>

      {/* Search Content */}
      <div className="flex-1 overflow-y-auto px-6 py-8 md:px-12">
        <div className="mx-auto max-w-5xl">
          {query.trim() === "" ? (
            /* Recommendations & Popular Searches */
            <div className="flex flex-col gap-10 max-w-4xl mx-auto mt-2 pl-4 md:pl-28">
              {/* Ask NikeAI */}
              <button className="flex items-center gap-4 hover:opacity-75 transition-opacity w-fit">
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-b from-[#C4F627] to-[#88EC0C] shadow-sm">
                  <Sparkles className="h-5 w-5 text-black fill-black" />
                </div>
                <span className="text-base font-medium text-black">
                  Ask NikeAI
                </span>
              </button>

              {/* Popular Search Terms */}
              <div>
                <h3 className="text-sm font-medium text-zinc-400 mb-4">
                  Popular Search Terms
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "back to school",
                    "football",
                    "jordan",
                    "air max",
                    "basketball shoes",
                    "jordan 4",
                    "soccer cleats",
                    "nike mind",
                  ].map((term) => (
                    <button
                      key={term}
                      className="px-5 py-2 text-sm font-medium bg-[#F5F5F5] hover:bg-zinc-200 rounded-full text-black transition-colors"
                    >
                      {term}
                    </button>
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
                    No results found for "
                    <span className="font-semibold text-black">{query}</span>"
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
                              wishlist.includes(product.id)
                                ? "text-red-500"
                                : "text-black hover:text-red-500"
                            }`}
                            title="Add to Wishlist"
                          >
                            <HeartIcon
                              className={`h-4 w-4 ${
                                wishlist.includes(product.id)
                                  ? "fill-red-500"
                                  : ""
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
                          <p className="text-xs text-gray-500 mt-0.5">
                            {product.category}
                          </p>
                          <p className="text-xs text-gray-400">
                            {product.color}
                          </p>
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
