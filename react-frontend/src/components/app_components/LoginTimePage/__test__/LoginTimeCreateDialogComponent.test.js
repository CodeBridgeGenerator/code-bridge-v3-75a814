import React from "react";
import { render, screen } from "@testing-library/react";

import LoginTimeCreateDialogComponent from "../LoginTimeCreateDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders loginTime create dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <LoginTimeCreateDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("loginTime-create-dialog-component")).toBeInTheDocument();
});
