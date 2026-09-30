import { motion } from 'framer-motion';
import { reviews } from '../../data/mockData';
import { Star } from 'lucide-react';

const Reviews = () => {
  return (
    <section className="py-24 bg-bosal-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold text-bosal-deep-green mb-4">What Our Guests Say</h2>
          <p className="text-bosal-deep-green/70">Real reviews from our wonderful customers.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-bosal-deep-green/5"
            >
              <div className="flex gap-1 mb-6 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-5 h-5 ${i < review.rating ? 'fill-current' : 'text-gray-300'}`} />
                ))}
              </div>
              <p className="text-bosal-deep-green text-lg italic mb-6">"{review.comment}"</p>
              <p className="font-bold text-bosal-deep-green font-display">{review.name}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Reviews;
