import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, ChevronUp, ChevronDown, SlidersHorizontal } from "lucide-react";

const ProductCard = ({ product }) => {
  const [activeImage, setActiveImage] = useState(product.mainImage);

  return (
    <div className="group cursor-pointer flex flex-col">
      {/* Main Image */}
      <div className="w-full aspect-square bg-[#F6F6F6] mb-2 overflow-hidden relative">
        <img 
          src={activeImage} 
          alt={product.name} 
          className="w-full h-full object-cover mix-blend-multiply transition-opacity duration-200"
        />
      </div>

      {/* Color Thumbnails */}
      <div className="flex gap-1 mb-3 mt-1 overflow-x-auto no-scrollbar">
        {product.colorOptions.map((thumbImg, idx) => (
          <div 
            key={idx} 
            onMouseEnter={() => setActiveImage(thumbImg)}
            onMouseLeave={() => setActiveImage(product.mainImage)}
            className="w-10 h-10 bg-[#F6F6F6] rounded-sm flex-shrink-0 overflow-hidden border border-transparent hover:border-black cursor-pointer"
          >
            <img 
              src={thumbImg} 
              alt="color option" 
              className="w-full h-full object-cover mix-blend-multiply opacity-80"
            />
          </div>
        ))}
      </div>

      {/* Product Info */}
      <div className="flex flex-col">
        {product.promo && (
          <span className="text-[#9E3500] font-medium text-[15px] mb-1">
            {product.promo}
          </span>
        )}
        <h3 className="text-black font-medium text-[15px] leading-snug">
          {product.name}
        </h3>
        <p className="text-[#707072] text-[15px] mb-3">
          {product.category}
        </p>
        <span className="text-black font-medium text-[15px]">
          {product.price}
        </span>
      </div>
    </div>
  );
};

