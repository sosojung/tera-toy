import { createContext } from 'react';

export const PostContext = createContext<{
  posts: {id: number; title: string; content: string; userId: string}[];
  setPosts: React.Dispatch<
    React.SetStateAction<{ id: number; title: string; content: string; userId: string}[]>
  >;
} | null>(null);