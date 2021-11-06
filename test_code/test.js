/*
Write a function that takes a JS object as an argument.
This object contains values that are numbers, strings, and other objects.
Your function should return a new, flattened version of this object.
All nested key/values in the original object should be brought out to the top level.
*/


/*
fucntion that recieves the object to flatten as an argument (obj1)
    newObj = {}
    loop over the object key/val pairs
        if object 
            1. recursively call the function with value as argument 
            2. capture the return value in variable
            3. then add the return values objects key val pairs to newObj.
        else not object
            add the key/val to newObj
    return newObj
*/

// const flattenObj = (obj2d) => {
//     const newObj1d = {};

//     for (let key in obj2d) {
//         let val = obj2d[key];

//         if (typeof val === 'object'){
//             const flattenedObj = flattenObj(val);
//             Object.assign(newObj1d, flattenedObj);
//         } else {
//             newObj1d[key] = val;
//         }
//     }

//     return newObj1d;
// }

// in
// const newObj = {
//     2: "1",
//     3: { "b": 1 },
//     1: 2,
// }
// out
// const newObj = {
//     "a": 1,
//     "b": 1,
//     1: 2,
// }

// console.log(flattenObj(newObj))




// iterative flatten
/*
    define a fucntion that will accept a obj2D
        define arr to function as stack: 
            1. keeps loop going until empty
            2. should be initilized with obj2D
        define return object: which is going to be flattned

        while:
            conditinally will run until the stack is empty

                currObj // is equal to object popped off the stack

                have a for loop that iterates over the current object
                    if (currval is object)
                        add the object to the stack: pushing it on
                    else
                        add the non object key/val to the flattenedObj
        
        return flattenedObj

        

*/