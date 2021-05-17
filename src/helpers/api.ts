import axios, { AxiosResponse } from "axios";
import { isArray } from "lodash";

export const axiosCall = axios.create();

const apiBaseUrl = "https://jsonplaceholder.typicode.com";
export default {
  // Retrieve posts
  getPosts: async () => {
    let postList = [];
    try {
      const response: AxiosResponse = await axiosCall.get(
        `${apiBaseUrl}/posts`
      );
      postList = response.data ?? [];
    } catch (err) {
      console.error(`Error fetching posts: ${err}`);
    }
    return postList;
  },
  // Retrieve comments
  getComments: async () => {
    let commentList = [];
    try {
      const response: AxiosResponse = await axiosCall.get(
        `${apiBaseUrl}/comments`
      );
      commentList = response.data ?? [];
    } catch (err) {
      console.error(`Error fetching posts: ${err}`);
    }
    return commentList;
  },
};
