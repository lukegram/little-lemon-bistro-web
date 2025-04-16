
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section className="relative h-screen bg-[#495E57] text-white overflow-hidden">
      <div className="container mx-auto px-4 py-20 flex flex-col lg:flex-row items-center justify-between relative z-10">
        <div className="lg:w-1/2 mb-10 lg:mb-0">
          <h1 className="text-5xl md:text-6xl font-bold mb-4" aria-label="Little Lemon Chicago">
            Little Lemon
            <span className="block text-3xl text-[#F4CE14]">Chicago</span>
          </h1>
          <p className="text-lg mb-8 max-w-md">
            We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
          </p>
          <Button 
            className="bg-[#F4CE14] text-black hover:bg-[#F4CE14]/90"
            aria-label="Reserve a table"
          >
            Reserve a table
          </Button>
        </div>
        <div className="lg:w-1/2 relative">
          <img
            src="/lovable-uploads/2600fedc-eb48-4eff-8716-d47ad9998aa7.png"
            alt="Featured Mediterranean dish"
            className="rounded-lg shadow-xl max-w-md mx-auto"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
