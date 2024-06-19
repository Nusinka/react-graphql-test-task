import React, { memo, useEffect } from "react";
import { Post } from "@/types";
import { EditablePost } from "@/components";

interface Props {
  post: Post;
  isEditing?: boolean;
  setEditingPostId: React.Dispatch<React.SetStateAction<number | null>>;
}

const PostItem: React.FC<Props> = ({ post, isEditing, setEditingPostId }) => {
  const [postTitle, setPostTitle] = React.useState(post.title);

  const handleEditClick = () => {
    if (!isEditing) {
      setEditingPostId(post.id);
    }
  };

  useEffect(() => {
    if (postTitle !== post.title) {
      setPostTitle(post.title);
    }
  }, [post.title]);

  const handleExitEditMode = () => {
    setEditingPostId(null);
  };

  return (
    <div className="border p-4 rounded shadow-sm">
      {isEditing ? (
        <EditablePost post={post} onExitEditMode={handleExitEditMode} />
      ) : (
        <p onClick={handleEditClick} className="cursor-pointer text-blue-500">
          {postTitle}
        </p>
      )}
    </div>
  );
};

const PostItemMemo = memo(PostItem);
export default PostItemMemo;

