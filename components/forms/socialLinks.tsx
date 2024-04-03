import React from 'react';
import { Form } from '../ui/form';
import * as _ from 'lodash';
import { useRouter } from 'next/navigation';
import { toast } from '@/components/ui/use-toast';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import Button from '../ui/button';
import { TextInput } from '@/components/ui/FormFields';
import { SocialLinksSchema } from '@/lib/models/auth/schema';

const SocialLinksForm = () => {
  const form = useForm<z.infer<typeof SocialLinksSchema>>({
    resolver: zodResolver(SocialLinksSchema),
    defaultValues: {
      facebook: '',
      tiktok: '',
      youtube: '',
      twitter: '',
      whatsapp: '',
      discord: '',
    },
  });

  const [isLoading, setIsLoading] = React.useState(false);

  const router = useRouter();

  const onSubmit = (values: z.infer<typeof SocialLinksSchema>) => {
    setIsLoading(true);
    toast({
      title: 'Submitted succesfully',
      description: 'Company Onboarded successfully',
    });
    router.push('');
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="my-5 ">
        <div className="flex gap-5 flex-col lg:flex-row">
          <TextInput
            control={form.control}
            name="facebook"
            placeholder=" "
            label="Facebook"
          />
          <TextInput
            control={form.control}
            name="youtube"
            placeholder=" "
            label="Youtube"
          />
        </div>
        <div className="flex gap-5 flex-col lg:flex-row mt-5">
          <TextInput
            control={form.control}
            name="twitter"
            placeholder=" "
            label="Twitter(x)"
          />
          <TextInput
            control={form.control}
            name="tiktok"
            placeholder=" "
            label="Tiktok"
          />
        </div>
        <div className="flex gap-5 flex-col lg:flex-row mt-5 ">
          <TextInput
            control={form.control}
            name="whatsapp"
            placeholder=" "
            label="Whatsapp"
          />
          <TextInput
            control={form.control}
            name="discord"
            placeholder=" "
            label="Discord"
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

export default SocialLinksForm;
