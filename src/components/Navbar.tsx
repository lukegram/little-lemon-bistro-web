
import { Menu } from "lucide-react";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50 border-b">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="font-playfair text-2xl font-bold text-[#F97316]">Little Lemon</h1>
        <div className="hidden md:flex gap-8 font-inter">
          <a href="#menu" className="hover:text-[#F97316] transition-colors">Menu</a>
          <a href="#about" className="hover:text-[#F97316] transition-colors">About</a>
          <Button variant="ghost" className="hover:text-[#F97316]">Contact</Button>
        </div>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
