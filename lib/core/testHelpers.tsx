import React, { FC, ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useForm, FormProvider } from 'react-hook-form';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

export const QueryClientWrapper: FC<{ children: ReactNode }> = ({
  children,
}: {
  children: ReactNode;
}) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export const FormProviderWrapper: FC<{ children: ReactNode }> = ({
  children,
}: {
  children: ReactNode;
}) => {
  const methods = useForm();
  return (
    <QueryClientProvider client={queryClient}>
      <FormProvider {...methods}>{children}</FormProvider>
    </QueryClientProvider>
  );
};
