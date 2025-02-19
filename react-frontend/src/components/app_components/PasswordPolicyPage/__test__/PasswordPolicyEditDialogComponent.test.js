import React from "react";
import { render, screen } from "@testing-library/react";

import PasswordPolicyEditDialogComponent from "../PasswordPolicyEditDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders passwordPolicy edit dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <PasswordPolicyEditDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("passwordPolicy-edit-dialog-component")).toBeInTheDocument();
});
