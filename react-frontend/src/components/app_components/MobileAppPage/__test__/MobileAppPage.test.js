import React from "react";
import { render, screen } from "@testing-library/react";

import MobileAppPage from "../MobileAppPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders mobileApp page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <MobileAppPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("mobileApp-datatable")).toBeInTheDocument();
    expect(screen.getByRole("mobileApp-add-button")).toBeInTheDocument();
});
