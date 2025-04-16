
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Calendar } from "./ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { useState } from "react";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const ReservationForm = () => {
  const [date, setDate] = useState<Date>();

  return (
    <form className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg max-w-md w-full" role="form">
      <h3 className="font-playfair text-2xl font-semibold mb-4 text-black">Reserve a Table</h3>
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-black">Name</Label>
          <Input id="name" placeholder="Your name" className="text-black" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email" className="text-black">Email</Label>
          <Input id="email" type="email" placeholder="your@email.com" className="text-black" />
        </div>
        <div className="space-y-2">
          <Label className="text-black">Date</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "w-full justify-start text-left font-normal",
                  !date && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP") : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>
        <div className="space-y-2">
          <Label htmlFor="guests" className="text-black">Number of Guests</Label>
          <Input id="guests" type="number" min="1" max="10" placeholder="2" className="text-black" />
        </div>
        <Button type="submit" className="w-full bg-yellow-400 text-black hover:bg-yellow-500">
          Reserve Now
        </Button>
      </div>
    </form>
  );
};

export default ReservationForm;
