import React from "react";
import { render, screen } from "@testing-library/react";

import IOtAppPage from "../IOtAppPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders iOtApp page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <IOtAppPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("iOtApp-datatable")).toBeInTheDocument();
    expect(screen.getByRole("iOtApp-add-button")).toBeInTheDocument();
});
