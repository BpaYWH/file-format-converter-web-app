import React from 'react';

function DropZone() {
  const [dragActive, setDragActive] = React.useState(false);
  const inputRef = React.useRef<HTMLInputElement>(null);
  
  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
      console.log("dragging enter");
    } else if (e.type === "dragleave") {
      setDragActive(false);
      console.log("dragging leave");
    }
  };
  
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      // handleFiles(e.dataTransfer.files);
      console.log("files dropped!!")
    }
  };
  
  const handleChange = (e: React.ChangeEvent) => {
    e.preventDefault();
    if ((e.target as HTMLInputElement).files && (e.target as HTMLInputElement).files?.length) {
      // handleFiles(e.target.files);
      console.log("uploading file!")
    }
  };
  
  return (
    <form id="form-file-upload" onDragEnter={handleDrag} onDragLeave={handleDrag} onSubmit={(e) => e.preventDefault()}>
        <input hidden ref={inputRef} type="file" multiple={true} onChange={handleChange} />
        {/* <label htmlFor="input-file-upload"> */}
            {
                !dragActive ? 
                    <p>Drag your file here</p>
                :
                    <p>Drop to upload your file</p>
            }
        {/* </label> */}
        {/* { dragActive && <div id="drag-file-element" onDragEnter={handleDrag} onDragLeave={handleDrag} onDragOver={handleDrag} onDrop={handleDrop}></div> } */}
    </form>
  );
}

export default DropZone;