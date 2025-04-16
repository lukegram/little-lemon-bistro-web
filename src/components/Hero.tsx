
import ReservationForm from "./ReservationForm";

const Hero = () => {
  return (
    <section 
      className="relative h-screen text-black overflow-hidden"
      style={{
        backgroundImage: 'url("/lovable-uploads/63475864-ab3c-4941-9b3a-d3efce13ef9e.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="absolute inset-0 bg-black/40" /> {/* Dark overlay for better text readability */}
      <div className="container mx-auto px-4 grid grid-cols-12 gap-8 h-full items-center relative z-10">
        <div className="col-span-12 lg:col-span-6">
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
        
        <div className="col-span-12 lg:col-span-6">
          <ReservationForm />
        </div>
      </div>
    </section>
  );
};

export default Hero;
