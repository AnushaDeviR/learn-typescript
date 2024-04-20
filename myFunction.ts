function addTwo(num: number): number{ 
    return num + 2
}


function getUpper(val: string){ 
    return val.toUpperCase()
}

function signUpUser(name: string, email: string, isPaid: boolean){

}

let loginUser = (name: string, email: string, isPaid: boolean = false) => {

}

addTwo(5)
getUpper("hello")
loginUser("d", "d@gmail.com", )

// function getValue(myVal: number): boolean{
//     if(myVal > 5) { 
//         return true
//     }
//     return "200 OK"
// }

const getHello = (s: string): string => { 
    return "hello"
}

const heros = ["h", "a", 3]

heros.map(hero => {
    return `hero is ${hero}`
})

function consoleError(errmsg: string): void{ 
    console.log(errmsg);
}

function handleError(msg: string): never { 
    throw new Error(msg)
}

export {}