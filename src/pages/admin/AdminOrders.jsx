import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, MoreVertical, X } from 'lucide-react';

const AdminOrders = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [showFilterMenu, setShowFilterMenu] = useState(false);

  const [orders, setOrders] = useState([
    { id: '#ORD-092', customer: 'Jane Doe', items: 3, total: '₦12,500', type: 'Delivery', status: 'Processing', date: 'Oct 1, 2026' },
    { id: '#ORD-091', customer: 'Michael Smith', items: 1, total: '₦8,000', type: 'Pickup', status: 'Delivered', date: 'Oct 1, 2026' },
    { id: '#ORD-090', customer: 'Sarah Johnson', items: 4, total: '₦22,000', type: 'Delivery', status: 'Processing', date: 'Oct 1, 2026' },
    { id: '#ORD-089', customer: 'David Okafor', items: 2, total: '₦15,000', type: 'Delivery', status: 'Delivered', date: 'Sep 30, 2026' },
    { id: '#ORD-088', customer: 'Emmanuel Eze', items: 5, total: '₦35,000', type: 'Pickup', status: 'Cancelled', date: 'Sep 30, 2026' },
  ]);

  // Handle deleting an order
  const handleDeleteOrder = (id) => {
    if(window.confirm(`Are you sure you want to delete order ${id}?`)) {
      setOrders(orders.filter(order => order.id !== id));
    }
  };

  // Filter orders based on search query and status
  const filteredOrders = orders.filter(order => {
    const matchesSearch = 
      order.customer.toLowerCase().includes(searchQuery.toLowerCase()) || 
      order.id.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesStatus = statusFilter === 'All' || order.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6 relative">
      
      {/* Header Actions */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="relative w-full sm:w-96">
          <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input 
            type="text" 
            placeholder="Search by customer or order ID..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-bosal-bright-green"
          />
        </div>
        <div className="relative">
          <button 
            onClick={() => setShowFilterMenu(!showFilterMenu)}
            className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-xl font-medium text-gray-600 hover:bg-gray-50 transition-colors"
          >
            <Filter className="w-4 h-4" /> 
            {statusFilter === 'All' ? 'Filter' : statusFilter}
          </button>
          
          {/* Dropdown Filter Menu */}
          {showFilterMenu && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-100 py-2 z-10">
              {['All', 'Processing', 'Delivered', 'Cancelled'].map(status => (
                <button
                  key={status}
                  onClick={() => {
                    setStatusFilter(status);
                    setShowFilterMenu(false);
                  }}
                  className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 ${statusFilter === status ? 'font-bold text-bosal-bright-green' : 'text-gray-700'}`}
                >
                  {status}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Orders Table */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
      >
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr className="text-gray-400 text-sm border-b border-gray-100 bg-gray-50">
                <th className="p-4 font-medium">Order ID</th>
                <th className="p-4 font-medium">Date</th>
                <th className="p-4 font-medium">Customer</th>
                <th className="p-4 font-medium">Type</th>
                <th className="p-4 font-medium">Items</th>
                <th className="p-4 font-medium">Total</th>
                <th className="p-4 font-medium">Status</th>
                <th className="p-4 font-medium text-center">Action</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {filteredOrders.length === 0 ? (
                <tr>
                  <td colSpan="8" className="p-8 text-center text-gray-500">
                    No orders found matching your criteria.
                  </td>
                </tr>
              ) : (
                filteredOrders.map((order, idx) => (
                  <tr key={order.id} className="border-b border-gray-50 hover:bg-gray-50 transition-colors group">
                    <td className="p-4 font-bold text-bosal-deep-green">{order.id}</td>
                    <td className="p-4 text-gray-500">{order.date}</td>
                    <td className="p-4 font-medium text-gray-700">{order.customer}</td>
                    <td className="p-4">
                      <span className={`inline-block px-2 py-1 rounded-md text-xs font-medium ${
                        order.type === 'Delivery' ? 'bg-blue-50 text-blue-600' : 'bg-purple-50 text-purple-600'
                      }`}>
                        {order.type}
                      </span>
                    </td>
                    <td className="p-4 text-gray-500">{order.items} items</td>
                    <td className="p-4 font-bold text-bosal-deep-green">{order.total}</td>
                    <td className="p-4">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${
                        order.status === 'Delivered' ? 'bg-bosal-bright-green/10 text-bosal-bright-green' : 
                        order.status === 'Processing' ? 'bg-amber-100 text-amber-600' : 
                        'bg-red-100 text-red-600'
                      }`}>
                        {order.status}
                      </span>
                    </td>
                    <td className="p-4 text-center">
                      <button 
                        onClick={() => handleDeleteOrder(order.id)}
                        className="text-gray-400 hover:text-red-500 p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                        title="Delete Order"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
        
        {/* Pagination mock */}
        <div className="p-4 border-t border-gray-100 flex items-center justify-between text-sm text-gray-500">
          <span>Showing {filteredOrders.length} entries</span>
          <div className="flex gap-1">
            <button className="px-3 py-1 border border-gray-200 rounded-md hover:bg-gray-50 disabled:opacity-50" disabled>Prev</button>
            <button className="px-3 py-1 border border-gray-200 rounded-md hover:bg-gray-50 text-bosal-deep-green font-bold">1</button>
            <button className="px-3 py-1 border border-gray-200 rounded-md hover:bg-gray-50 disabled:opacity-50" disabled>Next</button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AdminOrders;
