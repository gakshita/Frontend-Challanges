let a = [12, 13, 1, 10, 34, 1];
console.log([...new Set(a.sort().reverse())]);
const largest3 = (arr) => {
    let first = -1;
    let second = -1;
    let third = -1;

    for (let val of a) {
        if (val > first) {
            third = second;
            second = first;
            first = val;
            continue;
        }
        if (val > second) {
            third = second;
            second = val;
            continue;
        }
        if (val > third) {
            third = val;
        }
    }

    return [first, second, third];
};

// console.log(largest3(a));

const users = [
    { fname: "akshita", lname: "goyal", age: 24 },
    { fname: "anchita", lname: "goyal", age: 24 },
    { fname: "aditi", lname: "goyal", age: 24 },
    { fname: "arnav", lname: "goyal", age: 20 }
];

const n = users.reduce((acc, curr) => {
    if (acc[curr.age]) {
        acc[curr.age] += 1;
    } else {
        acc = { ...acc, [curr.age]: 1 };
    }
    return acc;
}, {});
console.log(n);
