import React from "react";
import { render, screen } from "@testing-library/react";

import HighAvailabilityCreateDialogComponent from "../HighAvailabilityCreateDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders highAvailability create dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <HighAvailabilityCreateDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("highAvailability-create-dialog-component")).toBeInTheDocument();
});
