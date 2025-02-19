import React from "react";
import { render, screen } from "@testing-library/react";

import CloudProvidersCreateDialogComponent from "../CloudProvidersCreateDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders cloudProviders create dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <CloudProvidersCreateDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("cloudProviders-create-dialog-component")).toBeInTheDocument();
});
