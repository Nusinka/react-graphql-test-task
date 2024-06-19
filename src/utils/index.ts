export const debounceSave = (fn: () => void, delay = 300) => {
  let timeout: NodeJS.Timeout;

  return () => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      fn();
    }, delay);
  };
};
