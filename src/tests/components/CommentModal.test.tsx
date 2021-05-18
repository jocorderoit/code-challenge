import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, cleanup } from "@testing-library/react";
import CommentModal from "../../components/CommentModal";

afterEach(cleanup);

describe("CommentModal", () => {
  it("renders CommentModal component without crashing", async () => {
    const commentModal = <CommentModal {...commentModalProp} />;

    const { findByText, findByTestId } = render(commentModal);

    // Checking table headers are all displayed
    expect(await findByTestId("test-modal")).toBeDefined();

    // Chekcing table title
    expect(await findByText(commentModalProp.modalTitle)).toBeDefined();
  });
});

const commentModalProp = {
  isShowModal: true,
  handleClose: jest.fn(),
  modalTitle: "Mock Modal Title",
  modalBody: <div>Mdoal Mock Body </div>,
};
