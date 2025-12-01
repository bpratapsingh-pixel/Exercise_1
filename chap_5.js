console.log("This is Chapter 5");
await new Promise((resolve) => setTimeout(resolve, 300));  
for(let i=1;i<=3;i++){
    console.log(`This is Chapter 5 - Step ${i}`);
}