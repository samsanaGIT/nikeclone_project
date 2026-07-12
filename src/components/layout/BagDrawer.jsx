import React from "react";
import { X, Trash2, Plus, Minus, ArrowRight } from "lucide-react";

export default function BagDrawer({
  isOpen,
  onClose,
  bagItems,
  onUpdateQuantity,
  onRemoveItem,
}) {
  const subtotal = bagItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  return (
    <>
      {/* Background Overlay */}
      <div
        onClick={onClose}
        className={`fixed inset-0 z-50 bg-black/40 transition-opacity duration-300 ${
          isOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      />

      {/* Cart Slide-out Drawer */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-50 flex h-full w-full max-w-md flex-col bg-white shadow-2xl transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between border-b border-gray-100 px-6 py-5">
          <h2 className="text-lg font-bold uppercase tracking-wider text-black">
            Bag ({bagItems.reduce((acc, item) => acc + item.quantity, 0)})
          </h2>
          <button
            onClick={onClose}
            className="rounded-full p-2 text-gray-500 hover:bg-gray-100 hover:text-black transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Drawer Content */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {bagItems.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center py-20 text-center">
              <div className="rounded-full bg-gray-50 p-6 mb-4">
                <Trash2 className="h-8 w-8 text-gray-400" />
              </div>
              <p className="text-lg font-semibold text-black">
                Your bag is empty.
              </p>
              <p className="text-sm text-gray-500 mt-1 max-w-xs">
                Once you add products to your bag, they will appear here.
              </p>
              <button
                onClick={onClose}
                className="mt-6 px-6 py-3 bg-black text-white hover:bg-zinc-800 text-sm font-semibold rounded-full transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {bagItems.map((item) => (
                <div
                  key={`${item.id}-${item.selectedSize || "default"}`}
                  className="flex gap-4 border-b border-gray-50 pb-6"
                >
                  {/* Image */}
                  <div className="h-24 w-24 flex-shrink-0 overflow-hidden bg-gray-50 rounded-md">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between">
                        <h3 className="font-semibold text-sm text-black leading-tight">
                          {item.name}
                        </h3>
                        <p className="font-semibold text-sm text-black ml-2">
                          ${item.price * item.quantity}
                        </p>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">
                        {item.category}
                      </p>
                      {item.selectedSize && (
                        <p className="text-xs text-gray-400 mt-0.5">
                          Size: {item.selectedSize}
                        </p>
                      )}
                      <p className="text-xs text-gray-400 mt-0.5">
                        Color: {item.color}
                      </p>
                    </div>

                    {/* Quantity and Remove actions */}
                    <div className="flex items-center justify-between mt-4">
                      {/* Quantity Selector */}
                      <div className="flex items-center border border-gray-200 rounded-full p-1 bg-gray-50">
                        <button
                          onClick={() =>
                            onUpdateQuantity(
                              item.id,
                              item.selectedSize,
                              item.quantity - 1,
                            )
                          }
                          className="p-1 rounded-full text-gray-600 hover:bg-gray-200 hover:text-black transition-colors"
                          title="Decrease Quantity"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="px-3 text-xs font-semibold text-black select-none">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            onUpdateQuantity(
                              item.id,
                              item.selectedSize,
                              item.quantity + 1,
                            )
                          }
                          className="p-1 rounded-full text-gray-600 hover:bg-gray-200 hover:text-black transition-colors"
                          title="Increase Quantity"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>

                      {/* Remove Button */}
                      <button
                        onClick={() => onRemoveItem(item.id, item.selectedSize)}
                        className="text-gray-400 hover:text-red-500 p-1.5 transition-colors"
                        title="Remove Item"
                      >
                        <Trash2 className="h-4.5 w-4.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Drawer Footer */}
        {bagItems.length > 0 && (
          <div className="border-t border-gray-100 bg-gray-50/50 px-6 py-6 space-y-4">
            <div className="space-y-1.5">
              <div className="flex justify-between text-sm text-gray-500">
                <span>Subtotal</span>
                <span className="font-semibold text-black">
                  ${subtotal.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between text-sm text-gray-500">
                <span>Estimated Shipping & Handling</span>
                <span className="text-green-600 font-medium">Free</span>
              </div>
              <div className="flex justify-between text-sm text-gray-500">
                <span>Estimated Tax</span>
                <span className="font-semibold text-black">--</span>
              </div>
              <div className="border-t border-gray-200/60 my-2 pt-2 flex justify-between text-base font-bold text-black">
                <span>Total</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-2 pt-2">
              <button
                onClick={() =>
                  alert("Checkout initiated! Total: $" + subtotal.toFixed(2))
                }
                className="w-full flex items-center justify-center gap-2 py-4 px-6 bg-black text-white hover:bg-zinc-800 rounded-full font-semibold transition-colors"
              >
                Checkout
                <ArrowRight className="h-4 w-4" />
              </button>
              <button
                onClick={onClose}
                className="w-full py-3.5 px-6 border border-gray-200 text-black hover:bg-gray-50 rounded-full text-sm font-semibold transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
