interface IFileCategory {
   category: string,
   type: string,
   extensions: string[],
};

interface IFileConfig {
   [category: string]: IFileCategory;
}

export const fileExtensionConfig: IFileConfig = {
   // application/pdf
   "text-doc": {
      category: "Text Document",
      type: "text",
      extensions: ["doc", "pdf", "txt"],
   },
   "image": {
      category: "Image",
      type: "image",
      extensions: ["jpg", "png", "bmp", "mpeg"],
   },
   "audio": {
      category: "Audio",
      type: "audio",
      extensions: ["wav", "mp3"],
   },
   "video": {
      category: "Video",
      type: "video",
      extensions: ["mp4", "webm", "h264", "avi"],
   }
};
