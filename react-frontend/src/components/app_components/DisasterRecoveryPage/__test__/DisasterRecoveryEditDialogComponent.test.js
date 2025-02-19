import React from "react";
import { render, screen } from "@testing-library/react";

import DisasterRecoveryEditDialogComponent from "../DisasterRecoveryEditDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders disasterRecovery edit dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <DisasterRecoveryEditDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("disasterRecovery-edit-dialog-component")).toBeInTheDocument();
});
