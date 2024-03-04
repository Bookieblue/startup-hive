import React from 'react';
import { Form } from '../ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import Button from '../ui/button';
import { TextInput } from '../ui/FormFields';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { LoginSchema } from '@/lib/models/auth/schema';
import { useMutateLogin } from '@/lib/models/auth/hooks';
import { toast } from '@/components/ui/use-toast';


const LoginForm = () => {
  const router = useRouter();
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
        setIsLoading(false);
          toast({
            title: 'ERROR',
            description: 'message',
          });
        }
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

export default LoginForm
