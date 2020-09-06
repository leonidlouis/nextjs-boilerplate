import React from "react";
import { render, screen } from "@testing-library/react";
import DataCard from "../../components/data_card";
import constant from "../../constant";

describe("sanitary check", () => {
  it("[DATACARD] renders without crashing", () => {
    const component = render(<DataCard />);
    expect(component).toBeTruthy();
  });

  it("[DATACARD] renders passed error", () => {
    render(<DataCard error={constant.API_ERROR.UNEXPECTED} />);
    screen.getByText(constant.API_ERROR.UNEXPECTED);
  });
});
