import { createFFmpeg, fetchFile } from '@ffmpeg/ffmpeg';

const availType = new Set(['mp4', 'MOV', 'wmv', 'flvl', 'mkv', 'webm', 'avi']);

const ffmpeg = createFFmpeg({
    log: true
});

export const convertVideo = async (videoFiles: File[], extOut: string) => {
    let data, dataUrl, outputName;
    let extId;
    if (!ffmpeg.isLoaded()) await ffmpeg.load();
    
    for (const file of videoFiles) {
         
        extId = file.name.lastIndexOf('.');
        if (extId === -1) return;
        if (!availType.has(file.name.substring(extId + 1))) return;
        outputName = file.name.substring(0, extId + 1) + extOut,

        ffmpeg.FS('writeFile', `temp.${extOut}`, await fetchFile(file));
        await ffmpeg.run('-i', `temp.${extOut}`, outputName);


        data = ffmpeg.FS('readFile', outputName);
        dataUrl = URL.createObjectURL(new Blob([data.buffer], { type: `video/${extOut}`}));
        downloadHandler(dataUrl, outputName);
        URL.revokeObjectURL(dataUrl);
    }
};

const downloadHandler = (url: string, filename: string) => {
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
};