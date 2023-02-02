const availType = new Set(['png', 'jpeg', 'jpg', 'bmp', 'tiff']);

export const loadImage = async (file: File, extIn: string) => {
    if (!availType.has(extIn)) return;
    const imgBuffer = await file.arrayBuffer();
    const blob = new Blob([imgBuffer]);
                            
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "filename.jpg";
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
}

export const convert = () => {
    return ;
}