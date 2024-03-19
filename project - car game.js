const input = require('readline-sync')
console.log("give istruction 'start' or 'stop'");
for (;;){
    let a = input.question("ignition : ");
if (a === "stop"){
    console.log("your car is already stoped");
}else {
    console.log("your car is started");
    for (;;){
        let b = input.question("vroom vroom  ");
        if (b === "stop"){
            console.log("your car is stoped");
            break;
        }else {
            console.log("your car is already started");
            
        }
    }
}
}