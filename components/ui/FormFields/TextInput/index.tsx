import React, { FC } from 'react';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Control } from 'react-hook-form';

interface TextInputProps {
  control: Control<any>;
  name: string;
  label: string;
  placeholder: string;
  error?: string;
  type?: 'text' | 'email' | 'password';
  id?: string;
}

const TextInput: FC<TextInputProps> = ({
  type = 'text',
  control,
  name,
  label,
  placeholder,
  id,
}) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="w-full">
          <FormLabel htmlFor={id || name}>{label}</FormLabel>
          <FormControl>
            <Input
              placeholder={placeholder}
              {...field}
              className="w-full"
              type={type}
              aria-label={label}
              id={id || name}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default TextInput;
