import React from 'react';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import * as _ from 'lodash';
import { useRouter } from 'next/navigation';
import { toast } from '@/components/ui/use-toast';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Input } from '../ui/input';
import Button from '../ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
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

  const [isLoading, setIsLoading] = React.useState(false);

  const { mutate: onSignUp } = useMutateSignUp();

  const onSubmit = (values: z.infer<typeof signupFormSchema>) => {
    const payload = _.omit(values, ['confirm_password']);
    setIsLoading(true);
    onSignUp(payload, {
      onSuccess: () => {
        setIsLoading(false);
        toast({
          title: 'Submitted succesfully',
          description: 'Account created successfully',
        });
        saveLocalStorage(HIVE_ACCOUNT_EMAIL, payload.email);
        form.reset();
        router.push('/confirm-otp');
      },
      onError: (error: any) => {
        setIsLoading(false);
        const message = errorFormat(error);
        toast({
          title: 'Error',
          description: message,
        });
      },
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="my-5 ">
        <div className="flex gap-5 flex-col lg:flex-row">
          <FormField
            control={form.control}
            name="first_name"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>First Name</FormLabel>
                <FormControl>
                  <Input placeholder="eg. John" {...field} className="w-full" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="last_name"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Last Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="eg. Peterus"
                    {...field}
                    className="w-full"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex gap-5 flex-col lg:flex-row mt-5">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="eg. yourname@gmail.com"
                    {...field}
                    className="w-full"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="country"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel htmlFor={'country'}>Country</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  // value={field.value}
                  {...field}
                >
                  <FormControl>
                    <SelectTrigger id="country" className="w-full">
                      <SelectValue placeholder="Select your country" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent position="popper" aria-labelledby="Country">
                    <ScrollArea className="w-full h-40 px-4">
                      {AFRICAN_COUNTRIES.map((country) => (
                        <SelectItem key={country.code} value={country.code}>
                          {country.name}
                        </SelectItem>
                      ))}
                    </ScrollArea>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex gap-5 flex-col lg:flex-row mt-5 ">
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Enter your password"
                    {...field}
                    className="w-full"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="confirm_password"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel htmlFor={'confirm_password'}>
                  Confirm Password
                </FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    id={'confirm_password'}
                    placeholder="Confirm password"
                    {...field}
                    className="w-full"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
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
