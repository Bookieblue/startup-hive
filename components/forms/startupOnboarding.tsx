'use client';
import React, { useState } from 'react';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { useRouter } from 'next/navigation';
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
import { AFRICAN_COUNTRIES, COMPANY_FIELD } from '@/app/constants';
import TagsInput from 'react-tagsinput';
import { UploadButton } from '@/lib/utils/uploadthing';
import Image from 'next/image';
import { toast } from '@/components/ui/use-toast';
import { onboardSchema } from '@/lib/models/auth/schema';



const OnboardingForm = () => {
  const form = useForm<z.infer<typeof onboardSchema>>({
    resolver: zodResolver(onboardSchema),
    defaultValues: {
      StartupName: '',
      domain: '',
      email: '',
      country: '',
      companyField: '',
      describeStartup: '',
      year: '',
      tags: '',
      image: '',
    },
  });

  const [isLoading, setIsLoading] = React.useState(false);

  const [imageUrl, setImageUrl] = useState<string>('/default-upload.svg');

  const [tags, setTags] = useState(['Nigeria']);

  const router = useRouter();

  const onSubmit = (values: z.infer<typeof onboardSchema>) => {
    setIsLoading(true);
    router.push('/startup-onboarding/about');
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="my-5 ">
        <div className="flex gap-5 flex-col lg:flex-row">
          <FormField
            control={form.control}
            name="StartupName"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Your startup name</FormLabel>
                <FormControl>
                  <Input placeholder="Paystack" {...field} className="w-full" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="domain"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Website url (domain)</FormLabel>
                <FormControl>
                  <Input
                    placeholder="paystack.com"
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
                <FormLabel>Corporate email</FormLabel>
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
        <div className="mt-5">
          <FormField
            control={form.control}
            name="describeStartup"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Describe your startup in 65 characters</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} className="w-full" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex gap-5 flex-col lg:flex-row mt-5 ">
          <FormField
            control={form.control}
            name="companyField"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Company field</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger id="framework" className="w-full">
                      <SelectValue placeholder="Select your field" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent position="popper">
                    <ScrollArea className="w-full h-40 px-4">
                      {COMPANY_FIELD.map((companyField) => (
                        <SelectItem
                          key={companyField.name}
                          value={companyField.name}
                        >
                          {companyField.name}
                        </SelectItem>
                      ))}
                    </ScrollArea>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="year"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Founded year</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} className="w-full" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="mt-5">
          <FormField
            control={form.control}
            name="tags"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Tag countries that can use your startups</FormLabel>
                <FormControl>
                  <TagsInput
                    value={tags}
                    onChange={setTags}
                    tagProps={{ className: 'react-tagsinput-tag info' }}
                    inputProps={{ placeholder: 'Add a tag' }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="mt-5">
          <FormField
            control={form.control}
            name="image"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Upload logo</FormLabel>
                <FormControl>
                  <div className="flex gap-3">
                    {imageUrl.length ? (
                      <div>
                        <Image
                          src={imageUrl}
                          alt="logo pic"
                          width={90}
                          height={100}
                        />
                      </div>
                    ) : null}
                    <UploadButton
                      className="upload-btn"
                      endpoint="imageUploader"
                      onClientUploadComplete={(res) => {
                        console.log('Files: ', res);
                        setImageUrl(res[0].url);
                        toast({
                          title: 'Uploded succesfully',
                          description: 'Logo uploaded successfully',
                        });
                      }}
                      onUploadError={(error: Error) => {
                        toast({
                          title: 'Error',
                          description: (`ERROR! ${error.message}`),
                        });
                      }}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="mt-5">
          <Button
            type="submit"
            title="Save & proceed"
            variant="btn_lightred"
            isLoading={isLoading}
          />
        </div>
      </form>
    </Form>
  );
};

export default OnboardingForm;
