import React, { createContext, useState, ReactNode } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { ErrorAlert, Loading } from "@/components";
import { GET_POSTS } from "@/graphql/queries";
import { UPDATE_POST } from "@/graphql/mutations";
import { Post } from "@/types";
import useErrorHandling from "@/hooks/useErrorHandling";

interface PostContextType {
  posts: Post[];
  editingPostId: number | null;
  setEditingPostId: React.Dispatch<React.SetStateAction<number | null>>;
  updatePost: (id: number, title: string) => void;
}

const PostContext = createContext<PostContextType | undefined>(undefined);

export const PostProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [editingPostId, setEditingPostId] = useState<number | null>(null);

  const { loading, error: listError, data } = useQuery(GET_POSTS, {
    fetchPolicy: "cache-and-network",
    notifyOnNetworkStatusChange: true
  });

  const posts = data?.posts.data || [];

  const [updatePostMutation, { loading: postLoading, error: postError }] = useMutation(UPDATE_POST);

  const { error } = useErrorHandling({ listError, postError });

  const updatePost = async (id: number, title: string) => {
    try {
      await updatePostMutation({ variables: { id, input: { title } } });
    } catch (err) {
      console.error("Failed to update post", err);
    }
  };

  return (
    <PostContext.Provider
      value={{ posts, editingPostId, setEditingPostId, updatePost, postError }}>
      <Loading loading={loading || postLoading} />
      <ErrorAlert message={error} />
      {children}
    </PostContext.Provider>
  );
};


export default PostContext;