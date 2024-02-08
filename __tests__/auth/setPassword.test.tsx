import { render } from '@testing-library/react';
import SetPasswordForm from '@/components/forms/resetPassword';

describe('<SetPasswordForm />', () => {
  it('should render set password component correctly without error', () => {
    const { container } = render(<SetPasswordForm />);
    expect(container).not.toBeNull();
  });
});
