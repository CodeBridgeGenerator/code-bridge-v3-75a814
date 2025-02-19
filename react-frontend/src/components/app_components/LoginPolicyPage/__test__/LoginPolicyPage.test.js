import React from "react";
import { render, screen } from "@testing-library/react";

import LoginPolicyPage from "../LoginPolicyPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders loginPolicy page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <LoginPolicyPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("loginPolicy-datatable")).toBeInTheDocument();
    expect(screen.getByRole("loginPolicy-add-button")).toBeInTheDocument();
});
