import { create } from 'zustand';

const useAuthStore = create((set) => ({
  user: null, // null means not logged in
  
  login: (email, password) => {
    // Mock login - in a real app this would call an API
    set({
      user: {
        id: '1',
        firstName: 'Jane',
        lastName: 'Doe',
        email: email,
        phone: '+234 123 456 7890',
        orders: [
          {
            id: 'ORD-001',
            date: '2023-10-24',
            status: 'Delivered',
            total: 12500,
            items: [
              { name: 'Jollof Rice & Grilled Chicken', quantity: 1, price: 5500 },
              { name: 'Pounded Yam & Egusi', quantity: 1, price: 7000 }
            ]
          },
          {
            id: 'ORD-002',
            date: '2023-11-02',
            status: 'Processing',
            total: 4500,
            items: [
              { name: 'Spicy Suya Skewers', quantity: 1, price: 4500 }
            ]
          }
        ]
      }
    });
  },
  
  signup: (firstName, lastName, email, password) => {
    // Mock signup
    set({
      user: {
        id: '2',
        firstName,
        lastName,
        email,
        phone: '',
        orders: []
      }
    });
  },
  
  logout: () => {
    set({ user: null });
  }
}));

export default useAuthStore;
