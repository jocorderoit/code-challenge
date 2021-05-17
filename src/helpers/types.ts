import { ReactComponentElement } from "react";

export type PostType = {
  body: string;
  id: number;
  title: string;
  userId: number;
};

export type CommentType = {
  postId: string;
  id: number;
  name: string;
  email: string;
  body: string;
};

export interface IModalSetProp {
  setShowModal: any;
  setModalTitle: any;
  setModalBody: any;
}

export interface AppContextType {
  posts: PostType[];
  comments: CommentType[];
}

export const InitialAppContext: AppContextType = {
  posts: [] as PostType[],
  comments: [] as CommentType[],
};
