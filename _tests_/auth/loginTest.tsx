import { render } from '@testing-library/react';
import LoginForm from '@/components/forms/login';

describe('<LoginForm />', () => {
  it('should render login component correctly without error', () => {
    const { container } = render(<LoginForm />);
    expect(container).not.toBeNull();
  });
});
