import React from "react";
import { render, screen } from "@testing-library/react";

import GenAiAppPage from "../GenAiAppPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders genAiApp page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <GenAiAppPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("genAiApp-datatable")).toBeInTheDocument();
    expect(screen.getByRole("genAiApp-add-button")).toBeInTheDocument();
});
