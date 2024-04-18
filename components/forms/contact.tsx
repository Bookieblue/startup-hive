import React from 'react';
import { Form } from '../ui/form';
import * as _ from 'lodash';
import { useRouter } from 'next/navigation';
import { toast } from '@/components/ui/use-toast';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import Button from '../ui/button';
import { TextInput, SelectInput, TextareaInput } from '@/components/ui/FormFields';
import { ContactFormSchema, signupFormSchema } from '@/lib/models/auth/schema';
import { AFRICAN_COUNTRIES } from '@/app/constants';


const ContactForm = () => {
  const form = useForm<z.infer<typeof ContactFormSchema>>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      first_name: '',
      last_name: '',
      email: '',
      country: '',
      message: '',
    },
  });
 
  const [isLoading, setIsLoading] = React.useState(false);


  const countries = AFRICAN_COUNTRIES.map((country) => ({
    label: country.name,
    value: country.code,
  }));
  
  const onSubmit = (values: z.infer<typeof ContactFormSchema>) => {
    
    setIsLoading(true);
  
        toast({
          title: 'SUCCESS',
          description: 'Your message has been sent successfully',
        });

     }


  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="my-5 ">
        <div className="flex gap-5 flex-col lg:flex-row">
          <TextInput
            control={form.control}
            name="first_name"
            placeholder="eg. John"
            label="First Name"
          />
          <TextInput
            control={form.control}
            name="last_name"
            placeholder="eg. Peterus"
            label="Last Name"
          />
        </div>
        <div className="flex gap-5 flex-col lg:flex-row mt-5">
          <TextInput
            control={form.control}
            name="email"
            label={'Email'}
            type="email"
            placeholder="eg. yourname@gmail.com"
          />
          <SelectInput
            control={form.control}
            name="country"
            label="Country"
            options={countries}
            placeholder="Select your country"
          />
        </div>
        <div className="flex gap-5 flex-col lg:flex-row mt-5 ">
        <TextareaInput 
         control={form.control}
         name="message"
         label="Message"
         placeholder="Write your message"
         className='h-40'
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

export default ContactForm;
