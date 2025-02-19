import React from "react";
import { render, screen } from "@testing-library/react";

import ThemePage from "../ThemePage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders theme page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <ThemePage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("theme-datatable")).toBeInTheDocument();
    expect(screen.getByRole("theme-add-button")).toBeInTheDocument();
});
