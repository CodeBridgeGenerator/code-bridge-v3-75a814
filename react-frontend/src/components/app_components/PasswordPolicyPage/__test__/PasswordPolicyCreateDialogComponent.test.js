import React from "react";
import { render, screen } from "@testing-library/react";

import PasswordPolicyCreateDialogComponent from "../PasswordPolicyCreateDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders passwordPolicy create dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <PasswordPolicyCreateDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("passwordPolicy-create-dialog-component")).toBeInTheDocument();
});
