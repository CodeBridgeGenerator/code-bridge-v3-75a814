import React from "react";
import { render, screen } from "@testing-library/react";

import GenAiAppCreateDialogComponent from "../GenAiAppCreateDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders genAiApp create dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <GenAiAppCreateDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("genAiApp-create-dialog-component")).toBeInTheDocument();
});
