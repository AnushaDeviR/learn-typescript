// to restrict user's choices 

// const AISLE = 0 
// const MIDDLE = 1
// const WINDOW = 2
 
// enum defaults the choices from 0 
// use const along with enum to avoid many line of codes in JS

const enum SeatChoice { 
    AISLE = 'A', 
    MIDDLE = 'B', 
    WINDOW = 'C'
}

const airSeat = SeatChoice.AISLE
