"use client"
import React,{useState} from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { useToast, toast } from "@/components/ui/use-toast"
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Input } from "../ui/input";
import Button from "../ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { AFRICAN_COUNTRIES } from "@/app/constants";
import TagsInput from 'react-tagsinput';


const FormSchema = z
  .object({
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    email: z
      .string()
      .min(1, "Email is required")
      .email("Incorrect email address"),
    country: z
    .string().min(1, "Please select a country to display")
  })


const OnboardingForm = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      country:"",
    },
  });
  const [isLoading, setIsLoading] = React.useState(false);
  const onSubmit = (values: z.infer<typeof FormSchema>) => {
    setIsLoading(true);
    toast({
      title: "Submitted succesfully",
      description: "Your details has been submitted.",
    })
  };

  const [tags, setTags] = useState(["Nigeria"]); 

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="my-5 ">
        <div className="flex gap-5 flex-col lg:flex-row">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Your startup name</FormLabel>
                <FormControl>
                  <Input placeholder="Paystack" {...field} className="w-full" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Website url (domain)</FormLabel>
                <FormControl>
                  <Input
                    placeholder="paystack.com"
                    {...field}
                    className="w-full"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex gap-5 flex-col lg:flex-row mt-5">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Corporate email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="eg. yourname@gmail.com"
                    {...field}
                    className="w-full"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="country"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Country</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger id="framework" className="w-full">
                      <SelectValue placeholder="Select your country" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent position="popper">
                    <ScrollArea className="w-full h-40 px-4">
                    {/* {AFRICAN_COUNTRIES.map((country) =>(
                    //   <SelectItem value={country}>{country}</SelectItem>
                    ) )} */}
                    </ScrollArea>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="mt-5">
        <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Describe your startup in 65 characters</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} className="w-full" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex gap-5 flex-col lg:flex-row mt-5 ">
        <FormField
            control={form.control}
            name="country"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Company field</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger id="framework" className="w-full">
                      <SelectValue placeholder="Select your field" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent position="popper">
                    <ScrollArea className="w-full h-40 px-4">
                    {/* {AFRICAN_COUNTRIES.map((country) =>(
                    //   <SelectItem value={country}>{country}</SelectItem>
                    ) )} */}
                    </ScrollArea>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Founded year</FormLabel>
                <FormControl>
                  <Input
                    placeholder=""
                    {...field}
                    className="w-full"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="mt-5">
                  <FormLabel>Tag countries that can use your startups</FormLabel>
                    <TagsInput 
                        value={tags} 
                        onChange={setTags} 
                        tagProps={{ className: "react-tagsinput-tag info" }}
                        inputProps={{placeholder: 'Add a tag'}}
                    /> 
        </div>
        <div className="mt-5">
        <FormLabel>Upload logo</FormLabel>
        </div>
        <div className="mt-5">
          <Button type="submit" title="Save & proceed" variant="btn_lightred" isLoading={isLoading}/>
        </div>
      </form>
    </Form>
  );
};

export default OnboardingForm;
