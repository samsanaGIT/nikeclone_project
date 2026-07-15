import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronRight } from "lucide-react";
import { Swoosh, Jumpman, Converse, SearchIcon, HeartIcon, BagIcon } from "../common/BrandIcons";

export default function Header({
  wishlistCount,
  bagCount,
  onOpenSearch,
  onOpenBag,
  mobileMenuOpen,
  setMobileMenuOpen
}) {
  const [isSticky, setIsSticky] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 36) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = ["Men", "Women", "Kids", "Jordan", "NikeSKIMS", "Back to School", "Nike Soccer"];

  // Mega dropdown menu data for all navigation sections
  const dropdownData = {
    Men: {
      "New & Featured": [
        "New Arrivals",
        "Best Sellers",
        "Latest Drops",
        "Back to School Shop",
        "SNKRS Launch Calendar",
        "Shop All Sale"
      ],
      "Shoes": [
        "All Shoes",
        "Basketball",
        "Jordan",
        "Lifestyle",
        "Running",
        "Sandals & Slides",
        "Soccer",
        "Training & Gym",
        "Custom Shoes"
      ],
      "Clothing": [
        "All Clothing",
        "Jackets & Vests",
        "Pants",
        "Shorts",
        "Sweats & Sweatshirts",
        "Swim",
        "Tops & Graphic Tees"
      ],
      "Accessories": [
        "All Accessories",
        "Bags & Backpacks",
        "Hats & Headwear",
        "Socks",
        "Sunglasses"
      ],
      "Shop By Sport": [
        "All Conditions Gear",
        "Baseball",
        "Basketball",
        "Football",
        "Golf",
        "Locker Room",
        "Running",
        "Skateboarding",
        "Soccer",
        "Tennis",
        "Training"
      ]
    },
    Women: {
      "New & Featured": [
        "New Arrivals",
        "Best Sellers",
        "Latest Drops",
        "Back to School Shop",
        "Shop All Sale"
      ],
      "Shoes": [
        "All Shoes",
        "Lifestyle",
        "Running",
        "Training & Gym",
        "Jordan",
        "Sandals & Slides",
        "Soccer"
      ],
      "Clothing": [
        "All Clothing",
        "Bras & Tights",
        "Jackets & Vests",
        "Pants & Leggings",
        "Shorts",
        "Sweats & Sweatshirts",
        "Tops & Graphic Tees"
      ],
      "Accessories": [
        "All Accessories",
        "Bags & Backpacks",
        "Hats & Headwear",
        "Socks"
      ],
      "Shop By Sport": [
        "Running",
        "Training & Gym",
        "Yoga",
        "Soccer",
        "Tennis"
      ]
    },
    Kids: {
      "Get Set for School": [
        "New Arrivals",
        "Best Sellers",
        "Back to School Shop",
        "Back to School Shoes",
        "Back to School Clothing",
        "Bags & Backpacks",
        "Nike x LEGO®",
        "Teens",
        "Shop All Sale"
      ],
      "Shoes": [
        "All Shoes",
        "Big Kids (7-15 yrs)",
        "Little Kids (3-7 yrs)",
        "Baby & Toddler (0-3 yrs)",
        "Basketball",
        "Jordan",
        "Lifestyle",
        "Running",
        "Sandals & Slides",
        "Soccer"
      ],
      "Clothing": [
        "All Clothing",
        "Big Kids (7-15 yrs)",
        "Little Kids (3-7 yrs)",
        "Baby & Toddler (0-3 yrs)",
        "Bras & Tights",
        "Jackets & Vests",
        "Pants",
        "Shorts",
        "Skirts & Dresses",
        "Sweats & Sweatshirts",
        "Swim",
        "Tops & Graphic Tees"
      ],
      "Accessories": [
        "All Accessories",
        "Bags & Backpacks",
        "Hats & Headwear",
        "Socks"
      ],
      "Shop By Sport": [
        "Basketball",
        "Gymnastics",
        "Fan Gear",
        "Football",
        "Running",
        "Soccer"
      ]
    },
    Jordan: {
      "New & Featured": [
        "New Arrivals",
        "Best Sellers",
        "Heat Check",
        "Back to School Shop",
        "Shop All Sale"
      ],
      "Men": [
        "Shop All",
        "Shoes",
        "AJ1",
        "Clothing",
        "Accessories"
      ],
      "Women": [
        "Shop All",
        "Shoes",
        "AJ1",
        "Clothing",
        "Accessories"
      ],
      "Kids": [
        "Shop All",
        "Shoes",
        "AJ1",
        "Clothing",
        "Accessories"
      ],
      "Sport": [
        "Basketball",
        "Golf",
        "Cleats"
      ]
    },
    NikeSKIMS: {
      "All Shoes": [
        "NikeSKIMS Rift"
      ],
      "All Clothing": [
        "Bras",
        "Jackets",
        "Leggings",
        "Shorts",
        "Tops and Tanks",
        "Accessories"
      ],
      "Shop by Color": [
        "Dark Sepia",
        "Ditsy Floral",
        "Ivory",
        "Obsidian",
        "Phoenix"
      ],
      "Shop by Material": [
        "Shine",
        "Matte",
        "Airy",
        "Seamless",
        "Stretch Knit",
        "Studio Stretch"
      ],
      "NikeSKIMS Guides": [
        "NikeSKIMS Lookbook",
        "NikeSKIMS Bra Guide",
        "NikeSKIMS Fabric Guide"
      ]
    }
  };

  return (
    <>
      <header className="w-full flex flex-col z-40 bg-white">
        {/* Top Utility Bar */}
        <div className="hidden md:flex items-center justify-between bg-zinc-100 px-12 py-1.5 text-xs text-black border-b border-gray-200/50">
          <div className="flex items-center gap-3">
            <Jumpman className="h-4.5 w-auto text-zinc-800 hover:text-black transition-colors cursor-pointer" />
            <Converse className="h-3.5 w-auto text-zinc-800 hover:text-black transition-colors cursor-pointer" />
          </div>
          <div className="flex items-center space-x-4 font-medium text-[11px] text-zinc-700">
            <a href="#store" className="hover:text-black transition-colors">Find a Store</a>
            <span className="text-zinc-300">|</span>
            <a href="#help" className="hover:text-black transition-colors">Help</a>
            <span className="text-zinc-300">|</span>
            <a href="#join" className="hover:text-black transition-colors">Join Us</a>
            <span className="text-zinc-300">|</span>
            <a href="#signin" className="hover:text-black transition-colors">Sign In</a>
          </div>
        </div>

        {/* Main Navigation Bar */}
        <div
          className={`w-full bg-white px-6 md:px-12 py-3.5 flex items-center justify-between border-b border-gray-100 transition-all duration-300 ${
            isSticky ? "fixed top-0 left-0 right-0 shadow-xs border-b-zinc-200 z-40" : "relative z-40"
          }`}
        >
          {/* Logo (Left) */}
          <Link to="/" className="flex-shrink-0 cursor-pointer block">
            <Swoosh className="h-5 md:h-6 w-auto text-black" />
          </Link>

          {/* Desktop Nav Links (Center) */}
          <nav className="hidden lg:flex items-center space-x-6 lg:space-x-8 font-semibold text-sm tracking-wide text-zinc-900 ml-12">
            {navLinks.map((link) => (
              link === "Men" ? (
                <Link
                  key={link}
                  to="/men"
                  className="relative py-2 group hover:text-black transition-colors"
                  onMouseEnter={() => setActiveDropdown(link)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {link}
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-black transition-all ${
                    activeDropdown === link ? "w-full" : "w-0 group-hover:w-full"
                  }`} />
                </Link>
              ) : (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace(/[^a-z0-9]/g, "-")}`}
                  className="relative py-2 group hover:text-black transition-colors"
                  onMouseEnter={() => setActiveDropdown(link)}
                  onMouseLeave={() => setActiveDropdown(null)}
        
                >
                  {link}
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-black transition-all ${
                    activeDropdown === link ? "w-full" : "w-0 group-hover:w-full"
                  }`} />
                </a>
              )
            ))}
          </nav>

          {/* Nav Actions (Right) */}
          <div className="flex items-center space-x-3 md:space-x-4">
            {/* Search Bar Input */}
            <div
              onClick={onOpenSearch}
              className="hidden lg:flex items-center bg-zinc-100 hover:bg-zinc-200/80 rounded-full px-4 py-2 cursor-pointer transition-colors w-44 lg:w-56"
            >
              <SearchIcon className="h-4 w-4 text-zinc-500 mr-2 flex-shrink-0" />
              <span className="text-xs text-zinc-400 font-medium select-none">Search</span>
            </div>

            {/* Mobile Search Icon Button */}
            <button
              onClick={onOpenSearch}
              className="lg:hidden p-2 rounded-full hover:bg-gray-100 transition-colors text-black"
              title="Search"
            >
              <SearchIcon className="h-5.5 w-5.5" />
            </button>

            {/* Wishlist Icon */}
            <button
              className="relative p-2 rounded-full hover:bg-gray-100 text-black transition-colors"
              title="Wishlist"
            >
              <HeartIcon className="h-5.5 w-5.5" />
            </button>

            {/* Bag Icon */}
            <button
              className="relative p-2 rounded-full hover:bg-gray-100 text-black transition-colors"
              title="Shopping Bag"
            >
              <BagIcon className="h-5.5 w-5.5" />
            </button>

            {/* Hamburger Button (Mobile Only) */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-2 rounded-full hover:bg-gray-100 text-black transition-colors"
              title="Open Menu"
            >
              <Menu className="h-5.5 w-5.5" />
            </button>
          </div>

          {/* Mega Dropdown */}
          {activeDropdown && dropdownData[activeDropdown] && (
            <div
              className="absolute left-0 right-0 top-full bg-white border-t border-gray-150 shadow-xl z-40 px-12 lg:px-24 py-10 transition-all duration-300 ease-in-out border-b border-gray-100 animate-in fade-in slide-in-from-top-1 duration-200"
              onMouseEnter={() => setActiveDropdown(activeDropdown)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <div className="max-w-7xl mx-auto grid grid-cols-5 gap-6 text-left">
                {Object.entries(dropdownData[activeDropdown]).map(([category, items]) => (
                  <div key={category} className="space-y-3.5">
                    <h3 className="font-bold text-xs uppercase tracking-wider text-black select-none">
                      {category}
                    </h3>
                    <ul className="space-y-2 text-[11px] font-semibold text-zinc-500">
                      {items.map((item) => (
                        <li key={item}>
                          <a
                            href={`#${item.toLowerCase().replace(/[^a-z0-9]/g, "-")}`}
                            className="hover:text-black transition-colors block py-0.5"
                          >
                            {item}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Spacer for sticky header */}
        {isSticky && <div className="h-[65px] w-full" />}
      </header>

      {/* Dim Overlay Backdrop when Mega Menu is Hovered */}
      {activeDropdown && (
        <div
          className="fixed inset-0 bg-black/25 backdrop-blur-xs z-30 transition-opacity duration-300"
          onMouseEnter={() => setActiveDropdown(null)}
        />
      )}

      {/* Slide-out Mobile Navigation Menu (Drawer) */}
      <div
        className={`fixed inset-0 z-50 bg-black/40 transition-opacity duration-300 lg:hidden ${
          mobileMenuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setMobileMenuOpen(false)}
      />

      <div
        className={`fixed top-0 right-0 bottom-0 z-50 flex h-full w-[300px] flex-col bg-white shadow-2xl transition-transform duration-300 lg:hidden ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-gray-100 px-6 py-5">
          <Link to="/" onClick={() => setMobileMenuOpen(false)}>
            <Swoosh className="h-5 w-auto text-black block" />
          </Link>
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="rounded-full p-2 text-zinc-500 hover:bg-gray-100 hover:text-black transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto py-6 px-6 space-y-6">
          {/* Main Links */}
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              link === "Men" ? (
                <Link
                  key={link}
                  to="/men"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between font-bold text-lg text-black hover:text-zinc-600 transition-colors"
                >
                  {link}
                  <ChevronRight className="h-5 w-5 text-gray-400" />
                </Link>
              ) : (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace(/[^a-z0-9]/g, "-")}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between font-bold text-lg text-black hover:text-zinc-600 transition-colors"
                >
                  {link}
                  <ChevronRight className="h-5 w-5 text-gray-400" />
                </a>
              )
            ))}
          </nav>

          <hr className="border-gray-100" />

          {/* Sub Utility Links */}
          <div className="flex flex-col space-y-3.5 text-sm font-semibold text-zinc-600">
            <a href="#store" onClick={() => setMobileMenuOpen(false)} className="hover:text-black">
              Find a Store
            </a>
            <a href="#help" onClick={() => setMobileMenuOpen(false)} className="hover:text-black">
              Help
            </a>
            <a href="#join" onClick={() => setMobileMenuOpen(false)} className="hover:text-black">
              Join Us
            </a>
            <a href="#signin" onClick={() => setMobileMenuOpen(false)} className="hover:text-black">
              Sign In
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
