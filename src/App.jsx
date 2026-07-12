import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import {
  Header,
  Footer,
  MenFooter,
  CushionFooter,
  SearchModal,
  BagDrawer,
  HeartIcon,
  BagIcon
} from "./components";
import { trendingProducts } from "./data/products";
import { X } from "lucide-react";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import MenPage from "./pages/MenPage";
import ResponsiveCushioningPage from "./pages/ResponsiveCushioningPage";

export default function App() {
  // Pre-populate with some items so the bag looks realistic right away
  const [bagItems, setBagItems] = useState([
    {
      id: "p1",
      name: "Air Jordan 1 Retro High",
      price: 180,
      category: "Men's Shoes",
      image: "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=500&auto=format&fit=crop&q=80",
      color: "Black/White/Gym Red",
      selectedSize: "10.5",
      quantity: 1
    },
    {
      id: "p6",
      name: "24.7 Collection Hoodie",
      price: 85,
      category: "Men's Apparel",
      image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&auto=format&fit=crop&q=80",
      color: "Fleece Grey",
      selectedSize: "L",
      quantity: 1
    }
  ]);

  const [wishlist, setWishlist] = useState(["p2", "p7"]);
  const [searchOpen, setSearchOpen] = useState(false);
  const [bagOpen, setBagOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Animated Toast State
  const [toast, setToast] = useState(null);

  // Auto-dismiss toast notifications after 4 seconds
  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => {
        setToast(null);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  // Wishlist handler
  const handleToggleWishlist = (productId) => {
    const product = trendingProducts.find((p) => p.id === productId);
    setWishlist((prev) => {
      const exists = prev.includes(productId);
      if (exists) {
        setToast({
          message: `Removed from Wishlist`,
          description: product?.name || "",
          type: "wishlist-remove",
          image: product?.image
        });
        return prev.filter((id) => id !== productId);
      } else {
        setToast({
          message: `Added to Wishlist`,
          description: product?.name || "",
          type: "wishlist-add",
          image: product?.image
        });
        return [...prev, productId];
      }
    });
  };

  // Add to Bag handler
  const handleAddToBag = (product, size = "10") => {
    setBagItems((prev) => {
      const existingItem = prev.find(
        (item) => item.id === product.id && item.selectedSize === size
      );

      if (existingItem) {
        return prev.map((item) =>
          item.id === product.id && item.selectedSize === size
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [
        ...prev,
        {
          id: product.id,
          name: product.name,
          price: product.price,
          category: product.category,
          image: product.image,
          color: product.color,
          selectedSize: size,
          quantity: 1
        }
      ];
    });

    setToast({
      message: "Added to Bag",
      description: product.name,
      type: "bag",
      image: product.image,
      price: product.price
    });
  };

  // Quantity updates
  const handleUpdateQuantity = (productId, size, newQty) => {
    if (newQty <= 0) {
      handleRemoveItem(productId, size);
      return;
    }
    setBagItems((prev) =>
      prev.map((item) =>
        item.id === productId && item.selectedSize === size
          ? { ...item, quantity: newQty }
          : item
      )
    );
  };

  // Remove item
  const handleRemoveItem = (productId, size) => {
    setBagItems((prev) =>
      prev.filter((item) => !(item.id === productId && item.selectedSize === size))
    );
  };

  const totalBagCount = bagItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Toast Notification Banner */}
      {toast && (
        <div className="fixed top-20 right-4 md:right-12 z-55 w-80 md:w-96 bg-white border border-zinc-200 shadow-xl rounded-xl p-4 animate-in slide-in-from-top-4 duration-300">
          <div className="flex gap-3 relative">
            <button
              onClick={() => setToast(null)}
              className="absolute -top-1.5 -right-1.5 p-1 text-gray-400 hover:text-black rounded-full hover:bg-gray-150 transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
            <div className="h-16 w-16 flex-shrink-0 bg-zinc-50 rounded-lg overflow-hidden border border-zinc-150">
              <img
                src={toast.image}
                alt={toast.description}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="flex-1 flex flex-col justify-center">
              <div className="flex items-center gap-1.5">
                {toast.type === "bag" && (
                  <BagIcon className="h-3.5 w-3.5 text-green-600" />
                )}
                {toast.type.startsWith("wishlist") && (
                  <HeartIcon
                    className={`h-3.5 w-3.5 text-red-500 ${toast.type === "wishlist-add" ? "fill-red-500" : ""
                      }`}
                  />
                )}
                <span className="text-xs font-bold text-black uppercase tracking-wider">
                  {toast.message}
                </span>
              </div>
              <p className="text-sm font-semibold text-zinc-900 leading-snug mt-1 truncate">
                {toast.description}
              </p>
              {toast.price && (
                <p className="text-xs font-bold text-black mt-0.5">${toast.price}</p>
              )}
              {toast.type === "bag" && (
                <button
                  onClick={() => {
                    setBagOpen(true);
                    setToast(null);
                  }}
                  className="text-xs font-bold text-black underline text-left mt-2 hover:text-zinc-600 transition-colors"
                >
                  View Bag
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Main Navigation */}
      <Header
        wishlistCount={wishlist.length}
        bagCount={totalBagCount}
        onOpenSearch={() => setSearchOpen(true)}
        onOpenBag={() => setBagOpen(true)}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      <main className="flex-1 w-full">
        <Routes>
          <Route path="/" element={
            <LandingPage 
              onAddToBag={handleAddToBag}
              onToggleWishlist={handleToggleWishlist}
              wishlist={wishlist}
            />
          } />
          <Route path="/men" element={<MenPage />} />
          <Route path="/responsive-cushioning" element={<ResponsiveCushioningPage />} />
        </Routes>
      </main>

      {/* Footer rendering based on route */}
      <Routes>
        <Route path="/men" element={<MenFooter />} />
        <Route path="/responsive-cushioning" element={<CushionFooter />} />
        <Route path="*" element={<Footer />} />
      </Routes>

      {/* Search Drawer Overlay */}
      <SearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        onAddToBag={handleAddToBag}
        onToggleWishlist={handleToggleWishlist}
        wishlist={wishlist}
      />

      {/* Shopping Bag Sidebar Drawer */}
      <BagDrawer
        isOpen={bagOpen}
        onClose={() => setBagOpen(false)}
        bagItems={bagItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
      />
    </div>
  );
}
