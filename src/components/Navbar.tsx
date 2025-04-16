
import { Menu, ShoppingCart } from "lucide-react";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-white z-50 border-b" role="navigation">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img
            src="/lovable-uploads/8b84ac3e-075f-4f0a-a74b-4bed23f14bcd.png"
            alt="Little Lemon logo"
            className="h-12"
          />
          <span className="font-playfair text-xl font-bold">Little Lemon</span>
        </div>
        
        <div className="hidden md:flex gap-8 font-inter">
          <a href="/" className="hover:text-[#495E57] transition-colors" aria-current="page">Home</a>
          <a href="#about" className="hover:text-[#495E57] transition-colors">About</a>
          <a href="#menu" className="hover:text-[#495E57] transition-colors">Menu</a>
          <a href="#reservations" className="hover:text-[#495E57] transition-colors">Reservations</a>
          <Button variant="default" className="bg-[#495E57] hover:bg-[#495E57]/90">
            Order online
          </Button>
        </div>
        
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" aria-label="Shopping cart">
            <ShoppingCart className="h-6 w-6" />
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden" aria-label="Menu">
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
