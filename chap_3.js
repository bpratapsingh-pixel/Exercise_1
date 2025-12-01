console.log("This is Chapter 1");

await fun();

console.log("This is Chapter 3");

function fun(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("This is chapter 2");
            resolve();
        },500);
    });
}
