import React, { useState } from "react";
import { Globe, Plus, Minus } from "lucide-react";

export default function MenFooter() {
  const [openAccordions, setOpenAccordions] = useState({});

  const toggleAccordion = (section) => {
    setOpenAccordions((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const firstGrid = [
    {
      title: "Men's Shoes",
      links: ["Running", "Basketball", "Golf", "Tennis Shoes"],
    },
    {
      title: "Men's Clothing",
      links: ["Tops & T-Shirts", "Jackets", "Hoodies", "Pants"],
    },
    {
      title: "Men's Gear",
      links: ["All Men's Gear", "Socks", "Bags & Backpacks", "Balls"],
    },
    {
      title: "Featured",
      links: ["New Releases", "Sale", "NFL", "Men's Essentials"],
    },
  ];

  const secondGrid = [
    {
      title: "Resources",
      links: [
        "Gift Cards",
        "Corporate Sales",
        "Find a Store",
        "Membership",
        "Nike Journal",
        "Site Feedback",
      ],
    },
    {
      title: "Help",
      links: [
        "Get Help",
        "Order Status",
        "Shipping and Delivery",
        "Returns",
        "Order Cancellation",
        "Payment Options",
        "Gift Card Balance",
        "Contact Us",
      ],
    },
    {
      title: "Company",
      links: [
        "About Nike",
        "News",
        "Careers",
        "Investors",
        "Purpose",
        "Sustainability",
        "Accessibility",
      ],
    },
    {
      title: "Promotions & Discounts",
      links: [
        "Student",
        "Military",
        "Teacher",
        "First Responders & Medical Professionals",
        "Birthday",
      ],
    },
  ];

  return (
    <footer className="w-full bg-white text-zinc-600 py-12 px-6 md:px-12 select-none border-t border-gray-100">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Top Section - 5 Column Grid (Offset by 1) */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4 pb-8">
          <div className="hidden md:block"></div> {/* Empty col to offset */}
          {firstGrid.map((group) => {
            const isOpen = !!openAccordions[group.title];
            return (
              <div
                key={group.title}
                className="border-b border-gray-100 md:border-b-0 pb-4 md:pb-0"
              >
                <button
                  onClick={() => toggleAccordion(group.title)}
                  className="w-full md:hidden flex items-center justify-between py-2 text-left font-semibold text-sm text-black"
                >
                  <span>{group.title}</span>
                  {isOpen ? (
                    <Minus className="h-3.5 w-3.5 text-zinc-500" />
                  ) : (
                    <Plus className="h-3.5 w-3.5 text-zinc-500" />
                  )}
                </button>
                <h3 className="hidden md:block font-semibold text-sm text-black mb-4">
                  {group.title}
                </h3>
                <ul
                  className={`space-y-3 text-[13px] font-normal text-zinc-500 md:block ${
                    isOpen ? "block mt-2" : "hidden"
                  }`}
                >
                  {group.links.map((link) => (
                    <li key={link}>
                      <a
                        href={`#${link.toLowerCase().replace(/[^a-z0-9]/g, "-")}`}
                        className="hover:text-black transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Bottom Section - 5 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4 border-t border-gray-200 pt-10 pb-8 relative">
          {secondGrid.map((group) => {
            const isOpen = !!openAccordions[group.title];
            return (
              <div
                key={group.title}
                className="border-b border-gray-100 md:border-b-0 pb-4 md:pb-0"
              >
                {/* Mobile Accordion Header */}
                <button
                  onClick={() => toggleAccordion(group.title)}
                  className="w-full md:hidden flex items-center justify-between py-2 text-left font-semibold text-sm text-black"
                >
                  <span>{group.title}</span>
                  {isOpen ? (
                    <Minus className="h-3.5 w-3.5 text-zinc-500" />
                  ) : (
                    <Plus className="h-3.5 w-3.5 text-zinc-500" />
                  )}
                </button>

                {/* Desktop Header */}
                <h3 className="hidden md:block font-semibold text-sm text-black mb-4">
                  {group.title}
                </h3>

                {/* Links list */}
                <ul
                  className={`space-y-3 text-[13px] font-normal text-zinc-500 md:block ${
                    isOpen ? "block mt-2" : "hidden"
                  }`}
                >
                  {group.links.map((link) => (
                    <li key={link}>
                      <a
                        href={`#${link.toLowerCase().replace(/[^a-z0-9]/g, "-")}`}
                        className="hover:text-black transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}

          {/* Country Selector (Aligned right, next to Promotions & Discounts on desktop) */}
          <div className="md:absolute md:top-10 md:right-0 mt-6 md:mt-0 flex justify-end">
            <button className="flex items-center gap-1.5 text-xs text-zinc-500 hover:text-black font-normal transition-colors">
              <Globe className="h-3.5 w-3.5 text-zinc-400" />
              <span>United States</span>
            </button>
          </div>
        </div>

        {/* Legal Links & Copyright */}
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-gray-100 pt-8 text-[11px] font-normal text-zinc-400">
          <span className="text-zinc-500 font-medium">
            © 2026 Nike, Inc. All Rights Reserved
          </span>

          <div className="relative group">
            <button className="hover:text-black transition-colors flex items-center gap-0.5">
              <span>Guides</span>
              <span className="text-[8px] font-light">▼</span>
            </button>
          </div>

          <a href="#terms-sale" className="hover:text-black transition-colors">
            Terms of Sale
          </a>
          <a href="#terms-use" className="hover:text-black transition-colors">
            Terms of Use
          </a>
          <a href="#privacy" className="hover:text-black transition-colors">
            Nike Privacy Policy
          </a>
          <a
            href="#privacy-choices"
            className="hover:text-black flex items-center gap-1 transition-colors"
          >
            <span className="inline-flex items-center">
              <img
                src="/assets/icons/icons_img_1.png"
                alt="Privacy Choices Icon"
                className="h-6 w-auto mr-1"
              />
              <span>Your Privacy Choices</span>
            </span>
          </a>
          <a
            href="#ca-supply-chains"
            className="hover:text-black transition-colors"
          >
            CA Supply Chains Act
          </a>
        </div>
      </div>
    </footer>
  );
}
