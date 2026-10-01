import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-bosal-beige overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="z-10 pt-12 lg:pt-0"
          >
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-display font-bold text-bosal-deep-green leading-tight">
              Taste the <br />
              <span className="text-bosal-bright-green italic">Culture.</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-bosal-deep-green/80 max-w-lg font-sans">
              Experience a premium dining destination where vibrant, contemporary elegance meets the deep, authentic flavors of Nigerian culinary heritage.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link 
                to="/menu" 
                className="bg-bosal-deep-green text-bosal-beige px-8 py-4 rounded-full text-center font-medium hover:bg-bosal-bright-green transition-colors"
              >
                Order Now
              </Link>
              <Link 
                to="/about" 
                className="border border-bosal-deep-green/20 text-bosal-deep-green px-8 py-4 rounded-full text-center font-medium hover:bg-bosal-deep-green/5 transition-colors"
              >
                Explore Menu
              </Link>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="relative h-80 sm:h-96 lg:h-[500px] w-full"
            style={{ minHeight: '320px' }}
          >
            <div className="absolute inset-0 rounded-3xl overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=1200" 
                alt="Exquisite Nigerian Dish" 
                className="w-full h-full object-cover"
              />
              {/* Subtle overlay for contrast */}
              <div className="absolute inset-0 bg-bosal-deep-green/10"></div>
            </div>
            
            {/* Decorative element */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-bosal-bright-green rounded-full blur-3xl opacity-30"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
