import React from "react";
import { render, screen } from "@testing-library/react";

import GitRepositoriesPage from "../GitRepositoriesPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders gitRepositories page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <GitRepositoriesPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("gitRepositories-datatable")).toBeInTheDocument();
    expect(screen.getByRole("gitRepositories-add-button")).toBeInTheDocument();
});
