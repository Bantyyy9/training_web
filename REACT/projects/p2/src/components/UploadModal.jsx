import React, { useRef } from "react";
import { BsUpload } from "react-icons/bs";

const UploadModal = () => {
  const inputRef = useRef();

  const openFilePicker = () => {
    inputRef.current?.click();
  };

  const fileChange = (e) => {
    console.log(e.target.files[0]);
  };

  return (
    <div className="fixed inset-0 z-[999] bg-slate-950/40 backdrop-blur-sm flex items-center justify-center">
      <div className="bg-white p-5 gap-3 rounded-md w-[80%] max-w-[450px] flex ">
        <div className="flex flex-col items-center justify-center gap-3">
          <BsUpload className="text-4xl text-blue-600" />
          <p className="text-lg">Drag and Drop file or</p>
          <button
            onClick={openFilePicker}
            className="px-5 py-2 text-blue-200 bg-blue-600 rounded-lg"
          >
            Browse
          </button>
        </div>
        <div className="">File List</div>
      </div>
      <input
        ref={inputRef}
        onChange={fileChange}
        className="hidden"
        type="file"
        name=""
        id=""
      />
    </div>
  );
};

export default UploadModal;
