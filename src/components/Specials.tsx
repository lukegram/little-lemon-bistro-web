
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

const specials = [
  {
    id: 1,
    name: "Greek Salad",
    price: "$12.99",
    description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    image: "/lovable-uploads/8b84ac3e-075f-4f0a-a74b-4bed23f14bcd.png"
  },
  {
    id: 2,
    name: "Bruschetta",
    price: "$5.99",
    description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
    image: "/lovable-uploads/96b88904-bf5b-4257-a3a3-6a8fb47079d1.png"
  },
  {
    id: 3,
    name: "Lemon Dessert",
    price: "$5.00",
    description: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    image: "/lovable-uploads/b6c9a478-0650-4160-a75f-44ec91176082.png"
  }
];

const Specials = () => {
  return (
    <section className="py-20 bg-white" aria-labelledby="specials-heading">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <h2 id="specials-heading" className="text-4xl font-bold">This Weeks Specials</h2>
          <Button className="bg-[#F4CE14] text-black hover:bg-[#F4CE14]/90">Menu</Button>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {specials.map((item) => (
            <Card key={item.id} className="overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold">{item.name}</h3>
                  <span className="text-orange-500">{item.price}</span>
                </div>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <Button 
                  variant="ghost" 
                  className="text-[#333] hover:text-black"
                  aria-label={`Order ${item.name} for delivery`}
                >
                  Order a delivery
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specials;
