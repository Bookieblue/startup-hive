import React from 'react';
import { Form } from '../ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import Button from '../ui/button';
import { useSelector, useDispatch } from 'react-redux';
import { TextInput } from '../ui/FormFields';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { LoginSchema } from '@/lib/models/auth/schema';
import { useMutateLogin } from '@/lib/models/auth/hooks';
import { setCookie } from 'nookies';
import { toast } from '@/components/ui/use-toast';
import { errorFormat } from '@/lib/utils';
import { saveLocalStorage } from '@/lib/core/localStorageUtil';
import { HIVE_ACCOUNT_EMAIL, HIVE_ACCESS_TOKEN } from '@/lib/core/constant';
import { updateUserProfile, setIsLoggedIn } from '@/lib/store/reducer';

const LoginForm = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const [isLoading, setIsLoading] = React.useState(false);

  const { mutate: mutateLogin } = useMutateLogin({});

  const onSubmit = (values: z.infer<typeof LoginSchema>) => {
    setIsLoading(true);
    mutateLogin(values, {
      onSuccess: (response) => {
        setIsLoading(false);
        if (response?.is_email_verification_required) {
          toast({
            title: 'ERROR',
            description: response.message,
          });
          saveLocalStorage(HIVE_ACCOUNT_EMAIL, values.email);
          router.push('/account-confirmation');
          return;
        }
        setCookie(null, HIVE_ACCESS_TOKEN, response.token.access);
        dispatch(updateUserProfile(response.user));
        dispatch(setIsLoggedIn(true));
        toast({
          title: 'SUCCESS',
          description: response.message,
        });
        router.push('/');
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
      <form onSubmit={form.handleSubmit(onSubmit)} className="mt-5 space-y-4">
        <TextInput
          control={form.control}
          name="email"
          label="Email"
          placeholder="eg. yourname@gmail.com"
          type="email"
        />
        <TextInput
          control={form.control}
          name="password"
          label="Password"
          placeholder="Enter your password"
          type="password"
        />
        <p className="medium-16 mt-5 md:mt-5">
          Forgot password{' '}
          <Link href="../password/forgot" className="text-lightred-50">
            Reset here
          </Link>
        </p>
        <Button
          type="submit"
          title="Submit Now"
          variant="btn_lightred"
          isLoading={isLoading}
        />
      </form>
    </Form>
  );
};

export default LoginForm;
