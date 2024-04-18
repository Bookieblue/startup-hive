'use client';
import React, { useState } from 'react';
import { Form } from '../ui/form';
import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import Button from '../ui/button';
import { AFRICAN_COUNTRIES, COMPANY_FIELD } from '@/app/constants';
import { OnboardSchema } from '@/lib/models/auth/schema';
import { TextInput, SelectInput, TagInput } from '@/components/ui/FormFields';
import ImageInput from '../ui/FormFields/ImageInput';

const OnboardingForm = () => {
  const defaultImageUrl = '/default-upload.svg';

  const form = useForm<z.infer<typeof OnboardSchema>>({
    resolver: zodResolver(OnboardSchema),
    defaultValues: {
      startup_name: '',
      domain: '',
      email: '',
      country: '',
      company_field: '',
      describe_startup: '',
      year: '',
      tags: '',
      image: defaultImageUrl,
    },
  });

  const [isLoading, setIsLoading] = React.useState(false);

  const countries = AFRICAN_COUNTRIES.map((country) => ({
    label: country.name,
    value: country.code,
  }));

  const field = COMPANY_FIELD.map((company_field) => ({
    label: company_field.name,
    value: company_field.name,
  }));

  const router = useRouter();

  const onSubmit = (values: z.infer<typeof OnboardSchema>) => {
    setIsLoading(true);
    router.push('/startup-onboarding/about');
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="my-5 ">
        <div className="flex gap-5 flex-col lg:flex-row">
          <TextInput
            control={form.control}
            name="startup_name"
            placeholder="Paystack"
            label="Your startup name"
          />
          <TextInput
            control={form.control}
            name="domain"
            placeholder="paystack.com"
            label="Website url (domain)"
          />
        </div>
        <div className="flex gap-5 flex-col lg:flex-row mt-5">
          <TextInput
            control={form.control}
            name="email"
            placeholder="support@paystack.com"
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
          <TextInput
            control={form.control}
            name="describe_startup"
            placeholder=" "
            label="Describe your startup in 65 characters"
          />
        </div>
        <div className="flex gap-5 flex-col lg:flex-row mt-5 ">
          <SelectInput
            control={form.control}
            name="company_field"
            label="Company field"
            options={field}
            placeholder="Select your field"
          />
          <TextInput
            control={form.control}
            name="year"
            placeholder=""
            label="Founded year"
          />
        </div>
        <div className="mt-5">
          <TagInput
            control={form.control}
            name="tags"
            label="Tag countries that can use your startups"
          />
        </div>
        <div className="mt-5">
          <ImageInput control={form.control} name="image" label="Upload logo" />
        </div>
        <div className="mt-5">
          <Button
            type="submit"
            title="Save & proceed"
            variant="btn_lightred"
            isLoading={isLoading}
          />
        </div>
      </form>
    </Form>
  );
};

export default OnboardingForm;