export default function ResponsiveCushioningPage() {
  const promos = [
    { text: "Members: Free Shipping on Orders $50+", link: "#" },
    { text: "Send a Gift Card", link: "#" },
    { text: "Shop New Arrivals", link: "#" },
    { text: "Apple Card: 6% Daily Cash with Apple Pay. Terms + limits apply.", link: "#" }
  ];
  
  const [currentPromo, setCurrentPromo] = useState(0);

  const [openFilters, setOpenFilters] = useState({
    gender: true,
    kids: false,
    color: true,
    brand: false,
    sports: false,
  });

  const [pickUpToday, setPickUpToday] = useState(false);

  const products = [
    {
      id: 1,
      name: "Nike Pegasus Premium",
      category: "Women's Road Running Shoes",
      price: "$220",
      promo: "Best Seller",
      mainImage: "/assets/icons/icons_img_18.png",
      colorOptions: ["/assets/icons/icons_img_18.png", "/assets/icons/icons_img_19.png", "/assets/icons/icons_img_20.png", "/assets/icons/icons_img_21.png", "/assets/icons/icons_img_22.png", "/assets/icons/icons_img_23.png"]
    },
    {
      id: 2,
      name: "Nike Pegasus Plus",
      category: "Men's Road Running Shoes",
      price: "$190",
      promo: "",
      mainImage: "/assets/icons/icons_img_24.png",
      colorOptions: ["/assets/icons/icons_img_24.png", "/assets/icons/icons_img_25.png", "/assets/icons/icons_img_26.png"]
    },
    {
      id: 3,
      name: "Nike Pegasus Plus",
      category: "Women's Road Running Shoes",
      price: "$180",
      promo: "Recycled Materials",
      mainImage: "/assets/icons/icons_img_27.png",
      colorOptions: ["/assets/icons/icons_img_27.png", "/assets/icons/icons_img_28.png", "/assets/icons/icons_img_29.png"]
    },
    {
      id: 4,
      name: "Nike ACG Pegasus Trail",
      category: "Men's Trail Running Shoes",
      price: "$155",
      promo: "",
      mainImage: "/assets/icons/icons_img_30.png",
      colorOptions: ["/assets/icons/icons_img_30.png", "/assets/icons/icons_img_31.png", "/assets/icons/icons_img_32.png", "/assets/icons/icons_img_33.png", "/assets/icons/icons_img_34.png", "/assets/icons/icons_img_35.png"]
    },
    {
      id: 5,
      name: "Nike ACG Pegasus Trail",
      category: "Women's Trail Running Shoes",
      price: "$155",
      promo: "",
      mainImage: "/assets/icons/icons_img_36.png",
      colorOptions: ["/assets/icons/icons_img_36.png", "/assets/icons/icons_img_37.png", "/assets/icons/icons_img_38.png", "/assets/icons/icons_img_39.png"]
    },
    {
      id: 6,
      name: "Nike Pegasus 42",
      category: "Big Kids' Road Running Shoes",
      price: "$65.97",
      promo: "",
      mainImage: "/assets/icons/icons_img_40.png",
      colorOptions: ["/assets/icons/icons_img_40.png", "/assets/icons/icons_img_41.png", "/assets/icons/icons_img_42.png", "/assets/icons/icons_img_43.png", "/assets/icons/icons_img_44.png", "/assets/icons/icons_img_45.png", "/assets/icons/icons_img_46.png"]
    },
    {
      id: 7,
      name: "Nike ACG Pegasus Trail",
      category: "Big Kids' Running Shoes",
      price: "$122",
      promo: "",
      mainImage: "/assets/icons/icons_img_47.png",
      colorOptions: ["/assets/icons/icons_img_47.png", "/assets/icons/icons_img_48.png"]
    },
    {
      id: 8,
      name: "Nike Pegasus 42",
      category: "Men's Road Running Shoes (Wide)",
      price: "$145",
      promo: "",
      mainImage: "/assets/icons/icons_img_49.png",
      colorOptions: ["/assets/icons/icons_img_49.png", "/assets/icons/icons_img_50.png", "/assets/icons/icons_img_51.png"]
    },
    {
      id: 9,
      name: "Nike Pegasus 42",
      category: "Women's Road Running Shoes (Wide)",
      price: "$145",
      promo: "",
      mainImage: "/assets/icons/icons_img_52.png",
      colorOptions: ["/assets/icons/icons_img_52.png", "/assets/icons/icons_img_53.png"]
    },
    {
      id: 10,
      name: "Nike Pegasus 42 EasyOn",
      category: "Women's Road Running Shoes",
      price: "$145",
      promo: "Just In",
      mainImage: "/assets/icons/icons_img_54.png",
      colorOptions: ["/assets/icons/icons_img_54.png", "/assets/icons/icons_img_55.png"]
    },
    {
      id: 11,
      name: "Nike Pegasus 42 By You",
      category: "Custom Men's Road Running Shoes",
      price: "$160",
      promo: "Customize",
      mainImage: "/assets/icons/icons_img_56.png",
      colorOptions: ["/assets/icons/icons_img_56.png", "/assets/icons/icons_img_57.png", "/assets/icons/icons_img_58.png", "/assets/icons/icons_img_59.png"]
    },
    {
      id: 12,
      name: "Nike Pegasus 42 By You",
      category: "Custom Women's Road Running Shoes",
      price: "$160",
      promo: "Customize",
      mainImage: "/assets/icons/icons_img_60.png",
      colorOptions: ["/assets/icons/icons_img_60.png", "/assets/icons/icons_img_61.png", "/assets/icons/icons_img_62.png", "/assets/icons/icons_img_63.png"]
    }
  ];

  const toggleFilter = (filter) => {
    setOpenFilters(prev => ({ ...prev, [filter]: !prev[filter] }));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPromo((prev) => (prev + 1) % promos.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [promos.length]);

  const handlePrev = () => {
    setCurrentPromo((prev) => (prev - 1 + promos.length) % promos.length);
  };

  const handleNext = () => {
    setCurrentPromo((prev) => (prev + 1) % promos.length);
  };

  return (
    <div className="w-full flex flex-col min-h-screen bg-white font-sans text-black">
      {/* Sub Nav Bar / Promo Carousel */}
      <div className="w-full h-12 bg-zinc-100 flex items-center justify-center border-b border-gray-200">
        <div className="flex items-center justify-center w-full max-w-[600px] h-full">
          <button 
            onClick={handlePrev}
            className="text-black hover:text-zinc-600 p-2 flex-shrink-0"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <div className="flex-1 overflow-hidden h-full relative mx-2">
            <div 
              className="flex h-full w-full transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentPromo * 100}%)` }}
            >
              {promos.map((promo, index) => (
                <div key={index} className="w-full h-full flex-shrink-0 flex items-center justify-center">
                  <a href={promo.link} className="text-xs font-medium underline hover:text-zinc-600 transition-colors">
                    {promo.text}
                  </a>
                </div>
              ))}
            </div>
          </div>

          <button 
            onClick={handleNext}
            className="text-black hover:text-zinc-600 p-2 flex-shrink-0"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <main className="w-full max-w-[1440px] mx-auto px-6 md:px-12 py-6">
        
        {/* Hero Banner */}
        <div className="relative w-full h-[400px] mb-8 overflow-hidden bg-zinc-200">
          <img 
            src="/assets/icons/icons_img_64.png" 
            alt="Responsive Cushioning" 
            className="w-full h-full object-cover object-top"
          />
          {/* Overlay text */}
          <div className="absolute inset-0 flex flex-col justify-center px-10 max-w-[500px]">
            <h1 className="text-5xl md:text-6xl font-black uppercase tracking-tighter leading-[0.9] mb-4 text-white drop-shadow-md">
              RESPONSIVE<br/>CUSHIONING
            </h1>
            <p className="text-sm font-medium text-white drop-shadow-md">
              Our most responsive shoes offer energy return with every step.
            </p>
          </div>
        </div>

        {/* Top Filter Bar */}
        <div className="flex justify-between items-center mb-6 pr-6">
          <h2 className="text-xl md:text-2xl font-medium">Responsive Cushioning (15)</h2>
          <div className="flex items-center gap-8">
            <button className="text-[15px] font-medium flex items-center gap-2 hover:text-zinc-600 transition-colors">
              Hide Filters
              <SlidersHorizontal className="w-5 h-5" />
            </button>
            <button className="text-[15px] font-medium flex items-center gap-1 hover:text-zinc-600 transition-colors">
              Sort By
              <ChevronDown className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* 2-Column Layout */}
        <div className="flex gap-10">
          {/* Sidebar */}
          <aside className="w-48 hidden md:block flex-shrink-0 pr-4 overflow-y-auto pill-scrollbar sticky top-24 self-start" style={{ maxHeight: 'calc(100vh - 100px)' }}>
            {/* Pick Up Today */}
            <div className="pb-4 flex justify-between items-center">
              <span className="font-medium">Pick Up Today</span>
              <div 
                onClick={() => setPickUpToday(!pickUpToday)}
                className={`w-11 h-6 rounded-full cursor-pointer relative transition-colors duration-200 ${pickUpToday ? 'bg-black' : 'bg-zinc-300'}`}
              >
                <div 
                  className={`w-5 h-5 bg-white rounded-full absolute top-[2px] shadow-sm transition-transform duration-200 ${pickUpToday ? 'translate-x-[22px]' : 'translate-x-[2px]'}`}
                ></div>
              </div>
            </div>

            {/* Categories (Shoes) */}
            <div className="py-4 border-t border-zinc-200">
              <div className="flex justify-between items-center cursor-pointer">
                <h3 className="font-medium">Shoes</h3>
              </div>
            </div>

            {/* Gender */}
            <div className="py-4 border-t border-zinc-200">
              <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleFilter('gender')}>
                <h3 className="font-medium">Gender</h3>
                {openFilters.gender ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </div>
              <div className={`grid transition-all duration-300 ease-in-out ${openFilters.gender ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0 mt-0'}`}>
                <div className="overflow-hidden">
                  <div className="space-y-2">
                    {["Men", "Women", "Unisex"].map((item) => (
                      <label key={item} className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" className="w-5 h-5 rounded border-gray-300 text-black focus:ring-black accent-black" />
                        <span className="text-sm">{item}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Kids */}
            <div className="py-4 border-t border-zinc-200">
              <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleFilter('kids')}>
                <h3 className="font-medium">Kids</h3>
                {openFilters.kids ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </div>
              <div className={`grid transition-all duration-300 ease-in-out ${openFilters.kids ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0 mt-0'}`}>
                <div className="overflow-hidden">
                  <div className="space-y-2">
                    {["Boys", "Girls"].map((item) => (
                      <label key={item} className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" className="w-5 h-5 rounded border-gray-300 text-black focus:ring-black accent-black" />
                        <span className="text-sm">{item}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Color */}
            <div className="py-4 border-t border-zinc-200">
              <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleFilter('color')}>
                <h3 className="font-medium">Color</h3>
                {openFilters.color ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </div>
              <div className={`grid transition-all duration-300 ease-in-out ${openFilters.color ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0 mt-0'}`}>
                <div className="overflow-hidden">
                  <div className="grid grid-cols-3 gap-y-4 gap-x-2 pb-1">
                    {[
                      { name: "Purple", color: "bg-[#7E3794]" },
                      { name: "Black", color: "bg-black" },
                      { name: "Red", color: "bg-[#E7352B]" },
                      { name: "Orange", color: "bg-[#F36B26]" },
                      { name: "Blue", color: "bg-[#1C8BCA]" },
                      { name: "White", color: "bg-white border border-gray-300" },
                      { name: "Brown", color: "bg-[#805D41]" },
                      { name: "Green", color: "bg-[#79BA39]" },
                      { name: "Yellow", color: "bg-[#FDD231]" },
                      { name: "Grey", color: "bg-[#808080]" },
                      { name: "Pink", color: "bg-[#F0728F]" },
                    ].map((item) => (
                      <div key={item.name} className="flex flex-col items-center gap-1 cursor-pointer group">
                        <div className={`w-7 h-7 rounded-full ${item.color} group-hover:ring-1 group-hover:ring-black group-hover:ring-offset-1 transition-all`}></div>
                        <span className="text-[11px] text-center">{item.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Brand */}
            <div className="py-4 border-t border-zinc-200">
              <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleFilter('brand')}>
                <h3 className="font-medium">Brand</h3>
                {openFilters.brand ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </div>
              <div className={`grid transition-all duration-300 ease-in-out ${openFilters.brand ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0 mt-0'}`}>
                <div className="overflow-hidden">
                  <div className="space-y-2">
                    {["Nike By You", "ACG"].map((item) => (
                      <label key={item} className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" className="w-5 h-5 rounded border-gray-300 text-black focus:ring-black accent-black" />
                        <span className="text-sm">{item}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Sports */}
            <div className="py-4 border-t border-zinc-200">
              <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleFilter('sports')}>
                <h3 className="font-medium">Sports</h3>
                {openFilters.sports ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </div>
              <div className={`grid transition-all duration-300 ease-in-out ${openFilters.sports ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0 mt-0'}`}>
                <div className="overflow-hidden">
                  <div className="space-y-2 pb-1">
                    {["Running", "Track & Field", "Outdoor", "Hiking"].map((item) => (
                      <label key={item} className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" className="w-5 h-5 rounded border-gray-300 text-black focus:ring-black accent-black" />
                        <span className="text-sm">{item}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-10">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
