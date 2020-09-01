function addPower(config:any){
    return function(targetClass:any){
        return class {
            title  =  new targetClass().title;
            power = config.power;
            city = config.city;
        }
    }
};
@addPower({
    power : 6,
    city : "New York"
})
class CommonMan{
    title = "Antman"
};
let avenger = new CommonMan();
console.log(avenger);