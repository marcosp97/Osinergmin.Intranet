export class ExceptionBL extends Error {
    constructor(message) {
        super(message);
        this.name = "ExceptionBL";
        (<any>Object).setPrototypeOf(this, new.target.prototype);
    }
}