"use client"
import React, {useState} from 'react';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Input } from '../ui/input';
import Button from '../ui/button';
import { toast } from '@/components/ui/use-toast';
import TagsInput from 'react-tagsinput';

const FormSchema = z.object({
  services: z
    .string()
    .min(1, 'Service is required')
});

const StartUpServicesForm = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      services: ''
    },
  });
  const [tags, setTags] = useState(["Virtual card"]); 
  const [isLoading, setIsLoading] = React.useState(false);

  const router = useRouter();

  const onSubmit = (values: z.infer<typeof FormSchema>) => {
    setIsLoading(true);
    router.push('/startup-onboarding/social-links');
  };
  
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="mt-5 space-y-4">
        <FormField
          control={form.control}
          name="services"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Describe your startup services briefly.</FormLabel>
              <FormControl>
                <Input placeholder="" {...field} className='h-40 px-5 pb-28 mb-5' />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="mt-5">
                  <FormLabel>Create a tag for your services</FormLabel>
                    <TagsInput 
                        value={tags} 
                        onChange={setTags} 
                        tagProps={{ className: "react-tagsinput-tag info" }}
                        inputProps={{placeholder: 'Add a tag'}}
                    /> 
        </div>
        <div className='flex gap-3'>
          <p>Suggestion:</p>
          <div className='flex gap-2'>
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
        <Button type="submit" title="Save & Proceed" variant="btn_lightred" isLoading={isLoading} />
      </form>
    </Form>
  );
};

export default StartUpServicesForm;
