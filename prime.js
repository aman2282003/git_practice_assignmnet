let num=17
let count=0
for (let i=1;i<=num;i++){
    if (i%num===0){
        count+=1
    }
}
if(count===2){
    console.log("Prime number")
}
else{
    console.log("Not a prime number")
}

