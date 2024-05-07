import "text-encoding";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { VillaDetails } from "./VillaDetails";

describe("VillaDetails Component", () => {
  test("renders dateFrom if the date WAS selected", () => {
    render(<VillaDetails />);

    const dateFromInput = screen.getByLabelText("From:");
    userEvent.type(dateFromInput, "2024-04-02");

    expect(dateFromInput).toHaveValue("2024-04-02");
  });
});
