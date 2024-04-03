import React from 'react';
import { Form } from '../ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import * as z from 'zod';
import { Input } from '../ui/input';
import { toast } from '@/components/ui/use-toast';
import Button from '../ui/button';
import { TextInput } from '@/components/ui/FormFields';
import { otpSchema } from '@/lib/models/auth/schema';
import { useMutateEmailConfirmation } from '@/lib/models/auth/hooks';
import { errorFormat } from '@/lib/utils';

const ConfirmOtpForm = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = React.useState(false);
  const form = useForm<z.infer<typeof otpSchema>>({
    resolver: zodResolver(otpSchema),
    defaultValues: {
      otp: '',
    },
  });

  const { mutate: mutateEmailConfirmation } = useMutateEmailConfirmation();

  const onSubmit = (values: z.infer<typeof otpSchema>) => {
    setIsLoading(true);
    mutateEmailConfirmation(values, {
      onSuccess: () => {
        setIsLoading(false);
        toast({
          title: 'SUCCESS',
          description: 'Email verified successfully',
        });
        form.reset();
        router.push('/login');
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
          name="otp"
          label="Enter OTP"
          placeholder="910276"
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
