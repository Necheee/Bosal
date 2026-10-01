import { motion } from 'framer-motion';
import { DollarSign, ShoppingBag, Users, TrendingUp } from 'lucide-react';

const AdminDashboard = () => {
  const stats = [
    { title: 'Total Revenue', value: '₦425,000', change: '+12%', icon: DollarSign },
    { title: 'Active Orders', value: '18', change: '+5', icon: ShoppingBag },
    { title: 'Total Customers', value: '142', change: '+24%', icon: Users },
    { title: 'Avg. Order Value', value: '₦14,500', change: '+3%', icon: TrendingUp },
  ];

  const recentOrders = [
    { id: '#ORD-092', customer: 'Jane Doe', amount: '₦12,500', status: 'Processing', time: '10 mins ago' },
    { id: '#ORD-091', customer: 'Michael Smith', amount: '₦8,000', status: 'Delivered', time: '1 hour ago' },
    { id: '#ORD-090', customer: 'Sarah Johnson', amount: '₦22,000', status: 'Processing', time: '2 hours ago' },
    { id: '#ORD-089', customer: 'David Okafor', amount: '₦15,000', status: 'Delivered', time: '3 hours ago' },
  ];

  return (
    <div className="space-y-8">
      
      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="w-12 h-12 bg-bosal-bright-green/10 rounded-xl flex items-center justify-center">
                <stat.icon className="w-6 h-6 text-bosal-bright-green" />
              </div>
              <span className="text-sm font-bold text-bosal-bright-green bg-bosal-bright-green/10 px-2 py-1 rounded-full">
                {stat.change}
              </span>
            </div>
            <h3 className="text-gray-500 text-sm font-medium mb-1">{stat.title}</h3>
            <p className="text-2xl font-bold text-bosal-deep-green">{stat.value}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Recent Orders Table */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-gray-100 p-6"
        >
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-bold text-bosal-deep-green">Recent Orders</h3>
            <button className="text-sm font-bold text-bosal-bright-green hover:underline">View All</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="text-gray-400 text-sm border-b border-gray-100">
                  <th className="pb-3 font-medium">Order ID</th>
                  <th className="pb-3 font-medium">Customer</th>
                  <th className="pb-3 font-medium">Amount</th>
                  <th className="pb-3 font-medium">Status</th>
                  <th className="pb-3 font-medium">Time</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {recentOrders.map((order, idx) => (
                  <tr key={idx} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                    <td className="py-4 font-medium text-bosal-deep-green">{order.id}</td>
                    <td className="py-4 text-gray-600">{order.customer}</td>
                    <td className="py-4 font-bold text-bosal-deep-green">{order.amount}</td>
                    <td className="py-4">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${
                        order.status === 'Delivered' 
                          ? 'bg-bosal-bright-green/10 text-bosal-bright-green' 
                          : 'bg-amber-100 text-amber-600'
                      }`}>
                        {order.status}
                      </span>
                    </td>
                    <td className="py-4 text-gray-400">{order.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Popular Items */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6"
        >
          <h3 className="text-lg font-bold text-bosal-deep-green mb-6">Popular Items</h3>
          <div className="space-y-6">
            {[
              { name: 'Jollof Rice & Grilled Chicken', sales: 124 },
              { name: 'Pounded Yam & Egusi', sales: 98 },
              { name: 'Spicy Suya Skewers', sales: 85 },
              { name: 'Beef Suya Pizza', sales: 42 },
            ].map((item, idx) => (
              <div key={idx} className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-xs font-bold text-gray-500">
                    {idx + 1}
                  </div>
                  <span className="text-sm font-medium text-bosal-deep-green truncate w-32 sm:w-40">{item.name}</span>
                </div>
                <span className="text-sm font-bold text-bosal-bright-green">{item.sales} sales</span>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default AdminDashboard;
