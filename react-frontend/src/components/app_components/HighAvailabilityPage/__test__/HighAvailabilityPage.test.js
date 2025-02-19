import React from "react";
import { render, screen } from "@testing-library/react";

import HighAvailabilityPage from "../HighAvailabilityPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders highAvailability page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <HighAvailabilityPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("highAvailability-datatable")).toBeInTheDocument();
    expect(screen.getByRole("highAvailability-add-button")).toBeInTheDocument();
});
