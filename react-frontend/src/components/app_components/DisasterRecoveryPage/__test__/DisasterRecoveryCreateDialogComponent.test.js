import React from "react";
import { render, screen } from "@testing-library/react";

import DisasterRecoveryCreateDialogComponent from "../DisasterRecoveryCreateDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders disasterRecovery create dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <DisasterRecoveryCreateDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("disasterRecovery-create-dialog-component")).toBeInTheDocument();
});
