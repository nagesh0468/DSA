console.log("pattern concepats");

console.log("solid rectangle");
let n=4;
for(let i = 0; i <n ; i++) {
   for(let j = 0; j <n; j++){
    process.stdout.write(" * ");
   }
   console.log("\n");
}

console.log("hollow rectangle");

for(let i = 0; i <n; i++){
    for(let j = 0; j <n; j++){
       if(i == 0 || i == n-1 || j == 0 || j == n-1){
        process.stdout.write(" * ");
       }else{
        process.stdout.write("   ");
       }
    }
    console.log("\n");
}

console.log("left half pyramid");

for(let i=0; i<n; i++){
    for(let j=0; j<=i; j++){
        process.stdout.write(" * ");
    }
    console.log("\n");
}

console.log("right half pyramid");

for(let i=0; i<n; i++){
    for(let j=n-1; j>=i; j--){
        process.stdout.write("   ");
    }
    for(let k=0; k<=i; k++){
        process.stdout.write(" * ");
    }
    console.log("\n");
}