import React from 'react';

type TDropZoneProps = {
   category?: string;
   extension?: string;
   validFileList: File[];
   setValidFileList: React.Dispatch<React.SetStateAction<File[]>>;
   validateFile: (files: FileList) => void;
};

// TODO: Test case for DropZone
function DropZone(props: TDropZoneProps) {
   const [dragActive, setDragActive] = React.useState(false);

   const handleDrag = (e: React.DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      if (e.type === 'dragover' && !dragActive) {
         setDragActive(true);
      } else if (e.type === 'dragleave') {
         setDragActive(false);
      }
   };

   const handleDrop = (e: React.DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setDragActive(false);
      if (e.dataTransfer.files && e.dataTransfer.files[0]) {
         props.validateFile(e.dataTransfer.files);
      }
   };

   return (
      <div onDragLeave={handleDrag} onDragOver={handleDrag} onDrop={handleDrop}>
         {!dragActive ? (
            <p>or Drag your {props.category} file(s) here</p>
         ) : (
            <p>Drop to upload</p>
         )}
      </div>
   );
}

export default DropZone;
