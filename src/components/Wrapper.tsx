import React from "react";

interface Props {
  children: React.ReactNode;
}

const Wrapper: React.FC = ({ children }: Props) => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Posts</h1>
      <div className="space-y-4">
        {children}
      </div>
    </div>
  );
};

export default Wrapper;
