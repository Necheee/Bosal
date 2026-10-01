import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-bosal-beige pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-4xl md:text-6xl font-display font-bold text-bosal-deep-green mb-6">Contact Us</h1>
          <p className="text-lg md:text-xl text-bosal-deep-green/70">
            We'd love to hear from you. Whether it's a reservation inquiry, catering request, or just to say hello.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-sm"
          >
            <h2 className="text-2xl font-display font-bold text-bosal-deep-green mb-8">Send us a message</h2>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-bold text-bosal-deep-green mb-2">Full Name</label>
                <input 
                  type="text" 
                  className="w-full bg-bosal-beige/50 border border-bosal-deep-green/10 rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-bosal-bright-green text-bosal-deep-green"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-bosal-deep-green mb-2">Email Address</label>
                <input 
                  type="email" 
                  className="w-full bg-bosal-beige/50 border border-bosal-deep-green/10 rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-bosal-bright-green text-bosal-deep-green"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-bosal-deep-green mb-2">Message</label>
                <textarea 
                  rows="5"
                  className="w-full bg-bosal-beige/50 border border-bosal-deep-green/10 rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-bosal-bright-green text-bosal-deep-green resize-none"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full py-4 bg-bosal-deep-green text-bosal-beige rounded-full font-bold text-lg hover:bg-bosal-bright-green transition-colors"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col justify-center space-y-12"
          >
            <div className="flex items-start gap-6">
              <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm">
                <MapPin className="w-6 h-6 text-bosal-bright-green" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-bosal-deep-green mb-2">Visit Us</h3>
                <p className="text-bosal-deep-green/70 leading-relaxed">
                  Hilltop, Nsukka<br />
                  Enugu State, Nigeria
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm">
                <Clock className="w-6 h-6 text-bosal-bright-green" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-bosal-deep-green mb-2">Opening Hours</h3>
                <p className="text-bosal-deep-green/70 leading-relaxed">
                  Monday - Saturday: 10:00 AM - 10:00 PM<br />
                  Sunday: 12:00 PM - 9:00 PM
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm">
                <Phone className="w-6 h-6 text-bosal-bright-green" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-bosal-deep-green mb-2">Call Us</h3>
                <p className="text-bosal-deep-green/70 leading-relaxed">
                  +234 123 456 7890<br />
                  +234 098 765 4321
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm">
                <Mail className="w-6 h-6 text-bosal-bright-green" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-bosal-deep-green mb-2">Email Us</h3>
                <p className="text-bosal-deep-green/70 leading-relaxed">
                  hello@bosalstores.com<br />
                  reservations@bosalstores.com
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Contact;

