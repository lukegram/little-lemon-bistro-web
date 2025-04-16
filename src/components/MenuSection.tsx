
import { Card, CardContent } from "./ui/card";

const menuItems = [
  {
    category: "Starters",
    items: [
      { name: "Mediterranean Mezze", price: "16", description: "Hummus, babaganoush, tzatziki with warm pita" },
      { name: "Grilled Octopus", price: "18", description: "With lemon, olive oil and herbs" }
    ]
  },
  {
    category: "Main Courses",
    items: [
      { name: "Moussaka", price: "24", description: "Traditional Greek layered eggplant and beef" },
      { name: "Grilled Sea Bass", price: "28", description: "Fresh Mediterranean herbs and lemon" }
    ]
  }
];

const MenuSection = () => {
  return (
    <section id="menu" className="py-20 bg-[#F2FCE2]/30">
      <div className="container mx-auto px-4">
        <h2 className="font-playfair text-4xl font-bold text-center mb-12">Our Menu</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {menuItems.map((section) => (
            <Card key={section.category} className="bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="font-playfair text-2xl font-semibold mb-4">{section.category}</h3>
                <div className="space-y-4">
                  {section.items.map((item) => (
                    <div key={item.name} className="border-b border-gray-200 pb-4 last:border-0">
                      <div className="flex justify-between items-baseline">
                        <h4 className="font-inter font-medium">{item.name}</h4>
                        <span className="font-inter text-[#F97316]">${item.price}</span>
                      </div>
                      <p className="text-gray-600 text-sm mt-1">{item.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
