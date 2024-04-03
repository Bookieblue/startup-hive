import React, { FC } from 'react';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Control } from 'react-hook-form';
import TagsInput from 'react-tagsinput';

interface TagInputProps {
  control: Control<any>;
  name: string;
  label: string;
  error?: string;
  id?: string;
}

const TagInput: FC<TagInputProps> = ({ control, name, label, id }) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="w-full">
          <FormLabel htmlFor={id || name}>{label}</FormLabel>
          <FormControl>
            <TagsInput
              value={field.value ? field.value.split(',') : []} // Convert the string to an array
              onChange={(tags) => field.onChange(tags.join(','))} // Convert the array back to a string
              tagProps={{ className: 'react-tagsinput-tag info' }}
              inputProps={{ placeholder: 'Add a tag' }}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default TagInput;
