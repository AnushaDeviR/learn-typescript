// const tUser: (string | number)[] = [1, 'abc']

let tUser: [string, number, boolean]
// error occurs due to the mismatch of type that were declared
// tUser = [true, 123, "fg"]

tUser = ["12", 122, true]

// issue with tuple in TS, allows over-writing of the type values

type UserTwo = [number, string] 

const newUserTwo: UserTwo = [112, "test"]
newUserTwo[1] = "test1" // this shouldn't be happening since the type initially assigned was [number, string]

export {}
