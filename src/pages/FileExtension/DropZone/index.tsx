import React from 'react';

type TDropZoneProps = {
  category?: string,
  extension?: string,
  validFileList: File[],
  setValidFileList: Function
};

function DropZone(props: TDropZoneProps) {
  const [dragActive, setDragActive] = React.useState(false);

  const validateFile = (files: FileList) => {
    let newFileList = [...props.validFileList];
    for (let file of files) {
      if (file.type !== props.category + '/' + props.extension) {
        console.log(file.name, "is not a", props.extension, 'file');
      } else {
        newFileList.push(file);
      }
    }
    props.setValidFileList(newFileList);
  }

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragover" && !dragActive) {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      validateFile(e.dataTransfer.files);
    }
  };

  return (
    <>
      <div onDragLeave={handleDrag} onDragOver={handleDrag} onDrop={handleDrop}>
        {
          !dragActive ?
            <p>Drag your {props.extension} file(s) here</p>
            :
            <p>Drop to upload file(s)</p>
        }
      </div>
    </>
  );
}

export default DropZone;