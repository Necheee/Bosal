import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const CallToAction = () => {
  return (
    <section className="py-24 bg-bosal-deep-green text-bosal-beige relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-bosal-bright-green rounded-full blur-[120px] opacity-20 pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <h2 className="text-5xl md:text-7xl font-display font-bold leading-tight">
            Ready to <span className="italic text-bosal-bright-green">Indulge?</span>
          </h2>
          <p className="text-xl text-bosal-beige/80 max-w-2xl mx-auto font-sans">
            Experience the finest Nigerian cuisine from the comfort of your home, or join us at our restaurant.
          </p>
          
          <div className="pt-8">
            <Link 
              to="/menu" 
              className="inline-block bg-bosal-bright-green text-white px-10 py-5 rounded-full text-lg font-medium hover:bg-white hover:text-bosal-deep-green transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-300"
            >
              Order Online Now
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
