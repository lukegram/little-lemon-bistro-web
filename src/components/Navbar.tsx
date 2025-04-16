
import { Menu, ShoppingCart } from "lucide-react";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-white z-50 border-b" role="navigation">
      <div className="container mx-auto px-4 py-4 grid grid-cols-12 items-center">
        <div className="col-span-3 flex items-center gap-2">
          <img
            src="/lovable-uploads/73e6e710-f651-4499-a38d-85058455910f.png"
            alt="Little Lemon logo"
            className="h-12"
          />
          <span className="font-playfair text-xl font-bold text-black">Little Lemon</span>
        </div>
        
        <div className="hidden md:flex col-span-6 justify-center gap-8 font-inter">
          <a href="/" className="hover:text-yellow-400 transition-colors text-black" aria-current="page">Home</a>
          <a href="#about" className="hover:text-yellow-400 transition-colors text-black">About</a>
          <a href="#menu" className="hover:text-yellow-400 transition-colors text-black">Menu</a>
          <a href="#reservations" className="hover:text-yellow-400 transition-colors text-black">Reservations</a>
        </div>
        
        <div className="col-span-3 flex items-center justify-end gap-4">
          <Button variant="default" className="bg-yellow-400 text-black hover:bg-yellow-500">
            Order online
          </Button>
          <Button variant="ghost" size="icon" aria-label="Shopping cart" className="text-black">
            <ShoppingCart className="h-6 w-6" />
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden text-black" aria-label="Menu">
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
