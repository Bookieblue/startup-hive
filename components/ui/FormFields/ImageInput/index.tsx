import React, { FC } from 'react';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Control } from 'react-hook-form';
import Image from 'next/image';
import { UploadButton } from '@/lib/utils/uploadthing';
import { toast } from '@/components/ui/use-toast';


interface ImageInputProps {
    control: Control<any>;
    name: string;
    label: string;
    error?: string;
    id?: string;
  }

  const ImageInput: FC<ImageInputProps> = ({ control, name, label, id }) => {
    return (
        <FormField
        control={control}
        name={name}
        render={({ field }) => (
          <FormItem className="w-full">
            <FormLabel htmlFor={id || name}>{label}</FormLabel>
            <FormControl>
              <div className="flex gap-3">
                {field.value.length ? (
                  <div>
                    <Image
                      src={field.value}
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
                    field.onChange(res[0].url);
                    toast({
                      title: 'Uploded succesfully',
                      description: 'Logo uploaded successfully',
                    });
                  }}
                  onUploadError={(error: Error) => {
                    toast({
                      title: 'Error',
                      description: `ERROR! ${error.message}`,
                    });
                  }}
                />
                </div>
                 </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
    )
  }


  export default ImageInput;