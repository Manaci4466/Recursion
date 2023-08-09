// The black man of the sort called mergeSort has been crying aloud for a long time because his brothers
// bubble sort, insertion sort, selction sort have been bullying until he started crying and it has been a bad time
// for him. he can't take it anymore.

/***********MERGE SORT**********/
const merge = (left,right) => {
    const result = [];
    let i = 0;
    let j = 0;

    while(i < left.length && j < right.length){
        const min = left[i] < right[j] ? left[i++] : right[j++];
        result.push(min);
    }

    for(;i < left.length ; i++){
        result.push(left[i]);
    }
    for(;j < right.length; j++){
        result.push(right[j]);
    }

    return result;
}

const mergeSort = (arr) => {
    if(arr.length === 1 )return arr;
    var left = mergeSort(arr.slice(0,Math.round(arr.length / 2)));
    var right = mergeSort(arr.slice(Math.round(arr.length / 2)));
    return merge(left,right)

    
}

console.log(mergeSort([5,3,2,4,8,1,-10,-11]));