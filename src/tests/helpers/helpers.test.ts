import { getNextCommentId } from "../../helpers/helpers";
import { cleanup } from "@testing-library/react";
import { mockContextData } from "../mock";

afterEach(cleanup);

describe("getNextCommentId", () => {
  it("getNextCommentId", async () => {
    // the last one in mock data has id 20, so it should return 21
    expect(getNextCommentId(mockContextData.comments)).toBe(21);
  });
});
