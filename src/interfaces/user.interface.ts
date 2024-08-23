export interface User {
  _id?: string;
  username: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  token?: string;
}
export type InputLogin = {
  email: string;
  password: string;
}