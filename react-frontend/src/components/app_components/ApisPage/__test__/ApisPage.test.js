import React from "react";
import { render, screen } from "@testing-library/react";

import ApisPage from "../ApisPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders apis page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <ApisPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("apis-datatable")).toBeInTheDocument();
    expect(screen.getByRole("apis-add-button")).toBeInTheDocument();
});
