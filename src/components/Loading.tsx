const Loading = ({ loading }: { loading: boolean }) => {
  if (!loading) {
    return null;
  }

  return (
    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 mt-4">
      <div
        className="px-3 py-1 text-xs font-medium leading-none text-center text-blue-800 bg-blue-200 rounded-full animate-pulse dark:bg-blue-900 dark:text-blue-200">loading...
      </div>
    </div>
  );
};

export default Loading;
