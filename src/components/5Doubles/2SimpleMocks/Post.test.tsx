import { Post } from "./Post";
import { render, screen, within, act } from "@testing-library/react";
import * as DataService from "./DataService";

vi.mock("./DataService", () => ({
  getCommentsForPost: () => {
    console.log("Calling getCommentsForPost mock");
    return [
      {
        content: "Cool1",
      },
      {
        content: "Cool2",
      },
    ];
  },
}));

describe("Post test with mocks", () => {
  it("Should load initial comments", async () => {
    const getCommentsForPostSpy = vi.spyOn(DataService, "getCommentsForPost");
    getCommentsForPostSpy.mockResolvedValueOnce([
      {
        content: "Cool1",
      },
      {
        content: "Cool2",
      },
    ]);

    await act(async () => {
      render(<Post content="Hello" id="123" user="Alex" />);
    });
    const commentsContainer = screen.getByTestId("post-comment-container");
    const comments = within(commentsContainer).getAllByRole("paragraph");
    expect(comments.length).toBe(2);
    expect(comments[0]).toHaveTextContent("Cool1");
    expect(comments[1]).toHaveTextContent("Cool2");

    expect(getCommentsForPostSpy).toHaveBeenCalledTimes(1);
    expect(getCommentsForPostSpy).toHaveBeenCalledWith("123");
  });
});

// act
