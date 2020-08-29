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

export class Hero{
    constructor(private fname:string, private lname:string){}
    
    fullname(){
        return this.fname+" "+this.lname;
    }
}