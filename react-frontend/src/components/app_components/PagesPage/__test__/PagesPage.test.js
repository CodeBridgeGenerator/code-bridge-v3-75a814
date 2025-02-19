import React from "react";
import { render, screen } from "@testing-library/react";

import PagesPage from "../PagesPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders pages page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <PagesPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("pages-datatable")).toBeInTheDocument();
    expect(screen.getByRole("pages-add-button")).toBeInTheDocument();
});
