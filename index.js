let obj = {
    age: 20,
    name: 'Alex'
}
console.log(obj);

let a = 'name';

console.log(obj.name);
console.log(obj[a]);

obj.isMarried = false; 

console.log(obj);
// let key = prompt()

// if (obj[key]) {
//     alert('key already exist')
// } else {
//     let value = prompt()
//     obj[key] = value
// }
let arr = [1,2,3]
arr.forEach(item => {
    console.log(item.lenght);
});
let name = prompt()
arr.push(name) // add to end
arr.shift() // remove from start
arr.unshift(name) // add to start
arr.pop() // remove from end

let b = {
    names: [],
    user: {
        name: 'Alex'
    }
}
b.names.push('HELLO WORLD')
console.log(b.user[name]);

let newArr = [4,3,12,17]
let odd = []
let even = []
newArr.forEach(element => {
    if(element % 2 == 0) {
        even.push(element)
        console.log(element);
    }
    else {
        odd.push(element)
    }
});
console.log(newArr);
console.log(even);
console.log(odd);