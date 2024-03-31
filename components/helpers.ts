// Code from: https://www.freecodecamp.org/news/check-if-a-javascript-string-is-a-url/#:~:text=checkValidity()%20method%20is%20used,is%20not%20a%20proper%20URL.
export const isValidUrl = urlString => {
    var urlPattern = new RegExp('^(https?:\\/\\/)?' + // validate protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // validate domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // validate OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // validate port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // validate query string
        '(\\#[-a-z\\d_]*)?$', 'i'); // validate fragment locator
    return !!urlPattern.test(urlString);
}

const allowedExtensions = new Set(['.xd', '.xlsx', '.pdf', '.docx']);
export const sanitizeValue = (fileName) => {
    const safeFilename = fileName.replace(/(\.\.\/|\/|\.\.\\|\\)/g, '').trim();
    const extension = safeFilename.includes('.') ? safeFilename.substring(safeFilename.lastIndexOf('.')) : '';

    if (!allowedExtensions.has(extension.toLowerCase())) {
        console.error(`Invalid file extension: ${extension}`);
        return undefined;
    }

    return safeFilename;
};