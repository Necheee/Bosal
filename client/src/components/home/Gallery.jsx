import { motion } from 'framer-motion';
import { galleryImages } from '../../data/mockData';

const Gallery = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-12 flex justify-between items-end">
          <h2 className="text-4xl font-display font-bold text-bosal-deep-green">Gallery</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {galleryImages.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-2xl overflow-hidden ${index === 0 || index === 3 ? 'md:col-span-2 md:row-span-2 h-64 md:h-96' : 'h-40 md:h-64'}`}
            >
              <img 
                src={src} 
                alt={`Bosal Gallery ${index + 1}`} 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 cursor-pointer"
              />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Gallery;
