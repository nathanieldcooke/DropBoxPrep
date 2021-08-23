const isPalindrom = (str) => {

    let i = 0;
    let j = str.length - 1;

    while (i < j || i === j) {
        if (str[i] !== str[j]) return false;
        i++;
        j--;
    };

    return true;

};

const longestPalindrome = (str) => {
    let currLongestPal = '';

    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j <= str.length; j++) {
            let currStr = str.slice(i, j);
            if (isPalindrom(currStr) &&
                currStr.length > currLongestPal.length
            ) {
                currLongestPal = currStr;
            }
        };
    };

    return currLongestPal;

};