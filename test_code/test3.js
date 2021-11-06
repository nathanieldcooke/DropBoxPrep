/*
[
    {
        start: 1
        end: 3
    },
    {
        start: 10
        end: 12
    },
    {
        start: 11
        end: 13
    },
    {
        start: 1
        end: 4
    },
]

[
    {
        start: 1
        end: 3
    },
    {
        start: 1
        end: 4
    },
    {
        start: 10
        end: 12
    },
    {
        start: 11
        end: 13
    },


numbers.sort(function(a, b) {
  return a - b;
});
]

appointmentsArr.sort((appObj1, appObj2) => {
    retrun appObj1.start - appObj2.start
})





10 11 12: e
>
11: s 12 13




findAndFuseOverlaps: will take an array of appointment times as an argument 
    loop: iterate over each appointment object in array
        currApp: arr[i] the current appointment we're on

        loop: iterate over reminaing postion to be check, starting point will be prior loops idx + 1
            otherAppToCheck: arr[j]

            checkIfOverlap: helper fucntion to check if appointment overlalp and return boolean value



*/