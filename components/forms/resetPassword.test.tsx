import {render} from '@testing-library/react';
import ResetPasswordForm from "@/components/forms/resetPassword";

describe('<ResetPasswordForm />', () => {
    it('should render reset password component correctly without error', () => {
        const {container} = render(<ResetPasswordForm/>);
        expect(container).not.toBeNull();
    })
});
