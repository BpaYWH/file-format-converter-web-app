import React from 'react';

type TDropZoneProps = {
   category?: string;
   extension?: string;
   validFileList: File[];
   setValidFileList: React.Dispatch<React.SetStateAction<File[]>>;
};

function DropZone(props: TDropZoneProps) {
   const [dragActive, setDragActive] = React.useState(false);

   const validateFile = (files: FileList) => {
      const newFileList = [...props.validFileList];
      for (const file of files) {
         if (file.type.split('/')[0] !== props.category) {
            console.log(file.name, 'is not a', props.category, 'file');
         } else {
            newFileList.push(file);
         }
      }
      props.setValidFileList(newFileList);
   };

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
         validateFile(e.dataTransfer.files);
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
