function addHeadCount(count:any){
    return function(targetClass:any){
        return class{
            name = new targetClass().name;
            headcount = count.hc;
        }
    }
};
@addHeadCount({
    hc : 6000
})
class Company{
    name = "Infrasoft";
};

var comp = new Company();
console.log(comp.name, comp.headcount);