import React from "react";
import { render, screen } from "@testing-library/react";

import GitRepositoriesEditDialogComponent from "../GitRepositoriesEditDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders gitRepositories edit dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <GitRepositoriesEditDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("gitRepositories-edit-dialog-component")).toBeInTheDocument();
});
