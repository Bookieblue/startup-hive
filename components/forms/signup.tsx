import React from 'react';
import { Form } from '../ui/form';
import * as _ from 'lodash';
import { useRouter } from 'next/navigation';
import { toast } from '@/components/ui/use-toast';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import Button from '../ui/button';
import { TextInput, SelectInput } from '@/components/ui/FormFields';
import { useMutateSignUp } from '@/lib/models/auth/hooks';
import { signupFormSchema } from '@/lib/models/auth/schema';
import { AFRICAN_COUNTRIES } from '@/app/constants';
import { saveLocalStorage } from '@/lib/core/localStorageUtil';
import { errorFormat } from '@/lib/utils';
import { HIVE_ACCOUNT_EMAIL } from '@/lib/core/constant';

const SignUpForm = () => {
  const form = useForm<z.infer<typeof signupFormSchema>>({
    resolver: zodResolver(signupFormSchema),
    defaultValues: {
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      confirm_password: '',
      country: '',
    },
  });
  const router = useRouter();
  const countries = AFRICAN_COUNTRIES.map((country) => ({
    label: country.name,
    value: country.code,
  }));

  const [isLoading, setIsLoading] = React.useState(false);

  const { mutate: onSignUp } = useMutateSignUp();

  const onSubmit = (values: z.infer<typeof signupFormSchema>) => {
    const payload = _.omit(values, ['confirm_password']);
    setIsLoading(true);
    onSignUp(payload, {
      onSuccess: () => {
        setIsLoading(false);
        toast({
          title: 'SUCCESS',
          description: 'Account created successfully',
        });
        saveLocalStorage(HIVE_ACCOUNT_EMAIL, payload.email);
        form.reset();
        router.push('/account-confirmation');
      },
      onError: (error: any) => {
        setIsLoading(false);
        const message = errorFormat(error);
        toast({
          title: 'ERROR',
          description: message,
        });
      },
    });
  };

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
          <TextInput
            control={form.control}
            name="password"
            label="Password"
            placeholder="Enter your password"
            type="password"
          />
          <TextInput
            control={form.control}
            name="confirm_password"
            type="password"
            label="Confirm Password"
            placeholder="Confirm your password"
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

export default SignUpForm;
