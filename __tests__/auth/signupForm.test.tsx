import { render } from '@testing-library/react';
import SignUpForm from '@/components/forms/signup';

describe('<SignUpForm />', () => {
  it('should render register component correctly without error', () => {
    const { container } = render(<SignUpForm />);
    expect(container).not.toBeNull();
  });
});
