import React from 'react';
import { Form } from '../ui/form';
import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import Button from '../ui/button';
import TextInput from '../ui/FormFields/TextInput';
import { AboutSchema } from '@/lib/models/auth/schema';

const AboutStartUpForm = () => {
  const form = useForm<z.infer<typeof AboutSchema>>({
    resolver: zodResolver(AboutSchema),
    defaultValues: {
      about: '',
    },
  });
  const [isLoading, setIsLoading] = React.useState(false);
  const router = useRouter();

  const onSubmit = (values: z.infer<typeof AboutSchema>) => {
    setIsLoading(true);
    router.push('/startup-onboarding/services');
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="mt-5 space-y-4">
        <TextInput
          control={form.control}
          name="about"
          placeholder="Give overview of  your startup in 395 characters"
          label="What do you want the world to know about your startup?"
          className="h-40 px-5 pb-28 mb-5"
        />
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

export default AboutStartUpForm;
