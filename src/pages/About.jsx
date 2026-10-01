import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="min-h-screen bg-bosal-beige">
      {/* Hero Section */}
      <div className="relative h-96 md:h-screen max-h-[600px] w-full">
        <img 
          src="https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1600" 
          alt="Restaurant Interior" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-bosal-deep-green/40 flex items-center justify-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-display font-bold text-bosal-beige text-center px-4"
          >
            Our Story
          </motion.h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        {/* Intro */}
        <div className="max-w-3xl mx-auto text-center mb-24">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-bosal-deep-green mb-6">
            A celebration of Nigerian heritage.
          </h2>
          <p className="text-lg md:text-xl text-bosal-deep-green/70 leading-relaxed">
            Bosal Stores/Kitchen was born out of a deep passion for authentic Nigerian flavors, presented with contemporary elegance. 
            Located in the vibrant heart of Hilltop, Nsukka, we source the finest local ingredients to craft dishes that celebrate our rich culinary traditions.
          </p>
        </div>

        {/* Split Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-display font-bold text-bosal-deep-green mb-4">Culinary Excellence</h3>
            <p className="text-bosal-deep-green/70 leading-relaxed mb-6">
              Every dish that leaves our kitchen is a testament to our commitment to quality. From the rich, slow-cooked depths of our stews to the vibrant, fresh spices of our grills, we don't cut corners. 
            </p>
            <p className="text-bosal-deep-green/70 leading-relaxed">
              Our executive chefs bring decades of experience, merging time-honored recipes passed down through generations with modern gastronomic techniques. The result is a dining experience that feels deeply familiar, yet entirely new.
            </p>
          </div>
          <div className="order-1 md:order-2 h-96 md:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1200" 
              alt="Chef cooking" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

