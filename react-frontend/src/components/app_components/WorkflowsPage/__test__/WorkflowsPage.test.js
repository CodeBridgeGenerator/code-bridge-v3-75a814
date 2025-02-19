import React from "react";
import { render, screen } from "@testing-library/react";

import WorkflowsPage from "../WorkflowsPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders workflows page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <WorkflowsPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("workflows-datatable")).toBeInTheDocument();
    expect(screen.getByRole("workflows-add-button")).toBeInTheDocument();
});
