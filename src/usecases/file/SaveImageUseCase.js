import Queue from 'nq';

const width = 800;
const height = 800;

class SaveImageUseCase {
    execute(file, options = {}) {
        return Promise.resolve()
            .then(() => Queue.blobToDataUrl(file))
            .then(url => Queue.urlToImage(url))
            .then(image => Queue.imageResize(image, options.maxWidth || width, options.maxHeight || height))
            .then(canvas => Queue.canvasToBlob(canvas, file.name, file.type))
            .then((blob) => new Queue.File().save(blob, options));
    }
}

export default SaveImageUseCase;
