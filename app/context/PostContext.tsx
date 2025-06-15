import { createContext } from 'react';
import { Post } from '@/app/types/Post';

export const PostContext = createContext<{
  posts: Post[];
  addPost: (post: Post) => void;
  updatePost: (post: Post) => void;
  removePost: (post: Post) => void;
}>({
  posts: [],
  addPost: () => {},
  updatePost: () => {},
  removePost: () => {},
})