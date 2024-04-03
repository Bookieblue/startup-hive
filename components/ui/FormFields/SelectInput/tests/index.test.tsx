import { render } from '@testing-library/react';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormProviderWrapper } from '@/lib/core/testHelpers';
import SelectInput from '@/components/ui/FormFields/SelectInput';

const mockGetLocalStorage = jest.fn();
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
  resolver: zodResolver(z.object({ country: z.string() })),
  defaultValues: {
    country: '',
  },
});

jest.mock('@/lib/core/localStorageUtil', () => ({
  getLocalStorage: () => mockGetLocalStorage(),
  removeLocalStorage: jest.fn(),
}));
describe('<ConfirmOtp Form />', () => {
  it('should render confirm otp component correctly without error', () => {
    const { container } = render(
      <SelectInput
        control={form.control}
        name="country"
        placeholder="Select Country"
        options={[]}
        label="Country"
      />,
      {
        wrapper: FormProviderWrapper,
      },
    );
    expect(container).not.toBeNull();
  });
});
