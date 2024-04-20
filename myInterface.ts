// interfaces are more like scenarios/ classes

interface User {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId?: string;
  // startTrail: () => string
  startTrail(): string;
  getCoupon(couponName: string, value: number): number;
}

interface User { 
    githubToken: string
}

interface Admin extends User { 
    role: "admin" | "ta" | "learner"
}

const bob: Admin = {
  email: "a@abc.com",
  userId: 123,
  dbId: 32,
  githubToken: "git12",
  startTrail: () => {
    return "trail started";
  },
  getCoupon: (name: "abc", val: 2) => {
    return 10;
  },
  role: "admin",
};
