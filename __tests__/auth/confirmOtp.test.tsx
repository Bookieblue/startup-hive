import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import ConfirmOtpForm from '@/components/forms/confirmOtp';
import { FormProviderWrapper } from '@/lib/core/testHelpers';

const mutateConfirm = jest.fn();
const mutateResendOtp = jest.fn();
const mockGetLocalStorage = jest.fn();

jest.mock('@/lib/models/auth/hooks', () => ({
  useMutateEmailConfirmation: () => ({
    mutate: mutateConfirm,
  }),
  useMutateResendEmailConfirmationOTP: () => ({
    mutate: mutateResendOtp,
  }),
}));

jest.mock('@/lib/core/localStorageUtil', () => ({
  getLocalStorage: () => mockGetLocalStorage(),
  removeLocalStorage: jest.fn(),
}));
describe('<ConfirmOtp Form />', () => {
  it('should render confirm otp component correctly without error', () => {
    const { container } = render(<ConfirmOtpForm />, {
      wrapper: FormProviderWrapper,
    });
    expect(container).not.toBeNull();
  });
  it('should submit form when user click submit button and form is valid', async () => {
    render(<ConfirmOtpForm />, {
      wrapper: FormProviderWrapper,
    });
    const otpInput = screen.getByLabelText('Enter OTP');
    const btn = screen.getByText('Submit Now');
    fireEvent.change(otpInput, { target: { value: '7890' } });
    fireEvent.submit(btn);
    await waitFor(() => {
      expect(mutateConfirm).toHaveBeenCalledWith(
        {
          otp: '7890',
        },
        {
          onSuccess: expect.any(Function),
          onError: expect.any(Function),
        },
      );
    });
  });
});
// describe('<ConfirmOtp Layout />', () => {
//   beforeEach(() => {
//     mockGetLocalStorage.mockReturnValue('test@gmail.com');
//   });
//   it('should render confirm otp component correctly without error', () => {
//     const { container } = render(<ConfirmOtp />, {
//       wrapper: FormProviderWrapper,
//     });
//     expect(container).not.toBeNull();
//   });
//   it('should resend otp code once user click the resend button', async () => {
//     render(<ConfirmOtp />, {
//       wrapper: FormProviderWrapper,
//     });
//     const btn = screen.getByRole('button', { name: 'Resend here' });
//     fireEvent.click(btn);
//     await waitFor(() => {
//       expect(mutateResendOtp).toHaveBeenCalledWith(
//         {
//           email: 'test@gmail.com',
//         },
//         {
//           onSuccess: expect.any(Function),
//           onError: expect.any(Function),
//         },
//       );
//     });
//   });
// });
