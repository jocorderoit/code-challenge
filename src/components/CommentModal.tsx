import React from "react";
import { Modal } from "react-bootstrap";

type Props = {
  isShowModal: boolean;
  handleClose: any;
  modalTitle: string;
  modalBody: any;
};

export const CommentModal: React.FC<Props> = ({
  isShowModal,
  handleClose,
  modalTitle,
  modalBody,
}) => {
  return (
    <Modal
      data-testid="test-modal"
      show={isShowModal}
      onHide={handleClose}
      size="lg"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>{modalTitle}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{modalBody}</Modal.Body>
    </Modal>
  );
};

export default CommentModal;
