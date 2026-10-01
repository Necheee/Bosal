import { motion } from 'framer-motion';

const RestaurantIntro = () => {
  return (
    <section className="py-16 lg:py-24 bg-bosal-deep-green text-bosal-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1 relative h-72 sm:h-96 rounded-2xl overflow-hidden"
          >
            <img 
              src="https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="Bosal Restaurant Interior" 
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2 space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold">
              Rooted in Tradition. <br />
              <span className="text-bosal-bright-green italic">Elevated for Today.</span>
            </h2>
            <div className="w-16 h-1 bg-bosal-bright-green rounded-full"></div>
            <p className="text-lg text-bosal-beige/80 leading-relaxed font-sans pt-4">
              Bosal Stores/Kitchen is more than just a restaurant. It is a celebration of Nigerian culinary heritage delivered with contemporary sophistication and an unwavering commitment to excellence.
            </p>
            <p className="text-lg text-bosal-beige/80 leading-relaxed font-sans">
              From our smoky firewood Jollof to our rich, soul-warming soups, every dish is crafted using premium local ingredients and time-honored techniques, designed to bring people together over unforgettable meals.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default RestaurantIntro;
