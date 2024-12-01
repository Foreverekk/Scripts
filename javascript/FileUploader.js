/**
 * Script Name: FileUploader
 * Description: A utility to handle file uploads with support for progress tracking and aborting requests.
 * Author: Foreverekk
 */

//
export class FileUploader {
    /**
     * Uploads a file to the specified URL with support for progress tracking and aborting requests.
     *
     * @param {File} file - The file to be uploaded.
     * @param {string} url - The URL to upload the file to.
     * @param {number => void} [onProgress] - An optional callback to report the upload progress.
     * @returns {Promise<string>} A promise that resolves with the server response if the upload is successful, or rejects with an error if the upload fails.
     */
    upload(file, url, onProgress) {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open('POST', url);

            /**
             * Reports the upload progress to the onProgress callback.
             * @param {ProgressEvent} event - The event containing information about the upload progress.
             * @listens xhr.upload#progress
             */
            xhr.upload.onprogress = (event) => {
                if (onProgress) {
                    onProgress((event.loaded / event.total) * 100);
                }
            };

            /**
             * Handles the upload request completion.
             *
             * @param {Event} event - The event containing information about the upload result.
             * @listens xhr#load
             */
            xhr.onload = () => {
                if (xhr.status === 200) resolve(xhr.response);
                else reject(new Error(`Upload failed: ${xhr.statusText}`));
            };

            xhr.onerror = () => reject(new Error('Network error'));
            xhr.onabort = () => reject(new Error('Upload aborted'));

            const formData = new FormData();
            formData.append('file', file);
            xhr.send(formData);
        });
    }
}

// Example Usage:
const uploader = new FileUploader();
uploader
    .upload(file, '/upload', (progress) => console.log(`Progress: ${progress}%`))
    .then(() => console.log('Upload complete'))
    .catch(console.error);
