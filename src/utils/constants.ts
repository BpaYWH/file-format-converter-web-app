interface IFileCategory {
   category: string,
   extensions: string[],
};

interface IFileConfig {
   [category: string]: IFileCategory;
}

export const fileExtensionConfig: IFileConfig = {
   "text-doc": {
      category: "Text Document",
      extensions: ["doc", "pdf", "txt"],
   },
   "image": {
      category: "Image",
      extensions: ["jpg", "png", "bmp"],
   },
   "audio": {
      category: "Audio",
      extensions: ["wav", "mp3"],
   },
   "video": {
      category: "Video",
      extensions: ["mp4", "webm", "h264", "avi"],
   }
};
