export class Hero{
    constructor(fn, ln){
        this.firstname = fn;
        this.lastname = ln;
    }

    fullname(){
        return this.firstname+" "+this.lastname;
    }
};