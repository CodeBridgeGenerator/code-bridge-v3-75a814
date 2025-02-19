import React from "react";
import { render, screen } from "@testing-library/react";

import LoginTimePage from "../LoginTimePage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders loginTime page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <LoginTimePage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("loginTime-datatable")).toBeInTheDocument();
    expect(screen.getByRole("loginTime-add-button")).toBeInTheDocument();
});
