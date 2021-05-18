import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, cleanup } from "@testing-library/react";
import PostTable from "../../components/PostTable";
import { mockModalSet, mockContextData } from "./../mock";
import userEvent from "@testing-library/user-event";
import { TestWrapper } from "./../testHelpers";

afterEach(cleanup);

describe("PostTable", () => {
  it("renders PostTable component without crashing", async () => {
    const postTable = (
      <TestWrapper>
        <PostTable modalSetProp={mockModalSet} />
      </TestWrapper>
    );

    const { findAllByText, findByTestId } = render(postTable);

    await findAllByText(/view/);
    // Checking table headers are all displayed
    expect(await findByTestId("test-post-table")).toBeDefined();
  });

  it("renders PostTable component and genrate rows", async () => {
    const postTable = (
      <TestWrapper>
        <PostTable modalSetProp={mockModalSet} />
      </TestWrapper>
    );

    const { findByText, findAllByRole } = render(postTable);

    // One of the title
    expect(await findByText("eum et est occaecati")).toBeDefined();

    // find total 6 buttons (view and add comment)
    expect((await findAllByRole("button")).length).toBe(
      mockContextData.posts.length * 2
    );
  });

  it("renders PostTable component and check view button is clickable", async () => {
    const postTable = (
      <TestWrapper>
        <PostTable modalSetProp={mockModalSet} />
      </TestWrapper>
    );

    const { findAllByRole, findByTestId, findByText } = render(postTable);

    // find view comment buttons
    const btns = await findAllByRole("button", { name: "view" });

    // click the first one
    userEvent.click(btns[0]);

    // setting for modal should be trigger
    expect(mockModalSet.setModalBody).toBeCalled();
    expect(mockModalSet.setModalTitle).toBeCalledWith("Comments");
    expect(mockModalSet.setShowModal).toBeCalledWith(true);
  });

  it("renders PostTable component and check add button is clickable", async () => {
    const postTable = (
      <TestWrapper>
        <PostTable modalSetProp={mockModalSet} />
      </TestWrapper>
    );

    const { findAllByRole, findByTestId, findByText } = render(postTable);

    // find view comment buttons
    const btns = await findAllByRole("button", { name: "add" });

    // click the first one
    await userEvent.click(btns[0]);

    // setting for modal should be trigger
    expect(mockModalSet.setModalBody).toBeCalled();
    expect(mockModalSet.setModalTitle).toBeCalledWith("Add New Comment");
    expect(mockModalSet.setShowModal).toBeCalledWith(true);
  });
});
