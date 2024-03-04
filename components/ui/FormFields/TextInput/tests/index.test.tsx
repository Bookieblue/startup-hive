import { render, screen, fireEvent } from '@testing-library/react';
import { Form } from '@/components/ui/form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormProviderWrapper } from '@/lib/core/testHelpers';
import TextInput from '..';

const mockUseForm = jest.fn().mockImplementation(() => ({
  control: jest.fn(),
  handleSubmit: jest.fn(),
}));

jest.mock('react-hook-form', () => ({
  ...jest.requireActual('react-hook-form'),
  Controller: () => <></>,
  useForm: () => mockUseForm,
}));
const form = mockUseForm({
  resolver: zodResolver(z.object({ first_name: z.string() })),
  defaultValues: {
    first_name: '',
  },
});

describe('<TextInput />', () => {
  it('should render textInput component correctly without error', () => {
    const { container } = render(
      <TextInput
        control={form.control}
        name="first_name"
        placeholder="name"
        label="First Name"
        type="text"
      />,
      {
        wrapper: FormProviderWrapper,
      },
    );
    expect(container).not.toBeNull();
  });
});
