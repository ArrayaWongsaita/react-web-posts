// src/apis/posts-api.js

import axiosInstance from '../config/axiosConfig';

const userId = 25; // your number

export const getPosts = async () => {
  const data = await axiosInstance.get(`/posts/${userId}`);
  return data.data.posts;
};

export const createPost = async (data) => {
  await axiosInstance.post(`/posts/${userId}`, data);
};

export const deletePostApi = async (postId) => {
  await axiosInstance.delete(`/posts/${userId}/${postId}`);
};
