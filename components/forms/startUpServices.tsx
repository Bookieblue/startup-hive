'use client';
import React, { useState } from 'react';
import { Form } from '../ui/form';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import Button from '../ui/button';
import { ServicesSchema } from '@/lib/models/auth/schema';
import { TagInput, TextInput } from '@/components/ui/FormFields';

const StartUpServicesForm = () => {
  const form = useForm<z.infer<typeof ServicesSchema>>({
    resolver: zodResolver(ServicesSchema),
    defaultValues: {
      services: '',
      tags: 'Virtual card',
    },
  });

  const [isLoading, setIsLoading] = React.useState(false);

  const router = useRouter();

  const onSubmit = (values: z.infer<typeof ServicesSchema>) => {
    setIsLoading(true);
    router.push('/startup-onboarding/social-links');
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="mt-5 space-y-4">
        <TextInput
          control={form.control}
          name="services"
          placeholder=""
          label="Describe your startup services briefly"
          className="h-40 px-5 pb-28 mb-5"
        />
        <div className="mt-5">
          <TagInput
            control={form.control}
            name="tags"
            label="Create a tag for your services"
          />
        </div>
        <div className="flex gap-3">
          <p>Suggestion:</p>
          <div className="flex gap-2">
            <Link href="/" className="underline text-lightred-50">
              Virtual Card
            </Link>
            <Link href="/" className="underline text-lightred-50">
              POS Terminal
            </Link>
            <Link href="/" className="underline text-lightred-50">
              Payment gateway
            </Link>
            <Link href="/" className="underline text-lightred-50">
              Direct deposit
            </Link>
          </div>
        </div>
        <div className='pb-10'>
          <Button
            type="submit"
            title="Save & Proceed"
            variant="btn_lightred"
            isLoading={isLoading}
          />
        </div>
      </form>
    </Form>
  );
};

export default StartUpServicesForm;
