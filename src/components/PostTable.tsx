import React, { useContext } from "react";
import { AppStateContext } from "./../hook/AppContext";
import Table from "react-bootstrap/Table";
import { Button } from "react-bootstrap";
import CommentTable from "./CommentTable";
import NewCommentForm from "./NewCommentForm";
import { isArray } from "lodash";
import { IModalSetProp } from "../helpers/types";

type Props = {
  modalSetProp: IModalSetProp;
};
export const PostTable: React.FC<Props> = ({ modalSetProp }) => {
  // Retrieve posts from context
  const context = useContext(AppStateContext);
  const { posts } = context.initAppState;

  // Handle when user click "view"
  const handleViewComment = (postId: number) => {
    modalSetProp.setModalBody(<CommentTable postId={postId ?? -1} />);
    modalSetProp.setShowModal(true);
    modalSetProp.setModalTitle("Comments");
  };

  // Handle when user click "add"
  // Set up postId and set "show" to true for comment modal
  const handleAddComment = (postId: number) => {
    modalSetProp.setModalBody(
      <NewCommentForm postId={postId ?? -1} modalSetProp={modalSetProp} />
    );
    modalSetProp.setShowModal(true);
    modalSetProp.setModalTitle("Add New Comment");
  };

  // Generate each row by iterating posts
  const generateRows = () => {
    return isArray(posts)
      ? posts.map((post, i) => {
          return (
            <tr key={`post-row-${i}`}>
              <td>{post.id}</td>
              <td>{post.title}</td>
              <td>{post.userId}</td>
              <td>{post.body}</td>
              <td>
                <Button
                  variant="link"
                  onClick={() => handleViewComment(post.id)}
                  name="viewComment"
                >
                  view
                </Button>
              </td>
              <td>
                <Button
                  variant="link"
                  onClick={() => handleAddComment(post.id)}
                  name="addComment"
                >
                  add
                </Button>
              </td>
            </tr>
          );
        })
      : "No Posts Found";
  };

  return (
    <Table data-testid="test-post-table" striped bordered hover>
      {/* Define Table Header */}
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>User ID</th>
          <th>Post Body</th>
          <th>Comment</th>
          <th>Add Comment</th>
        </tr>
      </thead>
      {/* Iterate through posts to generate rows */}
      <tbody>{generateRows()}</tbody>
    </Table>
  );
};

export default PostTable;
