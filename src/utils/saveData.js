export const saveData = (data, fileName, contentType = 'text/plain') => {
    const file = new Blob([data], {type: contentType});
    const url = URL.createObjectURL(file);

    let link = document.createElement("a");
    link.download = fileName;
    link.href = url;
    link.click();
}