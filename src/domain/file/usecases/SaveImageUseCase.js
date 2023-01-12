import Queue from 'nq';
import imageResize from "../../../imageResize";
import blobToDataUrl from "../../../blobToDataUrl";
import urlToImage from "../../../urlToImage";
import canvasToBlob from "../../../canvasToBlob";

class SaveImageUseCase {
    execute(file, maxWidth = 800, maxHeight = 800) {
        return Promise.resolve()
            .then(() => blobToDataUrl(file))
            .then(url => urlToImage(url))
            .then(image => imageResize(image, maxWidth, maxHeight))
            .then(canvas => canvasToBlob(canvas, file.name, file.type))
            .then((blob) => Queue.File.save(blob));
    }
}

export default SaveImageUseCase;
