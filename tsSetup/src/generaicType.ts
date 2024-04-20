const score: Array<number> = [];
const names: Array<string> = [];

// type of val = boolean or number
function identityOne(val: boolean | number): boolean | number {
  return val;
}

// type of val = any
function identityTwo(val: any): any {
  return val;
}

// returns val as Type (it accepts number, string, boolean but unlike 'any' the input type locks the output type)

function identityThree<Type>(val: Type): Type {
  return val;
}

identityThree(3);

// alt code for defining generic types

function identityFour<T>(val: T): T {
  return val;
}

interface Bootle {
  brand: string;
  type: number;
}

identityFour<Bootle>({ brand: "tupperware", type: 2 });

// input = array of products, output should be based on the input array as well
function getSearchProducts<T>(products: T[]): T {
  const myIndex = 3;
  return products[myIndex];
}

// generic arrow method
const getMoreSearchProducts = <T>(products: T[]): T => {
  const myIndex = 4;
  return products[myIndex];
};

// generic classes
