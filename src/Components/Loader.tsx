import React from "react";

export const Loader = () => (
  <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
    <span className="loader"></span>
  </div>
);

export const ErrorMessage = ({ message }: { message: string }) => (
  <p className="text-center text-red-500">{message}</p>
);
