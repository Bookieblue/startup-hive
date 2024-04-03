import React from 'react';
import { Form } from '../ui/form';
import * as _ from 'lodash';
import { useRouter } from 'next/navigation';
import { toast } from '@/components/ui/use-toast';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import Button from '../ui/button';
import { AFRICAN_COUNTRIES } from '@/app/constants';
import { SelectInput, TextInput } from '@/components/ui/FormFields';
import { StartupSchema } from '@/lib/models/auth/schema';

const SubmitStartupForm = () => {
  const form = useForm<z.infer<typeof StartupSchema>>({
    resolver: zodResolver(StartupSchema),
    defaultValues: {
      startupName: '',
      domain: '',
      email: '',
      country: '',
    },
  });
  const router = useRouter();

  const [isLoading, setIsLoading] = React.useState(false);

  const countries = AFRICAN_COUNTRIES.map((country) => ({
    label: country.name,
    value: country.code,
  }));

  const onSubmit = (values: z.infer<typeof StartupSchema>) => {
    setIsLoading(true);
    toast({
      title: 'Submitted succesfully',
      description: 'Startup details submitted successfully',
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="my-5 ">
        <div className="flex gap-5 flex-col lg:flex-row">
          <TextInput
            control={form.control}
            name="startupName"
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
        <div className="flex gap-5 flex-col lg:flex-row mt-5">
          <TextInput
            control={form.control}
            name="email"
            placeholder="eg. support@domain.com"
            label="Corporate email"
          />
          <SelectInput
            control={form.control}
            name="country"
            label="Country"
            options={countries}
            placeholder="Select your country"
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
