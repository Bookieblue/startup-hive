import React from "react";
import {fireEvent, render, waitFor} from "@testing-library/react";
import {FormProviderWrapper} from "@/lib/core/testHelpers";
import LoginForm from '@/components/forms/login';

describe('<LoginForm />', () => {
    it('should render login component correctly without error', () => {
        const {container} = render(<FormProviderWrapper><LoginForm/></FormProviderWrapper>,);
        expect(container).not.toBeNull();
    });
}
);
