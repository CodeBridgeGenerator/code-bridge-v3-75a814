import React from "react";
import { render, screen } from "@testing-library/react";

import IOtAppCreateDialogComponent from "../IOtAppCreateDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders iOtApp create dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <IOtAppCreateDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("iOtApp-create-dialog-component")).toBeInTheDocument();
});
