import { useEffect, useState } from "react";
import { ERROR_MSG_TIME } from "@/constants";

interface Props {
  listError: Error;
  postError: Error;
}

const useErrorHandling = ({ listError, postError }: Props) => {
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (listError) {
      setError('Error getting posts');
    }
  }, [listError]);

  useEffect(() => {
    if (postError) {
      setError('Error updating post');
    }
  }, [postError]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setError(null);
    }, ERROR_MSG_TIME);
    return () => clearTimeout(timer);
  }, [error]);

  return {
    error
  };
};

export default useErrorHandling;
