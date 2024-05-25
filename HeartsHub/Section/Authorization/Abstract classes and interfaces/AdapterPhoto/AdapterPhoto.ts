import Target from "./Target";


class AdapterPhoto extends Target {

    constructor(linksToPhoto: string[]) {
        super(linksToPhoto)
    }
    public request(): string[] {
        const adaptedLinkPhotos:string[] = this.linksToPhoto.map((url: string) => {
            const urlParts = url.split('/');

            const folderId =urlParts.slice(0, urlParts.length-2);
            const result=folderId.join("/")
            const newUrl = `${result}`;
            return newUrl;
        })
        return adaptedLinkPhotos
    }
}
export default AdapterPhoto