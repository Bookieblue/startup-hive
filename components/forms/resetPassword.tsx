import React from 'react';
import { Form } from '../ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import Button from '../ui/button';
import { toast } from '@/components/ui/use-toast';
import { TextInput } from '../ui/FormFields';

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
        <TextInput
          control={form.control}
          name="email"
          placeholder="eg. yourname@gmail.com"
          label="Your Email"
        />
        <Button
          type="submit"
          title="Submit Now"
          variant="btn_lightred"
          isLoading={isLoading}
        />
      </form>
    </Form>
  );
};

export default ResetPasswordForm;
