import React from "react";
import { render, screen } from "@testing-library/react";

import WorkflowsCreateDialogComponent from "../WorkflowsCreateDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders workflows create dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <WorkflowsCreateDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("workflows-create-dialog-component")).toBeInTheDocument();
});
