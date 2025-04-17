
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white py-5 px-6 md:px-8 lg:px-12 fixed w-full z-50 shadow-sm border-b border-gray-100">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <span className="text-xl font-bold text-ppc-black tracking-tight">Optimum<span className="text-amazon-orange">Tools</span></span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-10">
          <a href="#tools" className="text-graphite-gray hover:text-ppc-black transition-colors text-sm font-medium">Tools</a>
          <a href="#how-it-works" className="text-graphite-gray hover:text-ppc-black transition-colors text-sm font-medium">How It Works</a>
          <a href="#pricing" className="text-graphite-gray hover:text-ppc-black transition-colors text-sm font-medium">Pricing</a>
          <a href="#faq" className="text-graphite-gray hover:text-ppc-black transition-colors text-sm font-medium">FAQ</a>
          <a href="#login" className="text-graphite-gray hover:text-ppc-black transition-colors text-sm font-medium">Login</a>
          <Button className="bg-ppc-black hover:bg-ppc-black/90 text-white rounded-full ml-2">
            Start Free
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
        <div className="md:hidden bg-white absolute top-16 left-0 w-full p-6 shadow-md">
          <div className="flex flex-col space-y-5">
            <a href="#tools" className="text-graphite-gray hover:text-ppc-black transition-colors py-2 text-sm font-medium">Tools</a>
            <a href="#how-it-works" className="text-graphite-gray hover:text-ppc-black transition-colors py-2 text-sm font-medium">How It Works</a>
            <a href="#pricing" className="text-graphite-gray hover:text-ppc-black transition-colors py-2 text-sm font-medium">Pricing</a>
            <a href="#faq" className="text-graphite-gray hover:text-ppc-black transition-colors py-2 text-sm font-medium">FAQ</a>
            <a href="#login" className="text-graphite-gray hover:text-ppc-black transition-colors py-2 text-sm font-medium">Login</a>
            <Button className="bg-ppc-black hover:bg-ppc-black/90 text-white rounded-full w-full">
              Start Free
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
