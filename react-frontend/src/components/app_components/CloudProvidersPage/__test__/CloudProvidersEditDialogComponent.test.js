import React from "react";
import { render, screen } from "@testing-library/react";

import CloudProvidersEditDialogComponent from "../CloudProvidersEditDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders cloudProviders edit dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <CloudProvidersEditDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("cloudProviders-edit-dialog-component")).toBeInTheDocument();
});
