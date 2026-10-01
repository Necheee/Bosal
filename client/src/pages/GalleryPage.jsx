import { motion } from 'framer-motion';
import { galleryImages } from '../data/mockData';

const GalleryPage = () => {
  return (
    <div className="min-h-screen bg-bosal-beige pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-4xl md:text-6xl font-display font-bold text-bosal-deep-green mb-6">Gallery</h1>
          <p className="text-lg md:text-xl text-bosal-deep-green/70">
            A visual taste of the Bosal experience. Step inside our world of vibrant flavors, beautiful spaces, and culinary artistry.
          </p>
        </div>
        
        {/* Staggered Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {galleryImages.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: (idx % 3) * 0.1 }}
              className="relative overflow-hidden rounded-2xl group break-inside-avoid"
            >
              <div className="absolute inset-0 bg-bosal-deep-green/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
              <img 
                src={img} 
                alt={`Bosal Gallery ${idx + 1}`} 
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out" 
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;

