import { render } from '@testing-library/react';
import ConfirmOtpForm from '@/components/forms/confirmOtp';

describe('<ConfirmOtp />', () => {
  it('should render confirm otp component correctly without error', () => {
    const { container } = render(<ConfirmOtpForm />);
    expect(container).not.toBeNull();
  });
});
