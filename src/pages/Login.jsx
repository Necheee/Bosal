import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import useAuthStore from '../store/authStore';

const Login = () => {
  const navigate = useNavigate();
  const login = useAuthStore((state) => state.login);
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate network delay
    setTimeout(() => {
      login(email, password);
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
          <h1 className="text-3xl font-display font-bold text-bosal-deep-green mb-3">Welcome Back</h1>
          <p className="text-bosal-deep-green/70">Sign in to view your past orders and saved details.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
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
            <div className="flex justify-between items-center mb-2">
              <label className="block text-sm font-bold text-bosal-deep-green">Password</label>
              <a href="#" className="text-xs text-bosal-bright-green hover:underline">Forgot password?</a>
            </div>
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
                Signing in...
              </>
            ) : (
              "Sign In"
            )}
          </button>
        </form>

        <div className="mt-8 text-center text-sm text-bosal-deep-green/70">
          Don't have an account?{' '}
          <Link to="/signup" className="text-bosal-bright-green font-bold hover:underline">
            Create one
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
