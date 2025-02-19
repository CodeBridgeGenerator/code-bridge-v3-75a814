import React from "react";
import { render, screen } from "@testing-library/react";

import IOtAppEditDialogComponent from "../IOtAppEditDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders iOtApp edit dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <IOtAppEditDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("iOtApp-edit-dialog-component")).toBeInTheDocument();
});
