// posts-api.js

import axiosInstance from '../config/axiosConfig';

const userId = 25; // your number

export const getPosts = async () => {
  const data = await axiosInstance.get(`/posts/${userId}`);
};
