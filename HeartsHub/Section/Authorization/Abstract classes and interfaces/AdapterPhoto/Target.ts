

class Target {
    protected linksToPhoto:string[]
    constructor(linksToPhoto:string[]){
        this.linksToPhoto=linksToPhoto
    }
    public request():string[] {
        return this.linksToPhoto;
    }
}
export default Target