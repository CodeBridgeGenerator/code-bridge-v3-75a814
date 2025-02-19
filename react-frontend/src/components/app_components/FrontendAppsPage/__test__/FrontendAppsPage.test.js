import React from "react";
import { render, screen } from "@testing-library/react";

import FrontendAppsPage from "../FrontendAppsPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders frontendApps page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <FrontendAppsPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("frontendApps-datatable")).toBeInTheDocument();
    expect(screen.getByRole("frontendApps-add-button")).toBeInTheDocument();
});
