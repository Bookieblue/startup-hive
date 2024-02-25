import React from 'react';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import * as _ from 'lodash';
import { useRouter } from 'next/navigation';
import { toast } from '@/components/ui/use-toast';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Input } from '../ui/input';
import Button from '../ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';




const SubmitStartupForm = () => {

    const FormSchema = z.object({
        startupName: z
        .string()
        .min(1, 'Startup name is required'),
        domain: z
        .string()
        .min(1, 'Webiste Url is required'),
        country: z
        .string()
        .min(1, 'Country is required'),
        email: z
          .string()
          .min(1, 'Email is required')
          .email('Incorrect email address'),
      });

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
        startupName: '',
        domain: '',
        email: '',
        country: '',
    },
  });
  const router = useRouter();

  const [isLoading, setIsLoading] = React.useState(false);
 
  
 

  const onSubmit = (values: z.infer<typeof FormSchema>) => {
    const payload = _.omit(values, ['confirm_password']);
    setIsLoading(true);
        toast({
          title: 'Submitted succesfully',
          description: 'Account created successfully',
        });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="my-5 ">
        <div className="flex gap-5 flex-col lg:flex-row">
          <FormField
            control={form.control}
            name="startupName"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Your startup name</FormLabel>
                <FormControl>
                  <Input placeholder="eg. Paystack" {...field} className="w-full" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="domain"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Website url (domain)</FormLabel>
                <FormControl>
                  <Input
                    placeholder="eg. paystack.com"
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
                <FormLabel htmlFor={'country'}>Country</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  // value={field.value}
                  {...field}
                >
                  <FormControl>
                    <SelectTrigger id="country" className="w-full">
                      <SelectValue placeholder="Select your country" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent position="popper" aria-labelledby="Country">
                    <ScrollArea className="w-full h-40 px-4">
                      {/* {AFRICAN_COUNTRIES.map((country) => (
                        <SelectItem key={country.code} value={country.code}>
                          {country.name}
                        </SelectItem>
                      ))} */}
                    </ScrollArea>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="mt-5">
          <Button
            type="submit"
            title="Submit Now"
            variant="btn_lightred"
            isLoading={isLoading}
          />
        </div>
      </form>
    </Form>
  );
};

export default SubmitStartupForm;
