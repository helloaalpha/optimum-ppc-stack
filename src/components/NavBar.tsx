
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white py-4 px-6 md:px-8 lg:px-12 fixed w-full z-50 shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <span className="text-xl font-bold text-ppc-black">Optimum<span className="text-amazon-orange">Tools</span></span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#tools" className="text-graphite-gray hover:text-ppc-black transition-colors">Tools</a>
          <a href="#how-it-works" className="text-graphite-gray hover:text-ppc-black transition-colors">How It Works</a>
          <a href="#pricing" className="text-graphite-gray hover:text-ppc-black transition-colors">Pricing</a>
          <a href="#faq" className="text-graphite-gray hover:text-ppc-black transition-colors">FAQ</a>
          <a href="#login" className="text-graphite-gray hover:text-ppc-black transition-colors">Login</a>
          <Button className="bg-amazon-orange hover:bg-amber-600 text-white ml-2">
            Start Free Today
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-ppc-black"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white absolute top-16 left-0 w-full p-4 shadow-md">
          <div className="flex flex-col space-y-4">
            <a href="#tools" className="text-graphite-gray hover:text-ppc-black transition-colors py-2">Tools</a>
            <a href="#how-it-works" className="text-graphite-gray hover:text-ppc-black transition-colors py-2">How It Works</a>
            <a href="#pricing" className="text-graphite-gray hover:text-ppc-black transition-colors py-2">Pricing</a>
            <a href="#faq" className="text-graphite-gray hover:text-ppc-black transition-colors py-2">FAQ</a>
            <a href="#login" className="text-graphite-gray hover:text-ppc-black transition-colors py-2">Login</a>
            <Button className="bg-amazon-orange hover:bg-amber-600 text-white w-full">
              Start Free Today
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
