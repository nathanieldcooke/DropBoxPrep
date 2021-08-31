const buildInOrderArr = (root, arr = [], move = "L") => {
    if (root.left) buildInOrderArr(root.left, arr, "L");
    arr.push([root.val, move]);
    if (root.right) buildInOrderArr(root.right, arr, "R");
    return arr;
};

// const buildInOrderArr = (root, arr = [], move = "L") => {
//     if (root.left) buildInOrderArr(root.left, arr, "L");
//     arr.push([root.val, move]);
//     if (root.right) buildInOrderArr(root.right, arr, "R");
//     return arr;
// };

const isMirrored = (arr) => {
    let i = 0;
    let j = arr.length - 1;

    if (arr.length % 2 === 0) return false;

    while (i < j) {
        if (arr[i][0] !== arr[j][0] || arr[i][1] === arr[j][1]) return false;

        i++;
        j--;
    };

    return true;
}

const isSymmetric = (root) => {
    if (!root) return true;

    const arrOfTree = buildInOrderArr(root);
    console.log("AOT: ", arrOfTree)
    return isMirrored(arrOfTree);
};

console.log('hellooooo')