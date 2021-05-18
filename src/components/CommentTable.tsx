import React, { useContext, useEffect } from "react";
import Table from "react-bootstrap/esm/Table";
import { CommentType } from "../helpers/types";
import { AppStateContext } from "../hook/AppContext";

type Props = {
  postId: number;
};
export const CommentTable: React.FC<Props> = ({ postId }) => {
  // Retrieve comments from context
  const context = useContext(AppStateContext);
  const { comments } = context.initAppState;
  const [filteredComments, setFilteredComments] = React.useState<CommentType[]>(
    []
  );

  useEffect(() => {
    const filter = comments.filter((comment) => {
      return Number(comment.postId) === postId;
    });
    setFilteredComments(filter);
  }, []);

  // Generate each row by iterating posts
  const generateRows = () => {
    return filteredComments.map((comment, i) => {
      return (
        <tr key={`comment-row-${i}`}>
          <td>{comment.id}</td>
          <td>{comment.name}</td>
          <td>{comment.email}</td>
          <td>{comment.body}</td>
        </tr>
      );
    });
  };

  return (
    <Table data-testid="test-comment-table" striped bordered hover>
      {/* Define Table Header */}
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Email</th>
          <th>Comment</th>
        </tr>
      </thead>
      {/* Iterate through posts to generate rows */}
      <tbody>{generateRows()}</tbody>
    </Table>
  );
};

export default CommentTable;
