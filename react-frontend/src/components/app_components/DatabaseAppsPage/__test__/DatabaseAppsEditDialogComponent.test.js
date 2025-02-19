import React from "react";
import { render, screen } from "@testing-library/react";

import DatabaseAppsEditDialogComponent from "../DatabaseAppsEditDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders databaseApps edit dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <DatabaseAppsEditDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("databaseApps-edit-dialog-component")).toBeInTheDocument();
});
