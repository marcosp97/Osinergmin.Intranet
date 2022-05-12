export class ExceptionDA extends Error {
    constructor(message: string) {
        super(message);
        this.name = "ExceptionDA";
        (<any>Object).setPrototypeOf(this, new.target.prototype);
    }
}