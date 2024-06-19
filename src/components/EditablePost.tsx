import React, { useEffect, useRef } from "react";
import { Post } from "@/types";
import { usePostContext } from "@/hooks/usePostContext";

interface Props {
  post: Post;
  onExitEditMode: () => void;
}

const EditablePost: React.FC<Props> = ({ post, onExitEditMode }) => {
  const { updatePost } = usePostContext();
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (inputRef.current && !inputRef.current.contains(event.target as Node) && inputRef.current.value !== post.title) {
      updatePost(post.id, inputRef.current.value);
    }
    onExitEditMode();
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.value = post.title;
      inputRef.current.focus();
    }
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <input
      type="text"
      ref={inputRef}
      className="border p-2 rounded w-full"
    />
  );
};

export default EditablePost;
