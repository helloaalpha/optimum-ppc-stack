
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white border-t border-gray-200 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-10">
          <div>
            <h3 className="text-xl font-bold mb-4 text-ppc-black">Optimum<span className="text-amazon-orange">Tools</span></h3>
            <p className="text-graphite-gray/80">
              Smarter Amazon PPC, One Tool at a Time
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-ppc-black">Company</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="text-graphite-gray/80 hover:text-amazon-orange transition-colors">About</a></li>
              <li><a href="#" className="text-graphite-gray/80 hover:text-amazon-orange transition-colors">Blog</a></li>
              <li><a href="#" className="text-graphite-gray/80 hover:text-amazon-orange transition-colors">Careers</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-ppc-black">Resources</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-graphite-gray/80 hover:text-amazon-orange transition-colors">Documentation</a></li>
              <li><a href="#" className="text-graphite-gray/80 hover:text-amazon-orange transition-colors">Support</a></li>
              <li><a href="#" className="text-graphite-gray/80 hover:text-amazon-orange transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-ppc-black">Legal</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-graphite-gray/80 hover:text-amazon-orange transition-colors">Terms</a></li>
              <li><a href="#" className="text-graphite-gray/80 hover:text-amazon-orange transition-colors">Privacy</a></li>
              <li><a href="#" className="text-graphite-gray/80 hover:text-amazon-orange transition-colors">Cookies</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-graphite-gray/80 text-sm mb-4 md:mb-0">
            &copy; {currentYear} OptimumTools. All rights reserved.
          </p>
          
          <div className="flex space-x-6">
            <a href="#" className="text-graphite-gray/80 hover:text-amazon-orange transition-colors">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
              </svg>
            </a>
            <a href="#" className="text-graphite-gray/80 hover:text-amazon-orange transition-colors">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2.04c-5.5 0-10 4.49-10 10.02 0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02z" />
              </svg>
            </a>
            <a href="#" className="text-graphite-gray/80 hover:text-amazon-orange transition-colors">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
