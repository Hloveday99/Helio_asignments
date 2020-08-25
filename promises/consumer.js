// this consumes a promise
// "" or'' both do the same thing
let {isEven} = require("./promise")


let prom1 = isEven(8)

// if the promise resolves then use the "then" function
// of the promise to get the value
// then calls a function, that you define, that accepts
// a single parameter. The value of the prmise is 
// passed into that parameter
prom1
.then((value) => {
    console.log(value)
})

let prom2  = isEven(45)

prom2
.then((value) => {
    // then gets the value from the resolve function call
    console.log(value)
})
.catch((err) => {
    // catch gets the value from the reject function call
    console.log(err)
})

// async and await
//  await keybowrd must be used in an async function
async function wait() {

    let answer = await isEven(42)

    console.log(answer)

    return answer
}

async function waitError() {
try {
    let answer = await isEven(47)
    console.log(answer)
}
    catch(err) {
        console.log(err)
    }
}

wait()
waitError()
// calling async function

// third built in function
// finally
isEven(16)
.then(resValue => {
    console.log(resValue)
})
.catch(err => {
    console.log(err)
})
.finally(() => {
    // this function is called if the promise is resolved or rejected.
    // it is called last.
    console.log("cleanup")
})