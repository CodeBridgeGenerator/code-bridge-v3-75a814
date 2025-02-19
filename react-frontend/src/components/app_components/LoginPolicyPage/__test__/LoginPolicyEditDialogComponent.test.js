import React from "react";
import { render, screen } from "@testing-library/react";

import LoginPolicyEditDialogComponent from "../LoginPolicyEditDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders loginPolicy edit dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <LoginPolicyEditDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("loginPolicy-edit-dialog-component")).toBeInTheDocument();
});
