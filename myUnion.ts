// when we are not sure what data comes in 
// keep it very strict 

let score: number | string = 33

// custom data type: 

type User = { 
    name: string; 
    id: number
}

type Admin = { 
    userName: string; 
    id: number
}

let alice: User | Admin = { 
    name: 'alice',
    id: 123
}

alice = {userName: "ab", id: 123}


getDBId(3)
getDBId("3")

function getDBId(id: number | string) { 
    // making some API calls 
    // console.log(`DB id is: ${id}`)
    if (typeof id == "string"){ 
        id.toLowerCase()
    }
}

const dataArr: (string | number | boolean)[] = ["1", 2, true]

// literal strict type assignment 
let pi:3.14 = 3.14

export {} 
