/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-bosal-deep-green leading-tight">
              An Atmosphere <br /> Crafted for You
            </h2>
            <p className="text-lg text-bosal-deep-green/70 leading-relaxed font-sans">
              Whether you're stopping by for a quick lunch, hosting a family dinner, or celebrating a special occasion, our space is designed to make you feel completely at home while offering a premium dining experience.
            </p>
            <ul className="space-y-4 text-bosal-deep-green font-medium">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-bosal-bright-green"></div>
                Warm, contemporary interior design
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-bosal-bright-green"></div>
                Impeccable customer service
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-bosal-bright-green"></div>
                Relaxing ambiance & music
              </li>
            </ul>
          </motion.div>

          <div className="lg:col-span-7 relative h-96  w-full">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="absolute top-0 right-0 w-3/4 h-4/5 rounded-2xl overflow-hidden shadow-2xl"
            >
              <img 
                src="https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Dining Experience" 
                className="w-full h-full object-cover"
              />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute bottom-0 left-0 w-1/2 h-2/3 rounded-2xl overflow-hidden shadow-2xl border-4 border-white"
            >
              <img 
                src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Food Preparation" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;
