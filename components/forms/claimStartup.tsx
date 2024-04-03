import React from 'react';
import { Form } from '../ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import Button from '../ui/button';
import Link from 'next/link';
import { toast } from '@/components/ui/use-toast';
import TextInput from '../ui/FormFields/TextInput';
import { ClaimStartupSchema } from '@/lib/models/auth/schema';

const ClaimStartupForm = () => {
  const form = useForm<z.infer<typeof ClaimStartupSchema>>({
    resolver: zodResolver(ClaimStartupSchema),
    defaultValues: {
      email: '',
      startup: '',
      domain: '',
    },
  });
  const [isLoading, setIsLoading] = React.useState(false);

  const onSubmit = (values: z.infer<typeof ClaimStartupSchema>) => {
    setIsLoading(true);
    toast({
      title: 'Submitted succesfully',
      description: 'User login successfully',
    });
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="my-5">
        <div className="flex gap-5 flex-col lg:flex-row">
          <TextInput
            control={form.control}
            name="startup"
            placeholder="eg. Paystack"
            label="Your startup name"
          />
          <TextInput
            control={form.control}
            name="domain"
            placeholder="eg. paystack.com"
            label="Website url (domain)"
          />
        </div>
        <div className="mt-5 mb-5">
          <TextInput
            control={form.control}
            name="email"
            placeholder="eg. support@domain.com"
            label="Corporate email"
          />
        </div>
        <Button
          type="submit"
          title="Submit Now"
          variant="btn_lightred"
          isLoading={isLoading}
        />
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

export default ClaimStartupForm;
