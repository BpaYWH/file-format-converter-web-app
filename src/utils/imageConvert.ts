const availType = new Set(['png', 'jpeg', 'jpg', 'bmp', 'tiff', 'gif']);

const downloadHandler = (url: string, filename: string) => {
   const a = document.createElement('a');
   a.href = url;
   a.download = filename;
   document.body.appendChild(a);
   a.click();
   document.body.removeChild(a);
};

const convertHandler = (
   imgUrl: string,
   filename: string,
   outputMIME: string
) => {
   const img = new Image();
   img.src = imgUrl;
   img.onload = () => {
      const c = document.createElement('canvas');
      const ctx = c.getContext('2d');

      c.width = img.width;
      c.height = img.height;
      ctx?.drawImage(img, 0, 0);
      const imgDataUrl = c.toDataURL(outputMIME);

      downloadHandler(imgDataUrl, filename);
   };
};

export const convertImg = async (files: File[], extOut: string) => {
   let extId: number, imgUrl: string;
   for (const file of files) {
      extId = file.name.lastIndexOf('.');
      if (extId === -1) return;
      if (!availType.has(file.name.substring(extId + 1))) return;

      imgUrl = URL.createObjectURL(file);

      await new Promise((res) => {
         setTimeout(() => {
            res(
               convertHandler(
                  imgUrl,
                  file.name.substring(0, extId + 1) + extOut,
                  'image/' + extOut
               )
            );
         }, 500);
      });

      URL.revokeObjectURL(imgUrl);
   }
};
