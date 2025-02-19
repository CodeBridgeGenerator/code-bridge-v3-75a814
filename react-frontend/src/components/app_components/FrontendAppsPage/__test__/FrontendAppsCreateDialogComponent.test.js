import React from "react";
import { render, screen } from "@testing-library/react";

import FrontendAppsCreateDialogComponent from "../FrontendAppsCreateDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders frontendApps create dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <FrontendAppsCreateDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("frontendApps-create-dialog-component")).toBeInTheDocument();
});
