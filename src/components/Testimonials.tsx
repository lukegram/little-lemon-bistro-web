import { Card, CardContent } from "./ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sara Lopez",
    rating: 5,
    comment: "Amazing authentic Mediterranean food, great atmosphere!",
    avatar: "/lovable-uploads/ddf08d30-bbd3-47ac-a40a-f0607e8e32ba.png"
  },
  {
    id: 2,
    name: "Jim Do",
    rating: 5,
    comment: "Best Mediterranean restaurant in Chicago!",
    avatar: "/lovable-uploads/66babf7d-994c-42b6-9728-77a8d100e897.png"
  },
  {
    id: 3,
    name: "Tony Lopez",
    rating: 5,
    comment: "Great family restaurant with amazing service!",
    avatar: "/lovable-uploads/553a33d9-ce0a-4538-8fa4-3e4cbaafbff5.png"
  },
  {
    id: 4,
    name: "Sarah Johnson",
    rating: 5,
    comment: "Such a cozy place with delicious food!",
    avatar: "/lovable-uploads/4b242824-cccf-4511-bfc1-d2b5e43b0366.png"
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-gray-50" aria-labelledby="testimonials-heading">
      <div className="container mx-auto px-4">
        <h2 id="testimonials-heading" className="text-4xl font-bold text-center mb-12">
          What our customers say!
        </h2>
        <div className="grid md:grid-cols-4 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id}>
              <CardContent className="p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-[#F4CE14]" fill="#F4CE14" />
                  ))}
                </div>
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full"
                    loading="lazy"
                  />
                  <h3 className="font-semibold">{testimonial.name}</h3>
                </div>
                <p className="text-gray-600">{testimonial.comment}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
