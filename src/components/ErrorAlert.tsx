import React from "react";

interface ErrorAlertProps {
  message: string;
}

const ErrorAlert: React.FC<ErrorAlertProps> = ({ message }) => {
  if (!message) return null;

  return (
    <div
      className="absolute top-0 left-1/2 transform -translate-x-1/2 mt-4 w-11/12 md:w-1/2 bg-red-500 text-white p-4 rounded shadow-lg">
      <div><span className="font-medium">Alert!</span> {message}</div>
    </div>
  );
};

export default ErrorAlert;
