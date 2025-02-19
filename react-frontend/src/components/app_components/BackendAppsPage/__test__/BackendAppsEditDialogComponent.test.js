import React from "react";
import { render, screen } from "@testing-library/react";

import BackendAppsEditDialogComponent from "../BackendAppsEditDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders backendApps edit dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <BackendAppsEditDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("backendApps-edit-dialog-component")).toBeInTheDocument();
});
