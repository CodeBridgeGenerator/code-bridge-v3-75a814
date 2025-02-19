import React from "react";
import { render, screen } from "@testing-library/react";

import LoginTimeEditDialogComponent from "../LoginTimeEditDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders loginTime edit dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <LoginTimeEditDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("loginTime-edit-dialog-component")).toBeInTheDocument();
});
