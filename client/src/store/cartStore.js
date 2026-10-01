import { create } from 'zustand';

const useCartStore = create((set, get) => ({
  items: [],
  deliveryFee: 1500, // Fixed delivery fee (₦1,500)

  addToCart: (item, quantity = 1, specialInstructions = '') => set((state) => {
    const existingItemIndex = state.items.findIndex(i => i.id === item.id);
    
    if (existingItemIndex !== -1) {
      // Item exists, update quantity
      const newItems = [...state.items];
      newItems[existingItemIndex].quantity += quantity;
      
      // Optionally update instructions if new ones are provided
      if (specialInstructions) {
        newItems[existingItemIndex].specialInstructions = specialInstructions;
      }
      
      return { items: newItems };
    }
    
    // New item
    return { 
      items: [...state.items, { ...item, quantity, specialInstructions }] 
    };
  }),

  removeFromCart: (itemId) => set((state) => ({
    items: state.items.filter(i => i.id !== itemId)
  })),

  updateQuantity: (itemId, quantity) => set((state) => ({
    items: state.items.map(i => 
      i.id === itemId ? { ...i, quantity: Math.max(1, quantity) } : i
    )
  })),

  clearCart: () => set({ items: [] }),

  // Computed properties / getters
  getTotalItems: () => {
    const state = get();
    return state.items.reduce((total, item) => total + item.quantity, 0);
  },

  getSubtotal: () => {
    const state = get();
    return state.items.reduce((total, item) => total + (item.price * item.quantity), 0);
  },

  getTotal: (isDelivery = false) => {
    const state = get();
    const subtotal = state.getSubtotal();
    return isDelivery ? subtotal + state.deliveryFee : subtotal;
  }
}));

export default useCartStore;
