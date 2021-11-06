const isWord = (str) => {
    // return boolean 
    // if input str is word
        //true
    // else
        //false
} 

const getTrees = (arr2d) => {
    // return a tree where each node has it's neighbors as children 

    // have a nested loop of i and j, to hit each element in the 2d array
    //      [0][1] 
    //      grab all valid neighbor nodes
    //      make neighor nodes children of current root
    //      
}


/* 
    [
        [t, e]
        [o, w]
    ]
*/

/*

                         t
                e        w       o
             w o        e o      w e
*/


// 
/*


*/

const grabSubStrsInTree = (tree) => {
    // grab every str combination in tree
    // return array of the subStrs 
}


const validWords = (lettersArr2d) => {
    // let trees: call get trees and save retrun value of all tress
    // allSunStrCombos = tress.reduce: 
    //  default argument as array
    //  on each tree in reduce, call grabSubStrsInTree
    //  spread the returned arr of sub string into accumalator

    // words = allSubStrCombos.filter: this will filter out non-words by calling
    // isWord on each str passed in 
    // return words
}