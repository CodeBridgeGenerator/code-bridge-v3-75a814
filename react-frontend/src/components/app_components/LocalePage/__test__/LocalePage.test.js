import React from "react";
import { render, screen } from "@testing-library/react";

import LocalePage from "../LocalePage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders locale page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <LocalePage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("locale-datatable")).toBeInTheDocument();
    expect(screen.getByRole("locale-add-button")).toBeInTheDocument();
});
