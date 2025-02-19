import React from "react";
import { render, screen } from "@testing-library/react";

import SharingPage from "../SharingPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders sharing page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <SharingPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("sharing-datatable")).toBeInTheDocument();
    expect(screen.getByRole("sharing-add-button")).toBeInTheDocument();
});
