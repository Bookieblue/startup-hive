import React from 'react';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Input } from '../ui/input';
import Button from '../ui/button';
import { toast } from '@/components/ui/use-toast';

const FormSchema = z.object({
  about: z
    .string()
    .min(1, 'About your startup is required')
    .max(365, "Your writeup is above 365 characters")
});

const AboutStartUpForm = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      about: ''
    },
  });
  const [isLoading, setIsLoading] = React.useState(false);
  const router = useRouter();

  const onSubmit = (values: z.infer<typeof FormSchema>) => {
    setIsLoading(true);
    toast({
      title: 'Submitted succesfully',
      description: '',
    });
    router.push('/startup-onboarding/services');
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="mt-5 space-y-4">
        <FormField
          control={form.control}
          name="about"
          render={({ field }) => (
            <FormItem>
              <FormLabel>What do you want the world to know about your startup?</FormLabel>
              <FormControl>
                <Input placeholder="Give overview of  your startup in 395 characters" {...field} className='h-40 px-5 pb-28 mb-5' />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <Button type="submit" title="Save & Proceed" variant="btn_lightred" isLoading={isLoading} />
      </form>
    </Form>
  );
};

export default AboutStartUpForm;
