import React from 'react';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Input } from '../ui/input';
import Button from '../ui/button';
import Link from 'next/link';
import { toast } from '@/components/ui/use-toast';


const FormSchema = z.object({
  email: z
    .string()
    .min(1, 'Email is required')
    .email('Incorrect email address'),
    startup: z
    .string()
    .min(1, 'Startup Name is required'),
    domain: z
    .string()
    .min(1, 'Website URL is required'), 
});

const ClaimStartupForm = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: '',
      startup: '',
      domain: ''
    },
  });
  const [isLoading, setIsLoading] = React.useState(false);

  const onSubmit = (values: z.infer<typeof FormSchema>) => {
    setIsLoading(true);
    toast({
      title: 'Submitted succesfully',
      description: 'User login successfully',
    });
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="mt-5 space-y-4">
        <div className="flex gap-5 flex-col lg:flex-row">
        <FormField
          control={form.control}
          name="startup"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Your startup name</FormLabel>
              <FormControl>
                <Input placeholder="eg. Paystack" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="domain"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Website url (domain)</FormLabel>
              <FormControl>
                <Input placeholder="eg. Peterus" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        </div>
        <div className="mt-5">
        <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Corporate email</FormLabel>
                <FormControl>
                  <Input placeholder="eg. support@domain.com" {...field} className="w-full" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button type="submit" title="Submit Now" variant="btn_lightred" isLoading={isLoading} />
        <p className="medium-16 mt-5 md:mt-5">
        Have your startup claimed already?{' '}
          <Link href="../login" className="text-lightred-50">
          Login here
          </Link>
        </p>
      </form>
    </Form>
  );
};

export default  ClaimStartupForm;
