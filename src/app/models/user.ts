//Example with Class and Interface
export class UserClass {
  constructor(
    public userName: string,
    public email: string,
    public avatar: string,
    public name: string,
    public lastName: string
  ) {}
}
//Example with Interface
export interface UserInterface {
  userName: string;
  name: string;
  lastName: string;
  email: string;
  avatar: string;
}
