import React from "react";
import { PostItem } from "@/components";
import { Post } from "@/types";
import { usePostContext } from "@/hooks/usePostContext";

const PostList: React.FC = () => {
    const { posts, editingPostId, setEditingPostId } = usePostContext();

    if (!posts.length) return null;

    return posts.map((post: Post) => {
      const isEditing = editingPostId === post.id;
      return (
        <PostItem key={post.id} post={post} isEditing={isEditing} setEditingPostId={setEditingPostId} />
      );
    });
  }
;

export default PostList;
