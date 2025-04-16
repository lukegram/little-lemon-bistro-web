
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Specials from "@/components/Specials";
import Testimonials from "@/components/Testimonials";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Specials />
        <Testimonials />
        
        {/* About Section */}
        <section id="about" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-playfair text-4xl font-bold mb-6">About Little Lemon</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Little Lemon brings the authentic tastes of the Mediterranean to Chicago. 
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
      </main>
    </div>
  );
};

export default Index;
