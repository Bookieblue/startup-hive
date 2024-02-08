import React from 'react';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import * as z from 'zod';
import { Input } from '../ui/input';
import { toast } from '@/components/ui/use-toast';
import Button from '../ui/button';
import { otpSchema } from '@/lib/models/auth/schema';
import { useMutateEmailConfirmation } from '@/lib/models/auth/hooks';
import { errorFormat } from '@/lib/utils';
const ConfirmOtpForm = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = React.useState(false);
  const form = useForm<z.infer<typeof otpSchema>>({
    resolver: zodResolver(otpSchema),
  });

  const { mutate: mutateEmailConfirmation } = useMutateEmailConfirmation();

  const onSubmit = (values: z.infer<typeof otpSchema>) => {
    setIsLoading(true);
    mutateEmailConfirmation(values, {
      onSuccess: () => {
        setIsLoading(false);
        toast({
          title: 'Success',
          description: 'Email verified successfully',
        });
        form.reset();
        router.push('/login');
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
      <form onSubmit={form.handleSubmit(onSubmit)} className="mt-5 space-y-4">
        <FormField
          control={form.control}
          name="otp"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Enter OTP</FormLabel>
              <FormControl>
                <Input placeholder="910276" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
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

export default ConfirmOtpForm;
