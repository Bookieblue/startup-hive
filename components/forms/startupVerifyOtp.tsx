import React from 'react';
import { Form } from '../ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import * as z from 'zod';
import { toast } from '@/components/ui/use-toast';
import Button from '../ui/button';
import { TextInput } from '@/components/ui/FormFields';
import { otpSchema } from '@/lib/models/auth/schema';


const StartupVerifyOtpForm = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = React.useState(false);
  const form = useForm<z.infer<typeof otpSchema>>({
    resolver: zodResolver(otpSchema),
    defaultValues: {
      otp: '',
    },
  });



  const onSubmit = (values: z.infer<typeof otpSchema>) => {
    setIsLoading(true);
        setIsLoading(false);
        toast({
          title: 'SUCCESS',
          description: 'Email verified successfully',
        });
        form.reset();
        router.push('/startup-onboarding/onboard');
      }


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

export default StartupVerifyOtpForm ;
