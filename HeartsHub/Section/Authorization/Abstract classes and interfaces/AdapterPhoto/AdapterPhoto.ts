import Target from "./Target";


class AdapterPhoto extends Target {

    constructor(linksToPhoto: string[]) {
        super(linksToPhoto)
    }
    public request(): string[] {
        const adaptedLinkPhotos:string[] = this.linksToPhoto.map((url: string) => {
            const urlParts = url.split('/');
            const lastPart = urlParts[urlParts.length - 1];
            const folderId = lastPart.slice(0, lastPart.length - 1);
            const newUrl = `ph:/id/${folderId}`;
            return newUrl;
        })
        return adaptedLinkPhotos
    }
}
export default AdapterPhoto