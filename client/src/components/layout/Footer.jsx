import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <footer className="bg-bosal-deep-green text-bosal-beige py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          <div className="space-y-4">
            <h3 className="text-2xl font-display font-bold">Bosal</h3>
            <p className="text-bosal-beige/80 text-sm">
              Sophisticated Nigerian dining & vibrant culinary experiences.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-display font-semibold">Explore</h4>
            <ul className="space-y-2 text-sm text-bosal-beige/80">
              <li><Link to="/" className="hover:text-bosal-bright-green transition-colors">Home</Link></li>
              <li><Link to="/menu" className="hover:text-bosal-bright-green transition-colors">Menu</Link></li>
              <li><Link to="/about" className="hover:text-bosal-bright-green transition-colors">About</Link></li>
              <li><Link to="/gallery" className="hover:text-bosal-bright-green transition-colors">Gallery</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-display font-semibold">Contact</h4>
            <ul className="space-y-2 text-sm text-bosal-beige/80">
              <li>Hilltop, Nsukka</li>
              <li>Enugu State, Nigeria</li>
              <li>+234 800 000 0000</li>
              <li>hello@bosal.com</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-display font-semibold">Hours</h4>
            <ul className="space-y-2 text-sm text-bosal-beige/80">
              <li>Mon - Fri: 8:00 AM - 10:00 PM</li>
              <li>Sat - Sun: 9:00 AM - 11:00 PM</li>
            </ul>
            <div className="flex space-x-4 pt-2 text-bosal-beige/80">
              <a href="#" className="hover:text-bosal-bright-green transition-colors">Instagram</a>
              <a href="#" className="hover:text-bosal-bright-green transition-colors">Twitter</a>
              <a href="#" className="hover:text-bosal-bright-green transition-colors">Facebook</a>
            </div>
          </div>
          
        </div>
        
        <div className="border-t border-bosal-beige/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-bosal-beige/60">
          <p>&copy; {new Date().getFullYear()} Bosal Stores/Kitchen. All rights reserved.</p>
          <div className="space-x-4 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-bosal-beige">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-bosal-beige">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
