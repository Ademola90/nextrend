import React from "react";

const Spinner = () => {
  return (
    <div className="m-12 mx-auto w-16 h-16 aspect-w-1 aspect-h-1 rounded-full animate-spin">
      <div className="w-full h-full bg-gradient-to-tr from-transparent via-brand-600 to-transparent rounded-full mask-radial-gradient(farthest-side, #0000 calc(100% - 1px), #000 0)"></div>
    </div>
  );
};

export default Spinner;
