const User = { 
    name: "a", 
    email: "a@abc.com",
    isActive: true
}

function createUser({name: string, isActive: boolean}){ 

}

createUser({name: "a", isActive: true})

// an obj returning an obj
function createCourse(): {name: string, isActive: boolean} { 
    return {name: "react", isActive: false}
}

// Type aliases 

// readonly -> doesn't allow changes
type User = { 
    readonly _id: string; 
    name: string; 
    email: string; 
    isActive: boolean; 
    creditCardDetails?: number
}

// function createUserTwo(user: User): User{ 
//     return {name: "", email: "", isActive: true}
// }

let myUser: User = {
    _id: "1234", 
    name: "h",
    email: "h@h.com",
    isActive: false
    
}

myUser.email = "h@gmail.com"


type cardNumber = {
    cardNumber: string
}

type cardDate = { 
    cardDate: string
}

type cardDetails = cardNumber & cardDate & { 
    cvv: number
}

export {}
