import React from "react";
import { render, screen } from "@testing-library/react";

import FrontendAppsEditDialogComponent from "../FrontendAppsEditDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders frontendApps edit dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <FrontendAppsEditDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("frontendApps-edit-dialog-component")).toBeInTheDocument();
});
