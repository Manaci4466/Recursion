const iterativeFib = (num) => {
    var arr = [];
    if(num <= 2){
        arr.push(0,1,1);
        if(num === 1) arr.push(0,1);
        if(num === 0) arr.push(0,);
        if(num < 0) return;
    }
    else{
    arr.push(0,1,1);
        for(let i = 2; i < num; i++){
            let fib = arr[i] + arr[i - 1];
            console.log(arr[i],arr[i - 1])
            arr.push(fib);
        }
    }
    return arr;
}

const fib = (n) => {
    if(n===1)return [0,1];
    else{var s = fib(n - 1);
    s.push(s[s.length - 1] + s[s.length - 2]);
    return s}
}
 
console.log(iterativeFib(8)); 
console.log(fib(8));





















