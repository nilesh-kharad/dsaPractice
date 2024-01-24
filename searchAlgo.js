// //Linear search
// let linearSearch = (arr, e) => {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === e) {
//             return i
//         }
//     }
//     return -1
// }

// linearSearch([1, 2, 3, 4, 5, 6], 5) //4



//2)
//Binary search
// Only works on sorted array
// const binarySearch = (arr, e) => {
//     console.time()
//     let li = 0
//     let ri = arr.length - 1
//     while (li <= ri) {
//         let mi = Math.floor((li + ri) / 2)
//         if (arr[mi] === e) {
//             console.timeEnd()
//             return mi
//         }
//         if (e < arr[mi]) {
//             ri = mi - 1
//         } else {
//             li = mi + 1
//         }
//     }
//     return -1
// }
// console.log('binarySearch([1, 2, 3, 4, 5, 6], 5)', binarySearch([1, 2, 3, 4, 5, 6], 3)); //2
// console.log('binarySearch([1, 2, 3, 4, 5, 6], 5)', binarySearch([1, 2, 3, 4, 5, 6], 6)); //5
// console.log('binarySearch([1, 2, 3, 4, 5, 6], 5)', binarySearch([1, 2, 3, 4, 5, 6], 1)); //0



//Recursive Binary search

// const binarySearch = (arr, e) => {
//     return search(arr, e, 0, arr.length)
// }

// const search = (arr, e, start, end) => {
//     if (start > end) {
//         return -1
//     }
//     let mid = Math.floor((start + end) / 2)
//     console.log('start,end', start, mid, end);
//     if (arr[mid] === e) {
//         console.log('mid', mid);
//         return mid
//     } else if (e < arr[mid]) {
//         return search(arr, e, start, mid - 1)
//     } else {
//        return search(arr, e, mid + 1, end)
//     }
// }
// console.log('binarySearch([1, 2, 3, 4, 5, 6], 5)', binarySearch([1, 2, 3, 4, 5, 6], 8)); //2
//time complexity O(log n)

