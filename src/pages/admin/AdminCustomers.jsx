import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Mail, X, Send } from 'lucide-react';

const AdminCustomers = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [customers, setCustomers] = useState([
    { id: 'CUS-01', name: 'Jane Doe', email: 'jane@example.com', phone: '+234 801 234 5678', orders: 12, spent: '₦145,000', joined: 'Jan 2026' },
    { id: 'CUS-02', name: 'Michael Smith', email: 'mike@example.com', phone: '+234 802 345 6789', orders: 4, spent: '₦42,000', joined: 'Mar 2026' },
    { id: 'CUS-03', name: 'Sarah Johnson', email: 'sarah@example.com', phone: '+234 803 456 7890', orders: 8, spent: '₦98,500', joined: 'Feb 2026' },
    { id: 'CUS-04', name: 'David Okafor', email: 'david@example.com', phone: '+234 804 567 8901', orders: 2, spent: '₦15,000', joined: 'Sep 2026' },
    { id: 'CUS-05', name: 'Emmanuel Eze', email: 'emmanuel@example.com', phone: '+234 805 678 9012', orders: 15, spent: '₦210,000', joined: 'Dec 2025' },
  ]);

  // Email Modal State
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [emailContent, setEmailContent] = useState({ subject: '', message: '' });
  const [showToast, setShowToast] = useState(false);

  const handleDeleteCustomer = (id, name) => {
    if(window.confirm(`Are you sure you want to remove ${name}?`)) {
      setCustomers(customers.filter(c => c.id !== id));
    }
  };

  const openEmailModal = (customer) => {
    setSelectedCustomer(customer);
    setEmailContent({ subject: '', message: '' });
    setIsEmailModalOpen(true);
  };

  const handleSendEmail = (e) => {
    e.preventDefault();
    setIsEmailModalOpen(false);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const filteredCustomers = customers.filter(c => 
    c.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    c.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6 relative">
      
      {/* Toast Notification */}
      <AnimatePresence>
        {showToast && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 1, y: 0 }} 
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-6 right-6 bg-bosal-deep-green text-bosal-beige px-6 py-3 rounded-xl shadow-xl z-50 font-medium"
          >
            Email successfully sent to {selectedCustomer?.name}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header Actions */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="relative w-full sm:w-96">
          <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input 
            type="text" 
            placeholder="Search customers by name or email..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
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
              {filteredCustomers.length === 0 ? (
                <tr>
                  <td colSpan="6" className="p-8 text-center text-gray-500">
                    No customers found matching "{searchQuery}".
                  </td>
                </tr>
              ) : (
                filteredCustomers.map((customer) => (
                  <tr key={customer.id} className="border-b border-gray-50 hover:bg-gray-50 transition-colors group">
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
                        <button 
                          onClick={() => openEmailModal(customer)}
                          className="p-2 text-gray-400 hover:text-bosal-bright-green hover:bg-bosal-bright-green/10 rounded-lg transition-colors"
                          title="Send Email"
                        >
                          <Mail className="w-4 h-4" />
                        </button>
                        <button 
                          onClick={() => handleDeleteCustomer(customer.id, customer.name)}
                          className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors opacity-0 group-hover:opacity-100"
                          title="Remove Customer"
                        >
                          <X className="w-5 h-5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* Email Modal */}
      <AnimatePresence>
        {isEmailModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="absolute inset-0 bg-bosal-deep-green/50 backdrop-blur-sm"
              onClick={() => setIsEmailModalOpen(false)}
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }}
              className="relative bg-white rounded-2xl shadow-xl w-full max-w-lg overflow-hidden z-10"
            >
              <div className="flex justify-between items-center p-6 border-b border-gray-100">
                <div>
                  <h3 className="text-xl font-bold text-bosal-deep-green">Compose Message</h3>
                  <p className="text-sm text-gray-500 mt-1">To: {selectedCustomer?.name} ({selectedCustomer?.email})</p>
                </div>
                <button onClick={() => setIsEmailModalOpen(false)} className="text-gray-400 hover:text-bosal-deep-green">
                  <X className="w-6 h-6" />
                </button>
              </div>
              <form onSubmit={handleSendEmail} className="p-6 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                  <input required type="text" value={emailContent.subject} onChange={(e) => setEmailContent({...emailContent, subject: e.target.value})} className="w-full px-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-bosal-bright-green" placeholder="Message Subject" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea required rows="6" value={emailContent.message} onChange={(e) => setEmailContent({...emailContent, message: e.target.value})} className="w-full px-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-bosal-bright-green resize-none" placeholder="Type your message here..."></textarea>
                </div>
                <div className="pt-4 flex gap-3 justify-end">
                  <button type="button" onClick={() => setIsEmailModalOpen(false)} className="px-6 py-2 border border-gray-200 text-gray-600 rounded-xl font-bold hover:bg-gray-50 transition-colors">
                    Cancel
                  </button>
                  <button type="submit" className="flex items-center gap-2 px-6 py-2 bg-bosal-bright-green text-white rounded-xl font-bold hover:bg-bosal-deep-green transition-colors">
                    <Send className="w-4 h-4" /> Send Message
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AdminCustomers;
