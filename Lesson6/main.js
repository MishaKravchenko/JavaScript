let  arr = [132,23,32,32,23,32,32,32,32,32,]

for (let i=0;i<arr.length; i++){
    debugger
    if(i % 2){
        console.log("ODD");
        continue;
    }
    console.log(i);
}
