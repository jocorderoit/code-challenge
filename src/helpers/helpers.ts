import { CommentType } from "./types";

export const getNextCommentId = (comments: CommentType[]) => {
  let latestCommentId = 0;
  comments.forEach((comment: CommentType) => {
    latestCommentId = Math.max(latestCommentId, Number(comment.id));
  });
  return latestCommentId + 1;
};
