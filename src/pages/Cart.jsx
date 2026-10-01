import { Link } from 'react-router-dom';
/* eslint-disable no-unused-vars */
import { motion, AnimatePresence } from 'framer-motion';
import { Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import useCartStore from '../store/cartStore';

const Cart = () => {
  const { items, removeFromCart, updateQuantity, deliveryFee } = useCartStore();
  
  const subtotal = items.reduce((total, item) => total + (item.price * item.quantity), 0);
  const total = subtotal + deliveryFee;

  if (items.length === 0) {
    return (
      <div className="min-h-[70vh] bg-bosal-beige flex items-center justify-center pt-20 pb-20 px-4">
        <div className="text-center">
          <div className="bg-white w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
            <ShoppingBag className="w-10 h-10 text-bosal-deep-green/30" />
          </div>
          <h2 className="text-3xl font-display font-bold text-bosal-deep-green mb-4">Your cart is empty</h2>
          <p className="text-bosal-deep-green/70 mb-8 max-w-md mx-auto">
            Looks like you haven't added any delicious Nigerian dishes to your cart yet.
          </p>
          <Link 
            to="/menu"
            className="inline-block bg-bosal-deep-green text-bosal-beige px-8 py-3 rounded-full font-medium hover:bg-bosal-bright-green transition-colors"
          >
            Browse Menu
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-bosal-beige pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <h1 className="text-4xl md:text-5xl font-display font-bold text-bosal-deep-green mb-10">Your Cart</h1>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Cart Items List */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm">
              <div className="hidden md:grid grid-cols-12 text-sm font-bold text-bosal-deep-green/50 uppercase tracking-wider mb-6 pb-4 border-b border-bosal-deep-green/10">
                <div className="col-span-6">Item</div>
                <div className="col-span-3 text-center">Quantity</div>
                <div className="col-span-3 text-right">Total</div>
              </div>

              <div className="space-y-8 md:space-y-6">
                <AnimatePresence>
                  {items.map((item) => (
                    <motion.div
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      key={item.id}
                      className="flex flex-col md:grid md:grid-cols-12 items-center gap-4 md:gap-6 border-b border-bosal-deep-green/5 pb-6 last:border-0 last:pb-0"
                    >
                      {/* Item Info */}
                      <div className="col-span-6 flex items-center gap-4 w-full">
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="w-20 h-20 md:w-24 md:h-24 object-cover rounded-xl shadow-sm"
                        />
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-bosal-deep-green leading-tight mb-1">{item.name}</h3>
                          <p className="text-bosal-deep-green/60 text-sm mb-2">₦{item.price.toLocaleString()} each</p>
                          <button 
                            onClick={() => removeFromCart(item.id)}
                            className="text-red-500 text-sm font-medium hover:text-red-700 transition-colors flex items-center gap-1"
                          >
                            <Trash2 className="w-4 h-4" /> Remove
                          </button>
                        </div>
                      </div>

                      {/* Quantity */}
                      <div className="col-span-3 flex justify-between md:justify-center w-full md:w-auto items-center">
                        <span className="md:hidden font-bold text-bosal-deep-green/50 text-sm uppercase">Quantity:</span>
                        <div className="flex items-center gap-3 bg-bosal-beige rounded-full p-1 border border-bosal-deep-green/10">
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-bosal-deep-green hover:bg-bosal-deep-green hover:text-bosal-beige transition-colors shadow-sm"
                          >
                            -
                          </button>
                          <span className="font-bold w-6 text-center text-bosal-deep-green">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-bosal-deep-green hover:bg-bosal-deep-green hover:text-bosal-beige transition-colors shadow-sm"
                          >
                            +
                          </button>
                        </div>
                      </div>

                      {/* Total */}
                      <div className="col-span-3 flex justify-between md:justify-end w-full md:w-auto items-center">
                        <span className="md:hidden font-bold text-bosal-deep-green/50 text-sm uppercase">Total:</span>
                        <span className="text-xl font-bold text-bosal-deep-green">
                          ₦{(item.price * item.quantity).toLocaleString()}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:w-1/3">
            <div className="bg-bosal-deep-green text-bosal-beige rounded-3xl p-8 sticky top-28 shadow-xl">
              <h2 className="text-2xl font-display font-bold mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6 pb-6 border-b border-bosal-beige/20">
                <div className="flex justify-between">
                  <span className="text-bosal-beige/70">Subtotal</span>
                  <span className="font-bold">₦{subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-bosal-beige/70">Delivery Fee</span>
                  <span className="font-bold">₦{deliveryFee.toLocaleString()}</span>
                </div>
              </div>

              <div className="flex justify-between items-center mb-8">
                <span className="text-lg font-bold">Total</span>
                <span className="text-3xl font-bold text-bosal-bright-green">₦{total.toLocaleString()}</span>
              </div>

              <Link 
                to="/checkout"
                className="w-full py-4 bg-bosal-bright-green text-white rounded-full font-bold text-lg hover:bg-white hover:text-bosal-deep-green transition-colors flex justify-center items-center gap-2"
              >
                Proceed to Checkout
                <ArrowRight className="w-5 h-5" />
              </Link>
              
              <p className="text-center text-bosal-beige/50 text-sm mt-4">
                Taxes are calculated at checkout.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Cart;
