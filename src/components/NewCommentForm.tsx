import React, { useContext, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { getNextCommentId } from "../helpers/helpers";
import { CommentType, IModalSetProp } from "../helpers/types";
import { AppStateContext } from "../hook/AppContext";
type Props = {
  postId: number;
  modalSetProp: IModalSetProp;
};
export const NewCommentForm: React.FC<Props> = ({ postId, modalSetProp }) => {
  const [name, setName] = React.useState<string>("");
  const [email, setEmail] = React.useState<string>("");
  const [commentBody, setCommentBody] = React.useState<string>("");
  const [isBtmDisabled, setBtmDisabled] = React.useState<boolean>(true);

  // Retrieve posts from context
  const context = useContext(AppStateContext);
  const { comments } = context.initAppState;

  const handleSaveComment = () => {
    // Normally this should not be done this way but handled in the backend and DB
    const newCommentId = getNextCommentId(comments);
    const newCommentObj: CommentType = {
      postId: String(postId),
      id: newCommentId,
      name: name,
      email: email,
      body: commentBody,
    };
    context.dispatch({
      comments: [...comments, newCommentObj],
    });
    modalSetProp.setShowModal(false);
  };

  useEffect(() => {
    if (!!name && !!email && !!commentBody) {
      setBtmDisabled(false);
    } else {
      setBtmDisabled(true);
    }
  }, [name, email, commentBody]);

  return (
    <Form>
      <Form.Group>
        <Form.Label>Name</Form.Label>
        <Form.Control
          placeholder="please enter your name"
          onChange={(e) => setName(e.target.value)}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Email address</Form.Label>
        <Form.Control
          placeholder="please enter your email address"
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Comment:</Form.Label>
        <Form.Control
          as="textarea"
          rows={5}
          placeholder="please enter your comment"
          onChange={(e) => setCommentBody(e.target.value)}
        />
      </Form.Group>
      <br />
      <Button
        variant="primary"
        disabled={isBtmDisabled}
        onClick={handleSaveComment}
      >
        Submit
      </Button>
    </Form>
  );
};
export default NewCommentForm;
