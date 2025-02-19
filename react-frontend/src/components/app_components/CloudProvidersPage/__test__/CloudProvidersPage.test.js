import React from "react";
import { render, screen } from "@testing-library/react";

import CloudProvidersPage from "../CloudProvidersPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders cloudProviders page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <CloudProvidersPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("cloudProviders-datatable")).toBeInTheDocument();
    expect(screen.getByRole("cloudProviders-add-button")).toBeInTheDocument();
});
