import React, { useState, useContext, useEffect } from "react";
import Container from "react-bootstrap/esm/Container";
import CommentModal from "./components/CommentModal";
import LandingPage from "./components/LandingPage";
import api from "./helpers/api";
import { IModalSetProp } from "./helpers/types";
import { AppStateContext } from "./hook/AppContext";
import { setSessionObject } from "./hook/sessionStore";

const AppContent: React.FC = ({}) => {
  // useContext
  const context = useContext(AppStateContext);

  // state for modal
  const [isShowModal, setShowModal] = React.useState<boolean>(false);
  const [modalTitle, setModalTitle] = React.useState<string>("");
  const [modalBody, setModalBody] = React.useState();

  // Initial calls to load post data and comment data
  const initialLoad = async () => {
    const postList = await api.getPosts();
    const commentList = await api.getComments();
    context.dispatch({
      posts: postList,
      comments: commentList,
    });
    setSessionObject("posts", postList);
    setSessionObject("comments", commentList);
  };

  useEffect(() => {
    initialLoad();
  }, []);

  const modalSetProp: IModalSetProp = {
    setShowModal: setShowModal,
    setModalTitle: setModalTitle,
    setModalBody: setModalBody,
  };

  return (
    <>
      <Container>
        <LandingPage modalSetProp={modalSetProp} />
      </Container>
      <CommentModal
        isShowModal={isShowModal}
        handleClose={() => setShowModal(false)}
        modalTitle={modalTitle}
        modalBody={modalBody}
      ></CommentModal>
    </>
  );
};
export default AppContent;
