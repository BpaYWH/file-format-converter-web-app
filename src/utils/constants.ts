interface IFileCategory {
   category: string;
   type: string;
   extensions: string[];
}

interface IFileConfig {
   [category: string]: IFileCategory;
}

export const fileExtensionConfig: IFileConfig = {
   image: {
      category: 'Image',
      type: 'image',
      extensions: ['jpeg', 'png', 'webp']
   },
   audio: {
      category: 'Audio',
      type: 'audio',
      extensions: ['wav', 'mp3', 'aac', 'ogg', 'flac', 'aiff']
   },
   video: {
      category: 'Video',
      type: 'video',
      extensions: ['mp4', 'MOV', 'wmv', 'flv', 'mkv', 'webm', 'avi']
   }
};
