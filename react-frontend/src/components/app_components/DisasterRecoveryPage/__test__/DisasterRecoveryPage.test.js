import React from "react";
import { render, screen } from "@testing-library/react";

import DisasterRecoveryPage from "../DisasterRecoveryPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders disasterRecovery page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <DisasterRecoveryPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("disasterRecovery-datatable")).toBeInTheDocument();
    expect(screen.getByRole("disasterRecovery-add-button")).toBeInTheDocument();
});
