import { useState, useMemo } from 'react';
/* eslint-disable no-unused-vars */
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, ShoppingBag, CheckCircle } from 'lucide-react';
import { menuItems, menuCategories } from '../data/mockData';
import useCartStore from '../store/cartStore';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFood, setSelectedFood] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [showToast, setShowToast] = useState(false);
  
  const addToCart = useCartStore(state => state.addToCart);

  const handleAddToCart = () => {
    addToCart(selectedFood, quantity);
    setSelectedFood(null);
    setQuantity(1);
    
    // Show toast for 3 seconds
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const filteredMenu = useMemo(() => {
    return menuItems.filter(item => {
      const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
      const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            item.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-bosal-beige pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Search */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
          <div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-bosal-deep-green mb-4">Our Menu</h1>
            <p className="text-bosal-deep-green/70">Authentic flavors, crafted with passion.</p>
          </div>
          
          <div className="relative w-full md:w-96">
            <input 
              type="text" 
              placeholder="Search dishes, ingredients..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-bosal-deep-green/20 rounded-full py-3 px-6 pl-12 focus:outline-none focus:ring-2 focus:ring-bosal-bright-green focus:border-transparent text-bosal-deep-green"
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-bosal-deep-green/50 w-5 h-5" />
          </div>
        </div>

        {/* Categories */}
        <div className="flex overflow-x-auto hide-scrollbar gap-3 mb-12 pb-2">
          {menuCategories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`whitespace-nowrap px-6 py-2 rounded-full font-medium transition-colors ${
                activeCategory === category 
                  ? 'bg-bosal-deep-green text-bosal-beige' 
                  : 'bg-white text-bosal-deep-green hover:bg-bosal-deep-green/10'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredMenu.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={item.id}
                onClick={() => setSelectedFood(item)}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow cursor-pointer group flex flex-col"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {item.popular && (
                    <div className="absolute top-4 right-4 bg-bosal-bright-green text-bosal-beige text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      Popular
                    </div>
                  )}
                </div>
                <div className="p-6 flex flex-col grow">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-display font-bold text-bosal-deep-green">{item.name}</h3>
                    <span className="text-lg font-bold text-bosal-bright-green">₦{item.price.toLocaleString()}</span>
                  </div>
                  <p className="text-bosal-deep-green/70 text-sm line-clamp-2 mb-6">{item.description}</p>
                  
                  <div className="mt-auto">
                    <button className="w-full py-3 rounded-xl border-2 border-bosal-deep-green/10 text-bosal-deep-green font-bold hover:bg-bosal-deep-green hover:text-bosal-beige hover:border-bosal-deep-green transition-colors flex items-center justify-center gap-2">
                      <ShoppingBag className="w-5 h-5" />
                      Add to Cart
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredMenu.length === 0 && (
          <div className="text-center py-20">
            <h3 className="text-2xl font-display font-bold text-bosal-deep-green mb-2">No dishes found</h3>
            <p className="text-bosal-deep-green/70">We couldn't find anything matching your search.</p>
            <button 
              onClick={() => {setSearchQuery(''); setActiveCategory('All');}}
              className="mt-6 px-6 py-2 bg-bosal-deep-green text-bosal-beige rounded-full font-medium"
            >
              Clear Search
            </button>
          </div>
        )}

      </div>

      {/* Food Details Modal */}
      <AnimatePresence>
        {selectedFood && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => { setSelectedFood(null); setQuantity(1); }}
              className="fixed inset-0 bg-bosal-deep-green/60 backdrop-blur-sm z-50"
            />
            <motion.div
              initial={{ opacity: 0, y: 100, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 100, scale: 0.95 }}
              style={{ maxHeight: '90vh' }}
              className="fixed inset-x-0 bottom-0 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 w-full md:w-full md:max-w-4xl bg-bosal-beige md:rounded-3xl rounded-t-3xl z-50 overflow-hidden flex flex-col md:flex-row shadow-2xl"
            >
              <button 
                onClick={() => { setSelectedFood(null); setQuantity(1); }}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/50 backdrop-blur-md rounded-full flex items-center justify-center text-bosal-deep-green hover:bg-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <div 
                className="w-full md:w-1/2 h-64 relative"
                style={{ minHeight: '400px' }}
              >
                <img src={selectedFood.image} alt={selectedFood.name} className="w-full h-full object-cover" />
              </div>

              <div className="w-full md:w-1/2 p-6 md:p-10 overflow-y-auto flex flex-col">
                <div className="uppercase tracking-widest text-xs font-bold text-bosal-bright-green mb-3">
                  {selectedFood.category}
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-bosal-deep-green mb-3">
                  {selectedFood.name}
                </h2>
                <p className="text-base text-bosal-deep-green/70 mb-8 leading-relaxed">
                  {selectedFood.description}
                </p>

                <div className="mb-8">
                  <label className="block text-sm font-bold text-bosal-deep-green mb-3">Quantity</label>
                  <div className="flex items-center gap-4 bg-white rounded-full w-fit p-1 border border-bosal-deep-green/10 shadow-sm">
                    <button 
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-10 h-10 rounded-full bg-bosal-beige flex items-center justify-center text-bosal-deep-green hover:bg-bosal-deep-green hover:text-bosal-beige transition-colors"
                    >
                      -
                    </button>
                    <span className="font-bold text-lg w-8 text-center text-bosal-deep-green">{quantity}</span>
                    <button 
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-10 h-10 rounded-full bg-bosal-beige flex items-center justify-center text-bosal-deep-green hover:bg-bosal-deep-green hover:text-bosal-beige transition-colors"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="mt-auto pt-6 border-t border-bosal-deep-green/10">
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-sm font-bold text-bosal-deep-green/70 uppercase tracking-wider">Total</span>
                    <span className="text-3xl font-bold text-bosal-deep-green">₦{(selectedFood.price * quantity).toLocaleString()}</span>
                  </div>
                  <button 
                    onClick={handleAddToCart}
                    className="w-full py-4 bg-bosal-deep-green text-bosal-beige rounded-full font-bold text-lg hover:bg-bosal-bright-green transition-colors flex justify-center items-center gap-2 shadow-lg"
                  >
                    <ShoppingBag className="w-5 h-5" />
                    Add to Cart • ₦{(selectedFood.price * quantity).toLocaleString()}
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Success Toast Notification */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-bosal-deep-green text-bosal-beige px-6 py-4 rounded-full shadow-2xl flex items-center gap-3"
          >
            <CheckCircle className="w-6 h-6 text-bosal-bright-green" />
            <span className="font-medium whitespace-nowrap">Added to your cart successfully!</span>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default Menu;

