import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Plus, Edit2, Trash2 } from 'lucide-react';
import { menuItems } from '../../data/mockData';

const AdminMenu = () => {
  const [items] = useState(menuItems);

  return (
    <div className="space-y-6">
      
      {/* Header Actions */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="relative w-full sm:w-96">
          <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input 
            type="text" 
            placeholder="Search menu items..." 
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-bosal-bright-green"
          />
        </div>
        <button className="flex items-center gap-2 px-6 py-2 bg-bosal-deep-green text-bosal-beige rounded-xl font-bold hover:bg-bosal-bright-green transition-colors w-full sm:w-auto justify-center">
          <Plus className="w-5 h-5" /> Add New Item
        </button>
      </div>

      {/* Menu Table */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
      >
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr className="text-gray-400 text-sm border-b border-gray-100 bg-gray-50">
                <th className="p-4 font-medium w-16">Image</th>
                <th className="p-4 font-medium">Name</th>
                <th className="p-4 font-medium">Category</th>
                <th className="p-4 font-medium">Price</th>
                <th className="p-4 font-medium">Status</th>
                <th className="p-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {items.map((item, idx) => (
                <tr key={item.id} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                  <td className="p-4">
                    <img src={item.image} alt={item.name} className="w-12 h-12 rounded-lg object-cover" />
                  </td>
                  <td className="p-4 font-medium text-gray-700">
                    <p className="font-bold text-bosal-deep-green">{item.name}</p>
                    <p className="text-xs text-gray-400 truncate w-48">{item.description}</p>
                  </td>
                  <td className="p-4">
                    <span className="capitalize text-gray-500">{item.category}</span>
                  </td>
                  <td className="p-4 font-bold text-bosal-deep-green">₦{item.price.toLocaleString()}</td>
                  <td className="p-4">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-bosal-bright-green/10 text-bosal-bright-green">
                      Available
                    </span>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center justify-end gap-2">
                      <button className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                        <Trash2 className="w-4 h-4" />
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

export default AdminMenu;
