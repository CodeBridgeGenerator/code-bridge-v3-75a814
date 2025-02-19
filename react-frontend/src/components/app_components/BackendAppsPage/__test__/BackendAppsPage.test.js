import React from "react";
import { render, screen } from "@testing-library/react";

import BackendAppsPage from "../BackendAppsPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders backendApps page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <BackendAppsPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("backendApps-datatable")).toBeInTheDocument();
    expect(screen.getByRole("backendApps-add-button")).toBeInTheDocument();
});
