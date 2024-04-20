console.log("typescript is here");

// class User {

//   public email: string;
//   private name: string;
//   readonly city: string = "london";

//   constructor(email: string, name: string) {
//     this.email = email;
//     this.name = name;
//   }
// }

// alt. way to code the above commented class - User

// public, private are access modifiers

class User {
  protected _courseCount = 1;

  readonly city: string = "london";
  constructor(public email: string, public name: string) {}

  private deleteToken() {
    console.log("token deleted");
  }

  get getAppleEmail(): string {
    return `apple${this.email}`;
  }

  get courseCount(): number {
    return this._courseCount;
  }

  // set doesn't have a return type annotation

  set courseCount(courseNum) {
    if (courseNum <= 1) {
      throw new Error("Course count should be more than 1");
    }
  }
}

// `SubUser` doesn't include the private variables or functions; to access those `protected` access modifier can be used
class SubUser extends User {
  isFamily: boolean = true;
  changeCourseCount() {
    this._courseCount = 4;
  }
}
const alice = new User("a@abc.co", "alice a.");

console.log(alice);

// alice.deleteToken() → won't work as this is out of the class and this fn is set to `private`
