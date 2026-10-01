import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Mail, MoreVertical } from 'lucide-react';

const AdminCustomers = () => {
  const [customers] = useState([
    { id: 'CUS-01', name: 'Jane Doe', email: 'jane@example.com', phone: '+234 801 234 5678', orders: 12, spent: '₦145,000', joined: 'Jan 2026' },
    { id: 'CUS-02', name: 'Michael Smith', email: 'mike@example.com', phone: '+234 802 345 6789', orders: 4, spent: '₦42,000', joined: 'Mar 2026' },
    { id: 'CUS-03', name: 'Sarah Johnson', email: 'sarah@example.com', phone: '+234 803 456 7890', orders: 8, spent: '₦98,500', joined: 'Feb 2026' },
    { id: 'CUS-04', name: 'David Okafor', email: 'david@example.com', phone: '+234 804 567 8901', orders: 2, spent: '₦15,000', joined: 'Sep 2026' },
    { id: 'CUS-05', name: 'Emmanuel Eze', email: 'emmanuel@example.com', phone: '+234 805 678 9012', orders: 15, spent: '₦210,000', joined: 'Dec 2025' },
  ]);

  return (
    <div className="space-y-6">
      
      {/* Header Actions */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="relative w-full sm:w-96">
          <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input 
            type="text" 
            placeholder="Search customers..." 
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-bosal-bright-green"
          />
        </div>
      </div>

      {/* Customers Table */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
      >
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[900px]">
            <thead>
              <tr className="text-gray-400 text-sm border-b border-gray-100 bg-gray-50">
                <th className="p-4 font-medium">Customer</th>
                <th className="p-4 font-medium">Contact</th>
                <th className="p-4 font-medium">Total Orders</th>
                <th className="p-4 font-medium">Total Spent</th>
                <th className="p-4 font-medium">Joined</th>
                <th className="p-4 font-medium text-center">Action</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {customers.map((customer, idx) => (
                <tr key={idx} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-bosal-deep-green/5 text-bosal-deep-green flex items-center justify-center font-bold">
                        {customer.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-bold text-bosal-deep-green">{customer.name}</p>
                        <p className="text-xs text-gray-400">{customer.id}</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-4">
                    <p className="text-gray-700">{customer.email}</p>
                    <p className="text-xs text-gray-400">{customer.phone}</p>
                  </td>
                  <td className="p-4 text-gray-500 font-medium">
                    <span className="bg-gray-100 px-3 py-1 rounded-full">{customer.orders} orders</span>
                  </td>
                  <td className="p-4 font-bold text-bosal-bright-green">{customer.spent}</td>
                  <td className="p-4 text-gray-500">{customer.joined}</td>
                  <td className="p-4">
                    <div className="flex items-center justify-center gap-2">
                      <button className="p-2 text-gray-400 hover:text-bosal-bright-green hover:bg-bosal-bright-green/10 rounded-lg transition-colors">
                        <Mail className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-bosal-deep-green rounded-lg transition-colors">
                        <MoreVertical className="w-5 h-5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
};

export default AdminCustomers;
