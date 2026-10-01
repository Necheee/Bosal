import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, CreditCard, Wallet, Truck, Store, CheckCircle2 } from 'lucide-react';
import useCartStore from '../store/cartStore';

const Checkout = () => {
  const navigate = useNavigate();
  const { items, getSubtotal, deliveryFee, clearCart } = useCartStore();
  const [orderMethod, setOrderMethod] = useState('delivery'); // 'delivery' or 'pickup'
  const [paymentMethod, setPaymentMethod] = useState('card'); // 'card' or 'transfer'
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const subtotal = getSubtotal();
  const finalTotal = orderMethod === 'delivery' ? subtotal + deliveryFee : subtotal;

  // If cart is empty and we haven't just succeeded, redirect or show empty state
  if (items.length === 0 && !isSuccess) {
    return (
      <div className="min-h-screen bg-bosal-beige flex items-center justify-center pt-24 pb-20">
        <div className="text-center">
          <h2 className="text-3xl font-display font-bold text-bosal-deep-green mb-4">Nothing to checkout</h2>
          <p className="text-bosal-deep-green/70 mb-8 max-w-md mx-auto">Your cart is empty.</p>
          <Link to="/menu" className="bg-bosal-deep-green text-bosal-beige px-8 py-3 rounded-full font-medium hover:bg-bosal-bright-green transition-colors">
            Back to Menu
          </Link>
        </div>
      </div>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate payment processing delay
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
      clearCart();
    }, 2500);
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-bosal-beige flex items-center justify-center pt-24 pb-20 px-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-3xl p-10 md:p-16 max-w-2xl w-full text-center shadow-xl"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="w-24 h-24 bg-bosal-bright-green/10 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <CheckCircle2 className="w-12 h-12 text-bosal-bright-green" />
          </motion.div>
          <h1 className="text-4xl font-display font-bold text-bosal-deep-green mb-4">Order Confirmed!</h1>
          <p className="text-lg text-bosal-deep-green/70 mb-8">
            Thank you for your order. We've received it and are preparing your delicious meals right now. 
            {orderMethod === 'delivery' ? " It will be delivered shortly." : " It will be ready for pickup soon."}
          </p>
          <button 
            onClick={() => navigate('/')}
            className="bg-bosal-deep-green text-bosal-beige px-10 py-4 rounded-full font-bold hover:bg-bosal-bright-green transition-colors"
          >
            Return to Home
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-bosal-beige pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Link to="/cart" className="inline-flex items-center gap-2 text-bosal-deep-green hover:text-bosal-bright-green font-medium mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Cart
        </Link>

        <h1 className="text-4xl md:text-5xl font-display font-bold text-bosal-deep-green mb-10">Checkout</h1>

        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Main Checkout Form */}
          <div className="lg:w-2/3">
            <form onSubmit={handleSubmit} className="space-y-10">
              
              {/* Order Method */}
              <section className="bg-white p-8 rounded-3xl shadow-sm">
                <h2 className="text-2xl font-bold text-bosal-deep-green mb-6">Order Method</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => setOrderMethod('delivery')}
                    className={`flex items-center gap-4 p-4 rounded-2xl border-2 transition-colors ${
                      orderMethod === 'delivery' 
                        ? 'border-bosal-bright-green bg-bosal-bright-green/5' 
                        : 'border-bosal-deep-green/10 hover:border-bosal-deep-green/30'
                    }`}
                  >
                    <Truck className={`w-6 h-6 ${orderMethod === 'delivery' ? 'text-bosal-bright-green' : 'text-bosal-deep-green/50'}`} />
                    <div className="text-left">
                      <span className="block font-bold text-bosal-deep-green">Delivery</span>
                      <span className="text-sm text-bosal-deep-green/60">₦{deliveryFee.toLocaleString()}</span>
                    </div>
                  </button>
                  <button
                    type="button"
                    onClick={() => setOrderMethod('pickup')}
                    className={`flex items-center gap-4 p-4 rounded-2xl border-2 transition-colors ${
                      orderMethod === 'pickup' 
                        ? 'border-bosal-bright-green bg-bosal-bright-green/5' 
                        : 'border-bosal-deep-green/10 hover:border-bosal-deep-green/30'
                    }`}
                  >
                    <Store className={`w-6 h-6 ${orderMethod === 'pickup' ? 'text-bosal-bright-green' : 'text-bosal-deep-green/50'}`} />
                    <div className="text-left">
                      <span className="block font-bold text-bosal-deep-green">Store Pickup</span>
                      <span className="text-sm text-bosal-deep-green/60">Free</span>
                    </div>
                  </button>
                </div>
              </section>

              {/* Customer Details */}
              <section className="bg-white p-8 rounded-3xl shadow-sm">
                <h2 className="text-2xl font-bold text-bosal-deep-green mb-6">Contact Details</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-bosal-deep-green mb-2">First Name</label>
                    <input required type="text" className="w-full bg-bosal-beige/30 border border-bosal-deep-green/10 rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-bosal-bright-green text-bosal-deep-green" placeholder="Jane" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-bosal-deep-green mb-2">Last Name</label>
                    <input required type="text" className="w-full bg-bosal-beige/30 border border-bosal-deep-green/10 rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-bosal-bright-green text-bosal-deep-green" placeholder="Doe" />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-bold text-bosal-deep-green mb-2">Email Address</label>
                    <input required type="email" className="w-full bg-bosal-beige/30 border border-bosal-deep-green/10 rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-bosal-bright-green text-bosal-deep-green" placeholder="jane@example.com" />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-bold text-bosal-deep-green mb-2">Phone Number</label>
                    <input required type="tel" className="w-full bg-bosal-beige/30 border border-bosal-deep-green/10 rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-bosal-bright-green text-bosal-deep-green" placeholder="+234 ..." />
                  </div>
                </div>

                <AnimatePresence>
                  {orderMethod === 'delivery' && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden mt-6"
                    >
                      <h2 className="text-2xl font-bold text-bosal-deep-green mb-6 pt-6 border-t border-bosal-deep-green/10">Delivery Address</h2>
                      <div className="space-y-6">
                        <div>
                          <label className="block text-sm font-bold text-bosal-deep-green mb-2">Street Address</label>
                          <input required type="text" className="w-full bg-bosal-beige/30 border border-bosal-deep-green/10 rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-bosal-bright-green text-bosal-deep-green" placeholder="123 Hilltop Avenue" />
                        </div>
                        <div>
                          <label className="block text-sm font-bold text-bosal-deep-green mb-2">Additional Instructions (Optional)</label>
                          <input type="text" className="w-full bg-bosal-beige/30 border border-bosal-deep-green/10 rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-bosal-bright-green text-bosal-deep-green" placeholder="E.g. Call when outside" />
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </section>

              {/* Payment Method */}
              <section className="bg-white p-8 rounded-3xl shadow-sm">
                <h2 className="text-2xl font-bold text-bosal-deep-green mb-6">Payment</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('card')}
                    className={`flex items-center gap-4 p-4 rounded-2xl border-2 transition-colors ${
                      paymentMethod === 'card' 
                        ? 'border-bosal-bright-green bg-bosal-bright-green/5' 
                        : 'border-bosal-deep-green/10 hover:border-bosal-deep-green/30'
                    }`}
                  >
                    <CreditCard className={`w-6 h-6 ${paymentMethod === 'card' ? 'text-bosal-bright-green' : 'text-bosal-deep-green/50'}`} />
                    <span className="font-bold text-bosal-deep-green">Debit / Credit Card</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('transfer')}
                    className={`flex items-center gap-4 p-4 rounded-2xl border-2 transition-colors ${
                      paymentMethod === 'transfer' 
                        ? 'border-bosal-bright-green bg-bosal-bright-green/5' 
                        : 'border-bosal-deep-green/10 hover:border-bosal-deep-green/30'
                    }`}
                  >
                    <Wallet className={`w-6 h-6 ${paymentMethod === 'transfer' ? 'text-bosal-bright-green' : 'text-bosal-deep-green/50'}`} />
                    <span className="font-bold text-bosal-deep-green">Bank Transfer</span>
                  </button>
                </div>

                {/* Mock Card Input */}
                <AnimatePresence>
                  {paymentMethod === 'card' && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden space-y-6"
                    >
                      <div>
                        <label className="block text-sm font-bold text-bosal-deep-green mb-2">Card Number</label>
                        <input required type="text" maxLength="19" className="w-full bg-bosal-beige/30 border border-bosal-deep-green/10 rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-bosal-bright-green text-bosal-deep-green" placeholder="0000 0000 0000 0000" />
                      </div>
                      <div className="grid grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-bold text-bosal-deep-green mb-2">Expiry Date</label>
                          <input required type="text" maxLength="5" className="w-full bg-bosal-beige/30 border border-bosal-deep-green/10 rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-bosal-bright-green text-bosal-deep-green" placeholder="MM/YY" />
                        </div>
                        <div>
                          <label className="block text-sm font-bold text-bosal-deep-green mb-2">CVV</label>
                          <input required type="text" maxLength="4" className="w-full bg-bosal-beige/30 border border-bosal-deep-green/10 rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-bosal-bright-green text-bosal-deep-green" placeholder="123" />
                        </div>
                      </div>
                    </motion.div>
                  )}
                  {paymentMethod === 'transfer' && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden bg-bosal-beige/50 p-6 rounded-2xl border border-bosal-deep-green/10"
                    >
                      <p className="text-bosal-deep-green/80 text-center">
                        You will be provided with our official bank account details on the next screen after confirming your order.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </section>

              {/* Mobile Submit (Hidden on LG) */}
              <div className="lg:hidden">
                <button 
                  type="submit"
                  disabled={isProcessing}
                  className="w-full py-4 bg-bosal-deep-green text-bosal-beige rounded-full font-bold text-lg hover:bg-bosal-bright-green transition-colors flex justify-center items-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isProcessing ? (
                    <span className="flex items-center gap-2">
                      <div className="w-5 h-5 border-2 border-bosal-beige border-t-transparent rounded-full animate-spin"></div>
                      Processing...
                    </span>
                  ) : (
                    `Pay ₦${finalTotal.toLocaleString()}`
                  )}
                </button>
              </div>
            </form>
          </div>

          {/* Order Summary Sidebar */}
          <div className="lg:w-1/3 hidden lg:block">
            <div className="bg-bosal-deep-green text-bosal-beige rounded-3xl p-8 sticky top-28 shadow-xl">
              <h2 className="text-2xl font-display font-bold mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6 pb-6 border-b border-bosal-beige/20 max-h-64 overflow-y-auto hide-scrollbar">
                {items.map(item => (
                  <div key={item.id} className="flex justify-between items-start text-sm">
                    <div className="flex gap-2">
                      <span className="text-bosal-bright-green font-bold">{item.quantity}x</span>
                      <span className="text-bosal-beige/80 truncate w-40">{item.name}</span>
                    </div>
                    <span className="font-bold">₦{(item.price * item.quantity).toLocaleString()}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-4 mb-6 pb-6 border-b border-bosal-beige/20">
                <div className="flex justify-between">
                  <span className="text-bosal-beige/70">Subtotal</span>
                  <span className="font-bold">₦{subtotal.toLocaleString()}</span>
                </div>
                {orderMethod === 'delivery' && (
                  <div className="flex justify-between">
                    <span className="text-bosal-beige/70">Delivery Fee</span>
                    <span className="font-bold">₦{deliveryFee.toLocaleString()}</span>
                  </div>
                )}
              </div>

              <div className="flex justify-between items-center mb-8">
                <span className="text-lg font-bold">Total</span>
                <span className="text-3xl font-bold text-bosal-bright-green">₦{finalTotal.toLocaleString()}</span>
              </div>

              <button 
                onClick={(e) => {
                  const form = document.querySelector('form');
                  if (form.checkValidity()) {
                    form.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }));
                  } else {
                    form.reportValidity();
                  }
                }}
                disabled={isProcessing}
                className="w-full py-4 bg-bosal-bright-green text-white rounded-full font-bold text-lg hover:bg-white hover:text-bosal-deep-green transition-colors flex justify-center items-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isProcessing ? (
                  <span className="flex items-center gap-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Processing...
                  </span>
                ) : (
                  `Pay ₦${finalTotal.toLocaleString()}`
                )}
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Checkout;
