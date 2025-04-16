
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#495E57] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-playfair text-xl font-bold mb-4">Little Lemon</h3>
            <img
              src="/lovable-uploads/73e6e710-f651-4499-a38d-85058455910f.png"
              alt="Little Lemon logo"
              className="h-16 mb-4"
            />
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-[#F4CE14]">Home</a></li>
              <li><a href="#about" className="hover:text-[#F4CE14]">About</a></li>
              <li><a href="#menu" className="hover:text-[#F4CE14]">Menu</a></li>
              <li><a href="#reservations" className="hover:text-[#F4CE14]">Reservations</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <address className="not-italic">
              <p>123 Mediterranean Street</p>
              <p>Chicago, IL 60601</p>
              <p>Tel: (312) 555-0123</p>
              <p>Email: info@littlelemon.com</p>
            </address>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Social Media</h4>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="hover:text-[#F4CE14]">
                <Facebook />
              </a>
              <a href="#" aria-label="Instagram" className="hover:text-[#F4CE14]">
                <Instagram />
              </a>
              <a href="#" aria-label="Twitter" className="hover:text-[#F4CE14]">
                <Twitter />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-white/20 text-center">
          <p>&copy; {new Date().getFullYear()} Little Lemon. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
