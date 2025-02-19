import React from "react";
import { render, screen } from "@testing-library/react";

import LoginBlockedEditDialogComponent from "../LoginBlockedEditDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders loginBlocked edit dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <LoginBlockedEditDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("loginBlocked-edit-dialog-component")).toBeInTheDocument();
});
