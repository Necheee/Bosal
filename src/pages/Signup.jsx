import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import useAuthStore from '../store/authStore';

const Signup = () => {
  const navigate = useNavigate();
  const signup = useAuthStore((state) => state.signup);
  
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate network delay
    setTimeout(() => {
      signup(firstName, lastName, email, password);
      setIsLoading(false);
      navigate('/profile');
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-bosal-beige flex items-center justify-center pt-24 pb-20 px-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-3xl p-8 md:p-12 max-w-md w-full shadow-xl"
      >
        <div className="text-center mb-10">
          <h1 className="text-3xl font-display font-bold text-bosal-deep-green mb-3">Create Account</h1>
          <p className="text-bosal-deep-green/70">Join Bosal to track your orders and save your details for faster checkout.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-bold text-bosal-deep-green mb-2">First Name</label>
              <input 
                type="text" 
                required
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full bg-bosal-beige/30 border border-bosal-deep-green/10 rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-bosal-bright-green text-bosal-deep-green"
                placeholder="Jane"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-bosal-deep-green mb-2">Last Name</label>
              <input 
                type="text" 
                required
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full bg-bosal-beige/30 border border-bosal-deep-green/10 rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-bosal-bright-green text-bosal-deep-green"
                placeholder="Doe"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-bosal-deep-green mb-2">Email Address</label>
            <input 
              type="email" 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-bosal-beige/30 border border-bosal-deep-green/10 rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-bosal-bright-green text-bosal-deep-green"
              placeholder="jane@example.com"
            />
          </div>
          
          <div>
            <label className="block text-sm font-bold text-bosal-deep-green mb-2">Password</label>
            <input 
              type="password" 
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-bosal-beige/30 border border-bosal-deep-green/10 rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-bosal-bright-green text-bosal-deep-green"
              placeholder="••••••••"
            />
          </div>

          <button 
            type="submit"
            disabled={isLoading}
            className="w-full py-4 bg-bosal-deep-green text-bosal-beige rounded-full font-bold text-lg hover:bg-bosal-bright-green transition-colors disabled:opacity-70 flex justify-center items-center gap-2"
          >
            {isLoading ? (
              <>
                <div className="w-5 h-5 border-2 border-bosal-beige border-t-transparent rounded-full animate-spin"></div>
                Creating account...
              </>
            ) : (
              "Create Account"
            )}
          </button>
        </form>

        <div className="mt-8 text-center text-sm text-bosal-deep-green/70">
          Already have an account?{' '}
          <Link to="/login" className="text-bosal-bright-green font-bold hover:underline">
            Sign In
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Signup;
