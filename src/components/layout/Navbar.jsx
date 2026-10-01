import { Link } from 'react-router-dom';
import { ShoppingCart, Menu as MenuIcon, X } from 'lucide-react';
import { useState } from 'react';
import useCartStore from '../../store/cartStore';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const items = useCartStore((state) => state.items);
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'About', path: '/about' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-bosal-beige/90 backdrop-blur-md border-b border-bosal-deep-green/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <span className="text-2xl font-display font-bold text-bosal-deep-green tracking-tight">Bosal</span>
              <span className="text-sm font-sans text-bosal-bright-green uppercase tracking-widest mt-1 hidden sm:block">Stores/Kitchen</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-sm font-medium text-bosal-deep-green hover:text-bosal-bright-green transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/cart" className="relative text-bosal-deep-green hover:text-bosal-bright-green transition-colors">
              <ShoppingCart className="w-6 h-6" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-bosal-bright-green text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
            <Link
              to="/menu"
              className="bg-bosal-deep-green text-bosal-beige px-6 py-2 rounded-full font-medium hover:bg-bosal-bright-green transition-colors"
            >
              Order Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-4">
            <Link to="/cart" className="relative text-bosal-deep-green">
              <ShoppingCart className="w-6 h-6" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-bosal-bright-green text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-bosal-deep-green hover:text-bosal-bright-green focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-bosal-beige border-b border-bosal-deep-green/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-base font-medium text-bosal-deep-green hover:text-bosal-bright-green hover:bg-bosal-deep-green/5 rounded-md"
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/menu"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 mt-4 text-center text-base font-medium bg-bosal-deep-green text-bosal-beige rounded-full hover:bg-bosal-bright-green"
            >
              Order Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
