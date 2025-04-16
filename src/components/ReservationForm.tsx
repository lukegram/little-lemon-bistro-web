
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Calendar } from "./ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { useState } from "react";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().min(1, "Email is required").email("Invalid email address"),
  date: z.date({
    required_error: "Please select a date",
  }),
  guests: z.string().min(1, "Number of guests is required").refine(
    (val) => {
      const num = parseInt(val);
      return !isNaN(num) && num >= 1 && num <= 10;
    },
    {
      message: "Guests must be between 1 and 10",
    }
  ),
});

type FormValues = z.infer<typeof formSchema>;

const ReservationForm = () => {
  const { toast } = useToast();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      guests: "",
    },
  });

  const onSubmit = (values: FormValues) => {
    toast({
      title: "Reservation Confirmed!",
      description: `Thanks ${values.name}, your table for ${values.guests} on ${format(values.date, "PPP")} has been reserved.`,
    });
    form.reset();
  };

  return (
    <Form {...form}>
      <form 
        onSubmit={form.handleSubmit(onSubmit)} 
        className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg max-w-md w-full" 
        role="form"
      >
        <h3 className="font-playfair text-2xl font-semibold mb-4 text-black">Reserve a Table</h3>
        <div className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel className="text-black">Name</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="Your name" 
                    className="text-black" 
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel className="text-black">Email</FormLabel>
                <FormControl>
                  <Input 
                    type="email" 
                    placeholder="your@email.com" 
                    className="text-black" 
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="date"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel className="text-black">Date</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {field.value ? (
                          format(field.value, "PPP")
                        ) : (
                          <span>Pick a date</span>
                        )}
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="guests"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel className="text-black">Number of Guests</FormLabel>
                <FormControl>
                  <Input 
                    type="number" 
                    min="1" 
                    max="10" 
                    placeholder="2" 
                    className="text-black" 
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <Button 
            type="submit" 
            className="w-full bg-yellow-400 text-black hover:bg-yellow-500"
          >
            Reserve Now
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default ReservationForm;
