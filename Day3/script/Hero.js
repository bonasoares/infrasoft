/*
class Hero{
    private fname:string;
    private lname:string;
    constructor(fn:string, ln:string){
        this.fname = fn;
        this.lname = ln;
    }
    fullname(){
        return this.fname+" "+this.lname;
    }
}
*/
var Hero = /** @class */ (function () {
    function Hero(fname, lname) {
        this.fname = fname;
        this.lname = lname;
    }
    Hero.prototype.fullname = function () {
        return this.fname + " " + this.lname;
    };
    return Hero;
}());
export { Hero };
