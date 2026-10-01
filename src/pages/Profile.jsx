import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { LogOut, Package, User, MapPin } from 'lucide-react';
import useAuthStore from '../store/authStore';

const Profile = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuthStore();

  // Protect route
  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);

  if (!user) return null;

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-bosal-beige pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-bosal-deep-green mb-2">My Account</h1>
            <p className="text-lg text-bosal-deep-green/70">Welcome back, {user.firstName}!</p>
          </div>
          <button 
            onClick={handleLogout}
            className="flex items-center gap-2 text-bosal-deep-green hover:text-red-500 font-bold transition-colors"
          >
            <LogOut className="w-5 h-5" /> Sign Out
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* User Details Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-3xl p-8 shadow-sm"
            >
              <div className="flex items-center gap-4 mb-8 pb-8 border-b border-bosal-deep-green/10">
                <div className="w-16 h-16 bg-bosal-bright-green/10 rounded-full flex items-center justify-center text-bosal-bright-green font-display font-bold text-2xl">
                  {user.firstName[0]}{user.lastName[0]}
                </div>
                <div>
                  <h3 className="font-bold text-xl text-bosal-deep-green">{user.firstName} {user.lastName}</h3>
                  <p className="text-bosal-deep-green/60 text-sm">Member</p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <User className="w-5 h-5 text-bosal-bright-green mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm text-bosal-deep-green/60 font-medium">Email</p>
                    <p className="text-bosal-deep-green font-medium">{user.email}</p>
                  </div>
                </div>
                
                {user.phone && (
                  <div className="flex items-start gap-4">
                    <User className="w-5 h-5 text-bosal-bright-green mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm text-bosal-deep-green/60 font-medium">Phone</p>
                      <p className="text-bosal-deep-green font-medium">{user.phone}</p>
                    </div>
                  </div>
                )}

                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-bosal-bright-green mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm text-bosal-deep-green/60 font-medium">Saved Address</p>
                    <p className="text-bosal-deep-green font-medium">123 Hilltop Avenue,<br />Nsukka, Enugu</p>
                  </div>
                </div>
              </div>
              
              <button className="w-full mt-8 py-3 border-2 border-bosal-deep-green/10 rounded-full font-bold text-bosal-deep-green hover:border-bosal-deep-green transition-colors">
                Edit Profile
              </button>
            </motion.div>
          </div>

          {/* Order History */}
          <div className="lg:col-span-2">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-3xl p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-8">
                <Package className="w-6 h-6 text-bosal-bright-green" />
                <h2 className="text-2xl font-bold text-bosal-deep-green">Order History</h2>
              </div>

              {(!user.orders || user.orders.length === 0) ? (
                <div className="text-center py-12 bg-bosal-beige/30 rounded-2xl border border-dashed border-bosal-deep-green/20">
                  <p className="text-bosal-deep-green/70 mb-4">You haven't placed any orders yet.</p>
                  <button 
                    onClick={() => navigate('/menu')}
                    className="text-bosal-bright-green font-bold hover:underline"
                  >
                    Browse Menu
                  </button>
                </div>
              ) : (
                <div className="space-y-6">
                  {user.orders.map((order) => (
                    <div key={order.id} className="border border-bosal-deep-green/10 rounded-2xl p-6 hover:border-bosal-deep-green/30 transition-colors">
                      <div className="flex flex-wrap justify-between items-start gap-4 mb-4 pb-4 border-b border-bosal-deep-green/10">
                        <div>
                          <p className="font-bold text-bosal-deep-green mb-1">Order #{order.id}</p>
                          <p className="text-sm text-bosal-deep-green/60">{order.date}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-bosal-deep-green mb-1">₦{order.total.toLocaleString()}</p>
                          <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${
                            order.status === 'Delivered' 
                              ? 'bg-bosal-bright-green/10 text-bosal-bright-green' 
                              : 'bg-amber-500/10 text-amber-600'
                          }`}>
                            {order.status}
                          </span>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        {order.items.map((item, idx) => (
                          <div key={idx} className="flex justify-between text-sm">
                            <span className="text-bosal-deep-green/80">
                              <span className="font-bold text-bosal-deep-green mr-2">{item.quantity}x</span> 
                              {item.name}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Profile;
