import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, cleanup } from "@testing-library/react";
import CommentTable from "../../components/CommentTable";
import { TestWrapper } from "./../testHelpers";

afterEach(cleanup);

describe("CommentTable", () => {
  it("renders CommentTable component without crashing", async () => {
    const commentTable = (
      <TestWrapper>
        <CommentTable postId={1} />
      </TestWrapper>
    );

    const { findAllByText, findByTestId } = render(commentTable);

    // Checking table headers are all displayed
    expect(await findByTestId("test-comment-table")).toBeDefined();
  });

  it("renders CommentTable component with postId 1 and show comments correctly", async () => {
    const commentTable = (
      <TestWrapper>
        <CommentTable postId={1} />
      </TestWrapper>
    );

    const { findAllByRole, findByTestId, findByText } = render(commentTable);
    // Checking table is displayed
    expect(await findByTestId("test-comment-table")).toBeDefined();

    // Check first comment's email
    const commentEmail = await findByText(/Eliseo@gardner.biz/);
    expect(commentEmail).toBeDefined();
  });
});
