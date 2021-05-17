import React from "react";
import { IModalSetProp } from "../helpers/types";
import PostTable from "./PostTable";

type Props = {
  modalSetProp: IModalSetProp;
};

export const LandingPage: React.FC<Props> = ({ modalSetProp }) => {
  // state for comment modal
  return (
    <React.Fragment>
      <div>
        <h2>Posts:</h2>
      </div>
      <PostTable modalSetProp={modalSetProp} />
    </React.Fragment>
  );
};

export default LandingPage;
