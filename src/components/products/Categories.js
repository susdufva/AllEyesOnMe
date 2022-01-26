import React from "react";

function Cat({categoriesName}) {
  return (
    <>
      <div className="flex justify-center items-center mt-4">
        <div className="w-full px-12">
          <p className='text-white text-xs text-left'>
            {categoriesName}
          </p>
        </div>
      </div>
    </>
  );
}

export default Cat;

