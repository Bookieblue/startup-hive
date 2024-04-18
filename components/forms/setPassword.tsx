import React from 'react';
import { Form } from '../ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import Button from '../ui/button';
import { toast } from '@/components/ui/use-toast';
import { TextInput } from '../ui/FormFields';

const FormSchema = z
  .object({
    password: z
      .string()
      .min(1, 'Password is required')
      .min(8, 'Password must have 8 characters'),
    confirmPassword: z
      .string()
      .min(1, 'Password confirmation is required')
      .min(8, 'Password must have 8 characters'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: 'Password do not match',
  });

const SetPasswordForm = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      password: '',
      confirmPassword: '',
    },
  });

  const [isLoading, setIsLoading] = React.useState(false);

  const onSubmit = (values: z.infer<typeof FormSchema>) => {
    setIsLoading(true);
    toast({
      title: 'Submitted succesfully',
      description: 'Password reset successfully',
    });
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mt-5 space-y-4 mb-28 lg:mb-48 "
      >
        <TextInput
          control={form.control}
          name="password"
          placeholder="Set password "
          label="Set password"
          type="password"
        />
        <TextInput
          control={form.control}
          name="confirmPassword"
          placeholder="Confirm password"
          label="Confirm password"
          type="password"
        />
        <div className="mt-3 md:mt-5 ">
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

export default SetPasswordForm;
