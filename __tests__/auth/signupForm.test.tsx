import {render, screen, fireEvent, waitFor} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SignUpForm from '@/components/forms/signup';
import {FormProviderWrapper} from '@/lib/core/testHelpers';

const mutateSignup = jest.fn();

jest.mock('@/lib/models/auth/hooks', () => ({
    useMutateSignUp: () => ({
        mutate: mutateSignup,
    }),
}));

describe('<SignUpForm />', () => {
    it('should render register component correctly without error', () => {
        const {container} = render(<SignUpForm/>, {
            wrapper: FormProviderWrapper,
        });
        expect(container).not.toBeNull();
    });

    it('should submit form when user click submit button and form is valid', async () => {
        const user = userEvent.setup();
        render(<SignUpForm/>, {
            wrapper: FormProviderWrapper,
        });
        const firstNameInput = screen.getByLabelText('First Name');
        const lastNameInput = screen.getByLabelText('Last Name');
        const emailInput = screen.getByLabelText('Email');
        const passwordInput = screen.getByLabelText('Password');
        const confirmPasswordInput = screen.getByLabelText('Confirm Password');
        const btn = screen.getByText('Submit Now');
        fireEvent.change(firstNameInput, {target: {value: 'John'}});
        fireEvent.change(lastNameInput, {target: {value: 'Doe'}});
        fireEvent.change(emailInput, {target: {value: 'johndoe@gmail.com'}});
        // to select country for test
        const optionSelect = screen.getByRole('combobox', {
            name: 'Country',
        });
        await user.click(optionSelect);
        const option2 = screen.getByRole('option', {name: 'Nigeria'});
        expect(option2).toBeInTheDocument();
        await user.click(option2);
        // end of country selection
        fireEvent.change(passwordInput, {target: {value: 'password'}});
        fireEvent.change(confirmPasswordInput, {target: {value: 'password'}});
        fireEvent.submit(btn);
        await waitFor(() => {
            expect(mutateSignup).toHaveBeenCalledWith(
                {
                    first_name: 'John',
                    last_name: 'Doe',
                    email: 'johndoe@gmail.com',
                    country: 'NGN',
                    password: 'password',
                },
                {
                    onSuccess: expect.any(Function),
                    onError: expect.any(Function),
                },
            );
        });
    });
});
