
import ReservationForm from "./ReservationForm";

const Hero = () => {
  return (
    <section className="relative h-screen bg-white text-black overflow-hidden">
      <div className="container mx-auto px-4 grid grid-cols-12 gap-8 h-full items-center">
        <div className="col-span-12 lg:col-span-6 z-10">
          <div className="bg-white/95 backdrop-blur-sm p-8 rounded-lg shadow-lg">
            <h1 className="text-5xl md:text-6xl font-bold mb-4" aria-label="Little Lemon Chicago">
              Little Lemon
              <span className="block text-3xl text-yellow-400">Chicago</span>
            </h1>
            <p className="text-lg mb-8 max-w-md">
              We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
            </p>
          </div>
        </div>
        
        <div className="col-span-12 lg:col-span-6 z-10">
          <ReservationForm />
        </div>

        <div className="absolute inset-0 w-full h-full">
          <img
            src="/lovable-uploads/8b84ac3e-075f-4f0a-a74b-4bed23f14bcd.png"
            alt="Little Lemon restaurant interior"
            className="w-full h-full object-cover"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
