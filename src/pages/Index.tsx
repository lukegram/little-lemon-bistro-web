
import Navbar from "@/components/Navbar";
import ReservationForm from "@/components/ReservationForm";
import MenuSection from "@/components/MenuSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section with Reservation Form */}
      <section className="min-h-screen relative flex items-center justify-center p-4 bg-gradient-to-r from-[#FDE1D3] to-[#F2FCE2]">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-6">
              Experience Mediterranean
              <span className="text-[#F97316] block">Flavors</span>
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              Authentic Mediterranean cuisine in the heart of your city
            </p>
          </div>
          <ReservationForm />
        </div>
      </section>

      {/* Menu Section */}
      <MenuSection />

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-playfair text-4xl font-bold mb-6">About Little Lemon</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Little Lemon brings the authentic tastes of the Mediterranean to your neighborhood. 
              Our family-owned restaurant takes pride in serving fresh, locally-sourced ingredients 
              prepared with traditional recipes passed down through generations.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Every dish is crafted with love and attention to detail, ensuring you experience 
              the true essence of Mediterranean cuisine. Whether you're joining us for a romantic 
              dinner or a family celebration, we promise an unforgettable dining experience.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
