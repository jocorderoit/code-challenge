import { mergeWith } from "lodash";
import { customizer } from "./AppContext";

export const setSessionObject = (key: string, value: any, original?: any) => {
  sessionStorage.setItem(
    key,
    JSON.stringify(
      original ? { ...mergeWith({}, original, value, customizer) } : value
    )
  );
};

export const getSessionObject = (key: string) => {
  return JSON.parse(sessionStorage.getItem(key) || "{}");
};

export const initializeContextFromSessionStorage = () => {
  return {
    posts: getSessionObject("posts"),
    comments: getSessionObject("comments"),
  };
};

export const resetSessionStorage = () => {
  setSessionObject("posts", []);
  setSessionObject("comments", []);
};
