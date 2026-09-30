import { motion } from 'framer-motion';
import { featuredDishes } from '../../data/mockData';
import { Plus } from 'lucide-react';
import { Link } from 'react-router-dom';

const FeaturedDishes = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-bosal-deep-green">
              Signature <br className="md:hidden" /> Plates
            </h2>
          </div>
          <Link to="/menu" className="hidden md:inline-flex items-center text-bosal-bright-green font-medium hover:text-bosal-deep-green transition-colors">
            View full menu &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredDishes.map((dish, index) => (
            <motion.div
              key={dish.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group flex flex-col bg-bosal-beige/30 rounded-2xl border border-bosal-deep-green/5 overflow-hidden hover:shadow-xl hover:shadow-bosal-deep-green/5 transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={dish.image} 
                  alt={dish.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              
              <div className="p-6 flex flex-col grow">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-display font-bold text-bosal-deep-green">{dish.name}</h3>
                  <span className="font-sans font-medium text-bosal-bright-green">₦{dish.price.toLocaleString()}</span>
                </div>
                <p className="text-bosal-deep-green/70 text-sm mb-6 grow leading-relaxed">
                  {dish.description}
                </p>
                
                <button className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-white border border-bosal-deep-green/10 text-bosal-deep-green font-medium group-hover:bg-bosal-deep-green group-hover:text-bosal-beige group-hover:border-transparent transition-all duration-300">
                  <Plus className="w-4 h-4" /> Add to Order
                </button>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-10 text-center md:hidden">
          <Link to="/menu" className="inline-flex items-center text-bosal-deep-green font-medium underline decoration-bosal-bright-green underline-offset-4">
            View full menu
          </Link>
        </div>

      </div>
    </section>
  );
};

export default FeaturedDishes;
