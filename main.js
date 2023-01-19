let person = {
    name:'yuri', age:13, hobby:'piano', school:'mashabim', type:'kafot',
}
let keys =Object.keys(person);
console.log(keys);

let values = Object.values(person);
console.log(values);

let entries = Object.entries(person);
console.log(entries);

for (let key in person){
    console.log(`${key}:${person[key]}`);
}




//ex2
//1
let person2 = {
    name:'yuri', age:13, hobby:'piano'
}   

// let person2ArrayKey = ((object) =>Object.keys(object));
// console.log(person2ArrayKey(person2));
// //2
// let personKeysUpper = (object) => {
// let newObject ={};
// for (let [key, value] of object){

// }


//3
let objectValueArray = (object) =>Object.values(object);
console.log(objectValueArray(person));

//4
const objectK = {location:'south', cars:13, houses:50, peoples:260};

const doubleArray = (object) => {
    let newObject = {};
    for( let [key, value] of Object.entries(object)){
        console.log([key, value]);
        console.log(Object.entries(object)); 
        if (typeof value === "number"){
            newObject[key]=value*2;
        }
    }
    return newObject;
}
console.log(doubleArray(objectK));

//5
const   originalObj = {
        name: "John",
        age: 30,
        city: "New York",
    };
   
    let oppositeObject = (object) =>{
    let newObject = {};
    for(let [key,value] of Object.entries(object)){
        newObject[value]=key;
    }
    return newObject;
}
   console.log(oppositeObject(originalObj));

   //6
   const objectSum = (object) => {
    let sum = 0;
    for( let value of Object.values(object)){
        if (typeof value==="number"){
            sum+=value;
            console.log(sum);
        }
    }
    return sum;
   }
   console.log(objectSum(objectK));


   //7
   const objectAverage = (object) => {
    let sum = 0;
    let properties = 0;
    let average = 0;
    for( let value of Object.values(object)){
        if (typeof value==="number"){
            sum+=value;
            properties+=1
            console.log(sum,properties);
        }
    }
    average=sum/properties
    return average;
   }
   console.log(objectAverage(objectK));

   //8 --------------------------------------------------------
    const alphabeticalArray = (object) => {
        let newObject = {};
        let newArray = [];
        for (let [key,value] of Object.entries(object)){
            newArray[key] = value;
            console.log(newArray);
        }
        newArray.sort();
        console.log(newArray);
        newObject = Object.assign({}, [newArray]);
        return newObject;
    }

   console.log(alphabeticalArray(person)); 

   //9
   const people = { 
    person1: { name: "John", age: 25 },
    person2: { name: "Mike", age: 32 },
    person3: { name: "Sara", age: 28 },
   };
   
   const checkIfPersonExist = (object, name) => {
    for(let value of Object.values(object)){
        for(let value1 of Object.values(object.value)){
            array.forEach(element => {
                
            });
            console.log();
            //    
            
            
            
            
                console.log(value);
        
                // array.forEach(element   
                // });
            }
       
       
       
        console.log(value);

        // array.forEach(element   
        // });
    }
    
   }
   
   console.log(checkIfPersonExist(people, "Mike"));
   //Output: true
   



















// let objectToKeyArray=((item) => {Object.keys(item)})
// console.log(objectToKeyArray(person2));

// function objectToArray(object){
// let answer = Object.keys(object);
// console.log(answer);
// return answer
// }
// objectToArray(person2);

let objectToArray=((object) => {
    let answer =Object.keys(object)
return answer
})
objectToArray(person2);



// const keys = (obj) => {
//     var obj1 = {a: 1, b: 2, c: 3};
//     var newArray = [];
    
//     for(var key in obj1) {
//       newArray.push(key);
//       return newArray;
//     }
    
//     };
    
//     keys();