import React from "react";
import { render, screen } from "@testing-library/react";

import GenAiAppEditDialogComponent from "../GenAiAppEditDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders genAiApp edit dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <GenAiAppEditDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("genAiApp-edit-dialog-component")).toBeInTheDocument();
});
