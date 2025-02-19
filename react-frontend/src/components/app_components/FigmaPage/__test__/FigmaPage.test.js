import React from "react";
import { render, screen } from "@testing-library/react";

import FigmaPage from "../FigmaPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders figma page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <FigmaPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("figma-datatable")).toBeInTheDocument();
    expect(screen.getByRole("figma-add-button")).toBeInTheDocument();
});
