import React from "react";
import { render, screen } from "@testing-library/react";

import LoginBlockedCreateDialogComponent from "../LoginBlockedCreateDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders loginBlocked create dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <LoginBlockedCreateDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("loginBlocked-create-dialog-component")).toBeInTheDocument();
});
