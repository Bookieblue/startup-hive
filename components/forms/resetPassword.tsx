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
import { toast } from '@/components/ui/use-toast';

const FormSchema = z.object({
  email: z
    .string()
    .min(1, 'Email is required')
    .email('Incorrect email address'),
});

const ResetPasswordForm = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: '',
    },
  });

  const [isLoading, setIsLoading] = React.useState(false);
  
  const onSubmit = (values: z.infer<typeof FormSchema>) => {
    setIsLoading(true);
    toast({
      title: 'Submitted succesfully',
      description: 'Reset password details sent successfully',
    });
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="mt-5 space-y-4">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Your Email</FormLabel>
              <FormControl>
                <Input placeholder="eg. yourname@gmail.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" title="Submit Now" variant="btn_lightred"  isLoading={isLoading}/>
      </form>
    </Form>
  );
};

export default ResetPasswordForm;
